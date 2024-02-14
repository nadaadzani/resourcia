import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers, typeDefs } from "./schemas/user.js";
import { productResolvers, productTypeDefs } from "./schemas/product.js";
import { mongoConnect } from "./config/mongoConnection.js";

// !! When compiling don't forget to add .js extension to each imported variables from 'created folders'!

const server = new ApolloServer({
  typeDefs: [typeDefs, productTypeDefs],
  resolvers: [resolvers, productResolvers],
  introspection: true,
});

(async () => {
  const db = await mongoConnect();
  const { url } = await startStandaloneServer(server, {
    listen: { port: Number(process.env.PORT) || 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
})();
