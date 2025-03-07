#!/usr/bin/env node
/* eslint-disable perfectionist/sort-imports */
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { PipelineStack } from '../lib/pipeline-stack'

const app = new cdk.App()

// eslint-disable-next-line no-new
new PipelineStack(app, 'HelpCenterPipelineStack', {
  env: { account: '884568634535', region: 'us-west-2' },
})
