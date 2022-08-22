import * as cdk from "aws-cdk-lib"
import * as lambdaNodeJS from "aws-cdk-lib/aws-lambda-nodejs"
import * as apigateway from "aws-cdk-lib/aws-apigateway"
import * as cwlogs from "aws-cdk-lib/aws-logs"
import { Construct } from "constructs"
import { RemovalPolicy } from "aws-cdk-lib"
import { RetentionDays } from "aws-cdk-lib/aws-logs"

interface ECommerceApiStackProps extends cdk.StackProps {
    productsFetchHandler: lambdaNodeJS.NodejsFunction
}

export class ECommerceApiStack extends cdk.Stack {
        constructor(scope: Construct, id: string, props: ECommerceApiStackProps) {
        super(scope, id, props)

            const logGroup = new cwlogs.LogGroup(this, "EcommerceApiLogs", {
                removalPolicy: RemovalPolicy.DESTROY,
                retention: RetentionDays.ONE_DAY
            })
            
            const api = new apigateway.RestApi(this, "EcommerceApi", {
                restApiName: "ECommerceApi",
                deployOptions: {
                    accessLogDestination: new apigateway.LogGroupLogDestination(logGroup),
                    accessLogFormat: apigateway.AccessLogFormat.jsonWithStandardFields({
                        httpMethod: true,
                        ip: true,
                        protocol: true,
                        requestTime: true,
                        resourcePath: true,
                        responseLength: true,
                        status: true,
                        caller: true,
                        user: true
                    })
                }
            })

            const productsFetchIntegration = new apigateway.LambdaIntegration(props.productsFetchHandler)
            const productsResource = api.root.addResource("products")
            productsResource.addMethod("GET", productsFetchIntegration)
    }
}