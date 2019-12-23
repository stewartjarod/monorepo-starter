import { gql } from 'apollo-server-lambda'

export const typeDefs = gql`
type Query {
  serviceStatus: ServiceStatus!
}

type ServiceStatus {
  status: Status!
}

enum Status {
  UP
  DOWN
}
`
