import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { GoFunction } from "@aws-cdk/aws-lambda-go-alpha";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new GoFunction(this, "HelloWorldLambdaFunction", {
      entry: "../lambdas/hello-world",
      architecture: lambda.Architecture.ARM_64,
      runtime: lambda.Runtime.PROVIDED_AL2023,
      functionName: "HelloWorldLambdaFunction",
    });
  }
}
