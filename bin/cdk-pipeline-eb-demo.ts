#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineStack } from '../lib/cdk-pipeline-stack';
const app = new cdk.App();
new CdkPipelineStack(app, 'CdkPipelineStack', {
env: { account: '654654531438', region: 'eu-west-3' },
});
app.synth();