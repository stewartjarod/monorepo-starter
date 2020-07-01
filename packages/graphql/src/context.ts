import { APIGatewayEventRequestContext, APIGatewayProxyEvent, CognitoIdentity, Context as AWSContext } from 'aws-lambda'

// import { Loaders } from './dataloaders'

export interface Context {
  event: APIGatewayProxyEvent
  requestContext: APIGatewayEventRequestContext
  awsContext: AWSContext
  identity?: CognitoIdentity
  token?: string
  userId?: string
  sessionId?: string
  clientIp?: string
  clientUserAgent?: string
}
