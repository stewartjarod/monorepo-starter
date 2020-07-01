// import { Context } from './context'

export const resolvers = {
  Query: {
    serviceStatus: (): unknown => {
      return { status: true }
    },
  },
}
