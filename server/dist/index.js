import { ApolloServer } from "@apollo/server";
import { resolvers, typeDefs } from "./schemas/user";
const server = new ApolloServer({
    typeDefs: [typeDefs],
    resolvers: [resolvers],
    introspection: true,
});
