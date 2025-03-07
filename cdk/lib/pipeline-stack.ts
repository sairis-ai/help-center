import * as cdk from 'aws-cdk-lib'
import { aws_cloudfront as cloudfront, aws_codepipeline as codepipeline, aws_codepipeline_actions as codepipeline_actions, aws_s3 as s3, SecretValue } from 'aws-cdk-lib'
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins'
import * as codebuild from 'aws-cdk-lib/aws-codebuild'
import * as cdkpipelines from 'aws-cdk-lib/pipelines'
import type { Construct } from 'constructs'

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const helpCenterBucketArtifact = new s3.Bucket(this, 'HelpCenterBucketArtifact', {
      bucketName: 'sairis-help-center-bucket-artifact',
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })


    const helpCenterBucket = new s3.Bucket(this, 'HelpCenterBucket', {
      bucketName: 'sairis-help-center-bucket',
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })


    // Create CloudFront origin access identity for S3 bucket access
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'HelpCenterOAI', {
      comment: 'Access identity for help center distribution',
    });

    // Grant the OAI read access to the bucket
    helpCenterBucket.grantRead(originAccessIdentity);

    // Create a new CloudFront distribution
    const helpCenterDistribution = new cloudfront.Distribution(this, 'HelpCenterDistribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new S3Origin(helpCenterBucket, {
          originAccessIdentity,
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: cdk.Duration.minutes(0),
        },
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: cdk.Duration.minutes(0),
        },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      enableLogging: true,
      logBucket: new s3.Bucket(this, 'HelpCenterLogsBucket', {
        bucketName: 'sairis-help-center--logs-bucket',
        blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        encryption: s3.BucketEncryption.S3_MANAGED,
        enforceSSL: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        objectOwnership: s3.ObjectOwnership.OBJECT_WRITER,
      }),
      logFilePrefix: 'cloudfront-logs/',
    });

    // Create the self-mutating pipeline
    const pipeline = new cdkpipelines.CodePipeline(this, 'Pipeline', {
      pipelineName: 'HelpCenterPipeline',
      synth: new cdkpipelines.ShellStep('Synth', {
        input: cdkpipelines.CodePipelineSource.gitHub('sairis-ai/help-center', 'main', {
          authentication: SecretValue.secretsManager('GIT_HUB2'),
        }),
        commands: [
          'cd cdk',
          'npm ci',
          'npm run build',
          'npx cdk synth'
        ],
        primaryOutputDirectory: 'cdk/cdk.out'
      }),
    });

    // Add a wave for documentation build and deployment
    const docBuildStep = new cdkpipelines.CodeBuildStep('BuildDocs', {
      buildEnvironment: {
        buildImage: codebuild.LinuxArmBuildImage.AMAZON_LINUX_2_STANDARD_3_0,
      },
      commands: [
        'export NODE_OPTIONS=--max_old_space_size=6000',
        'npm install n',
        'n 20',
        'npm install',
        'npm run docs:build',
        // Copy built files to S3
        `aws s3 sync docs/.vitepress/dist s3://${helpCenterBucket.bucketName} --delete`,
        // Invalidate CloudFront cache
        `aws cloudfront create-invalidation --distribution-id ${helpCenterDistribution.distributionId} --paths "/*"`
      ],
      env: {
        S3_BUCKET: helpCenterBucket.bucketName,
        DISTRIBUTION_ID: helpCenterDistribution.distributionId,
      }
    });

    pipeline.addWave('DocDeployment', {
      post: [docBuildStep]
    });

    helpCenterDistribution.grantCreateInvalidation(docBuildStep)
  }
}
