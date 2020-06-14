import { makeExecutableSchema } from "apollo-server-express"

import { typeDef as User, resolvers as userResolvers } from "./user/graphql"

const schema = makeExecutableSchema({
  typeDefs: [User],
  resolvers: {
    ...userResolvers,
  },
})

export default schema
