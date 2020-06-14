import { gql } from "apollo-server-express"

export const typeDef = gql`
  type User {
    username: String
  }

  type Query {
    users: String
  }
`

export const resolvers = {
  Query: {
    users: () => {
      return "users resolver"
    },
  },
}
