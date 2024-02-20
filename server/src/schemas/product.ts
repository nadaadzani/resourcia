import { getProductById, getProducts } from "../models/product.js";

export const productTypeDefs = `#graphql
    type Product {
        _id: ID
        name: String!
        price: Int!
        description: String!
        category: String
        stock: Int
        image: String
    }

    type Query {
        getProducts(search: String, filter: String): [Product]
        getProductById(id: String!): Product
    }

    type Mutation {
        createProduct: Product
    }
`;

type UserInput = {
  search?: string;
  filter?: string;
};

export const productResolvers = {
  Query: {
    getProducts: async (_parent: unknown, args: UserInput) => {
      const { search, filter } = args;
      const products = await getProducts(search, filter);
      return products;
    },
    getProductById: async (_parent: unknown, args: { id: string }) => {
      const { id } = args;
      const product = await getProductById(id);
      return product;
    },
  },
};
