export const productTypeDefs = `#graphql
    type Products {
        name: String
    }

    type Query {
        getAllProducts: [Products]
    }

    type Mutation {
        createProduct: Products
    }
`;

export const productResolvers = {
  Query: {
    getAllProducts: async (_parent, args) => {},
  },
  Mutation: {
    createProduct: async (_parent, args) => {},
  },
};
