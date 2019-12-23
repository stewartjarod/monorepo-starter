import { Context } from './context'

export const resolvers = {
  Query: {
    serviceStatus: (parent: undefined, args: undefined, context: Context): any => {
      return { status: 'UP' }
    },
  }
}
