import { ApolloServer } from 'apollo-server-lambda'

import { Context } from './context'
import { resolvers } from './resolvers'
import { typeDefs } from './schema'

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  tracing: true,
  context: async ({ event, context }): Promise<Context> => {
    console.log(JSON.stringify({ event, context }))

    return {
      event,
      requestContext: event.requestContext,
      awsContext: context,
      clientUserAgent: event.requestContext.identity.userAgent,
      clientIp: event.requestContext.identity.sourceIp,
    }
  },
})

export const handler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
})
