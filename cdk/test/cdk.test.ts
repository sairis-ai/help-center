import * as cdk from 'aws-cdk-lib'
import { Match, Template } from 'aws-cdk-lib/assertions'
import { PipelineStack } from '../lib/pipeline-stack'

const template = (): Template => {
  const app = new cdk.App()
  const stack = new PipelineStack(app, 'HelpCenterPipelineStack', {
    env: { account: '884568634535', region: 'us-west-2' },
  })
  return Template.fromStack(stack)
}

const lifecycleRules = (name: string): any[] => {
  const buckets = template().findResources('AWS::S3::Bucket', {
    Properties: { BucketName: name },
  })
  const ids = Object.keys(buckets)
  expect(ids).toHaveLength(1)
  return buckets[ids[0]].Properties.LifecycleConfiguration.Rules
}

describe('help center bucket lifecycle rules', () => {
  it('artifact bucket rules match the rules applied by hand on 2026-11-22', () => {
    const rules = lifecycleRules('sairis-help-center-bucket-artifact')
    expect(rules).toEqual([
      {
        Id: 'expire-help-center-pipeline-artifacts',
        Prefix: 'HelpCenterPipeline/',
        ExpirationInDays: 30,
        Status: 'Enabled',
      },
      {
        Id: 'expire-help-center-artifact-noncurrent-versions',
        NoncurrentVersionExpiration: { NoncurrentDays: 7 },
        Status: 'Enabled',
      },
      {
        Id: 'abort-help-center-incomplete-uploads',
        AbortIncompleteMultipartUpload: { DaysAfterInitiation: 7 },
        Status: 'Enabled',
      },
    ])
  })

  it('main bucket rules match and never expire current versions', () => {
    const rules = lifecycleRules('sairis-help-center-bucket')
    expect(rules).toEqual([
      {
        Id: 'expire-help-center-noncurrent-versions',
        NoncurrentVersionExpiration: { NoncurrentDays: 30, NewerNoncurrentVersions: 2 },
        Status: 'Enabled',
      },
      {
        Id: 'remove-help-center-expired-delete-markers',
        ExpiredObjectDeleteMarker: true,
        Status: 'Enabled',
      },
      {
        Id: 'abort-help-center-incomplete-uploads',
        AbortIncompleteMultipartUpload: { DaysAfterInitiation: 7 },
        Status: 'Enabled',
      },
    ])
    for (const rule of rules) {
      expect(rule.ExpirationInDays).toBeUndefined()
      expect(rule.ExpirationDate).toBeUndefined()
    }
  })

  it('leaves the CloudFront logs bucket without lifecycle rules', () => {
    const buckets = template().findResources('AWS::S3::Bucket', {
      Properties: { BucketName: 'sairis-help-center--logs-bucket' },
    })
    for (const b of Object.values(buckets) as any[]) {
      expect(b.Properties.LifecycleConfiguration).toBeUndefined()
    }
  })
})

describe('help center pipeline source', () => {
  it('reads GitHub through the help-center-github connection', () => {
    const arn = 'arn:aws:codeconnections:us-west-2:884568634535:connection/774147bf-7b03-4127-9ae8-478b36909f90'
    const t = template()
    t.hasResourceProperties('AWS::CodePipeline::Pipeline', {
      Stages: Match.arrayWith([
        Match.objectLike({
          Name: 'Source',
          Actions: [Match.objectLike({ Configuration: Match.objectLike({ ConnectionArn: arn }) })],
        }),
      ]),
    })
    t.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: Match.arrayWith([
          Match.objectLike({ Action: 'codestar-connections:UseConnection', Resource: arn }),
        ]),
      },
    })
  })
})
