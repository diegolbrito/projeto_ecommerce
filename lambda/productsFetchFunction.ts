import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    
    const lambdaRequestID = context.awsRequestId
    const apiRequestID = event.requestContext.requestId

    console.log(`API Gateway requestID: ${apiRequestID} | Lambda requestID: ${lambdaRequestID}`)

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "GET products OK"
        })
    }
}