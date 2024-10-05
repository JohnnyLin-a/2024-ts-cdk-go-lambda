# Welcome to your CDK Go project!

This is a blank project for Go development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
 * `go test`         run unit tests


## Reasoning on why not to use this.
- Really wordy to the point it is slowing me down when writing it.
- All primitive datatypes wrapped by jsii datatypes just to work in the native language of JS/TS.
- library updates come late as Go is not the native cdk target language when the package is being built.