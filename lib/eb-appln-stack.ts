import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface EBEnvProps extends cdk.StackProps {
    minSize?: string;
    maxSize?: string;
    instanceType?: string;
    envName?: string;
}

export class EBAppInStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: EBEnvProps) {
        super(scope, id, props);
    }
}