import { gql } from 'apollo-server-lambda'

export const typeDefs = gql`
  type Query {
    serviceStatus: ServiceStatus!
  }

  type ServiceStatus {
    ok: Boolean!
  }
`
