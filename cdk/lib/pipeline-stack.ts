import * as cdk from 'aws-cdk-lib'
import {
  aws_certificatemanager as acm,
  aws_cloudfront as cloudfront, aws_codebuild as codebuild, aws_codepipeline as codepipeline,
  aws_codepipeline_actions as codepipeline_actions,
  aws_route53 as route53,
  aws_s3 as s3,
  SecretValue,
  aws_route53_targets as targets
} from 'aws-cdk-lib'
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins'
import { PipelineType } from 'aws-cdk-lib/aws-codepipeline'
import type { Construct } from 'constructs'

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    cdk.Tags.of(this).add('LastDeployed', '2026-03-12 17:00:00')

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

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      'HelpCenterCertificate',
      'arn:aws:acm:us-east-1:884568634535:certificate/fdf2b4ad-c561-48ab-bc43-c63f460d1b2e'
    );

    // Create a new CloudFront distribution
    const helpCenterDistribution = new cloudfront.Distribution(this, 'HelpCenterDistribution', {
      comment: 'Sairis Help Center',
      defaultRootObject: 'index.html',
      domainNames: ['help.sairis.ai', 'help.dev.sairis.ai', 'help.test.sairis.ai', 'help.stage.sairis.ai'],
      certificate: certificate,
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

    // Import the hosted zone using both the exported zone ID and providing the zone name prod
    const hostedZoneProd = route53.HostedZone.fromHostedZoneAttributes(this, 'HelpCenterHostedZoneProd', {
      hostedZoneId: cdk.Fn.importValue('prod-zone-id'),
      zoneName: 'sairis.ai'  // You need to provide the root domain name here
    });

    // Create the DNS record pointing to the CloudFront distribution
    new route53.ARecord(this, 'HelpCenterDnsRecordProd', {
      zone: hostedZoneProd,
      recordName: 'help', // Creates 'help.sairis.ai'
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(helpCenterDistribution)),
    });

    // Import the dev hosted zone using both the exported zone ID and providing the zone name
    const hostedZoneDev = route53.HostedZone.fromHostedZoneAttributes(this, 'HelpCenterHostedZoneDev', {
      hostedZoneId: cdk.Fn.importValue('dev-zone-id'), // Update this to your dev zone ID export name
      zoneName: 'dev.sairis.ai'  // The dev subdomain zone name
    });

    // Create the DNS record pointing to the CloudFront distribution
    new route53.ARecord(this, 'HelpCenterDnsRecordDev', {
      zone: hostedZoneDev,
      recordName: 'help', // Creates 'help.dev.sairis.ai'
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(helpCenterDistribution)),
    });

    // Import the test hosted zone using both the exported zone ID and providing the zone name
    const hostedZoneTest = route53.HostedZone.fromHostedZoneAttributes(this, 'HelpCenterHostedZoneTest', {
      hostedZoneId: cdk.Fn.importValue('test-zone-id'), // Update this to your test zone ID export name
      zoneName: 'test.sairis.ai'  // The test subdomain zone name
    });

    // Create the DNS record pointing to the CloudFront distribution
    new route53.ARecord(this, 'HelpCenterDnsRecordTest', {
      zone: hostedZoneTest,
      recordName: 'help', // Creates 'help.test.sairis.ai'
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(helpCenterDistribution)),
    });

    // Import the stage hosted zone using both the exported zone ID and providing the zone name
    const hostedZoneStage = route53.HostedZone.fromHostedZoneAttributes(this, 'HelpCenterHostedZoneStage', {
      hostedZoneId: cdk.Fn.importValue('stage-zone-id'), // Update this to your stage zone ID export name
      zoneName: 'stage.sairis.ai'  // The stage subdomain zone name
    });

    // Create the DNS record pointing to the CloudFront distribution
    new route53.ARecord(this, 'HelpCenterDnsRecordStage', {
      zone: hostedZoneStage,
      recordName: 'help', // Creates 'help.stage.sairis.ai'
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(helpCenterDistribution)),
    });

    const pipeline = new codepipeline.Pipeline(this, 'Pipeline', {
      pipelineName: `HelpCenterPipeline`,
      restartExecutionOnUpdate: true,
      pipelineType: PipelineType.V2,
      artifactBucket: helpCenterBucketArtifact,

    })

    const outputSources = new codepipeline.Artifact()
    const outputBuilds = new codepipeline.Artifact()

    pipeline.addStage({
      stageName: 'Source',
      actions: [
        new codepipeline_actions.GitHubSourceAction({
          actionName: 'MergedInGitHub',
          owner: 'sairis-ai',
          repo: 'help-center',
          oauthToken: SecretValue.secretsManager('GIT_HUB2'),
          branch: 'main',
          output: outputSources,
          trigger: codepipeline_actions.GitHubTrigger.WEBHOOK,
        }),
      ],
    })

    const invalidateHelpCenter = new codebuild.PipelineProject(this, `InvalidateHelpCenter`, {
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          build: {
            commands: [

              `aws cloudfront create-invalidation --distribution-id ${helpCenterDistribution.distributionId} --paths "/*"`,
              // Choose whatever files or paths you'd like, or all files as specified here
            ],
          },
        },
      }),
      environmentVariables: {
        CLOUDFRONT_ID: { value: helpCenterDistribution.distributionId },
      },
    })


    const buildProject = new codebuild.PipelineProject(this, 'Build HelpCenter SPA', {
      projectName: `HelpCenterSPA`,
      buildSpec: codebuild.BuildSpec.fromObject({
        version:
          '0.2',
        phases:
        {
          install:
          {
            commands: [
              // 'npm --version',
              // 'node --version',
              'export NODE_OPTIONS=--max_old_space_size=6000',
              'npm install n',
              'n 22',
              'node --version',
              'npm install',
            ],
          },
          build:
          {
            commands: [
              'npm run docs:build',
              'ls -la docs/.vitepress/dist',
            ],
          },
        },
        artifacts: {
          'base-directory': 'docs/.vitepress/dist',
          'files': ['**/*']
        },
      }),
      environment: {
        buildImage: codebuild.LinuxArmBuildImage.AMAZON_LINUX_2_STANDARD_3_0,
      },
    })

    pipeline.addStage({
      stageName: 'Build',
      actions: [
        new codepipeline_actions.CodeBuildAction({
          actionName: 'HelpCenterBuild',
          project: buildProject,
          input: outputSources,
          outputs: [outputBuilds],
        }),
      ],
    })

    // here we will deploy and invalidate the cloudfront cache
    pipeline.addStage({
      stageName: 'DeployHelpCenter',
      actions: [

        new codepipeline_actions.S3DeployAction({
          actionName: 'HelpCenterDeploy',
          input: outputBuilds,
          bucket: helpCenterBucket,
          runOrder: 1,
        }),
        new codepipeline_actions.CodeBuildAction({
          actionName: 'HelpCenterInvalidateCache',
          project: invalidateHelpCenter,
          input: outputBuilds,
          runOrder: 2,
        }),
      ],
    })

    helpCenterDistribution.grantCreateInvalidation(invalidateHelpCenter)
  }
}
