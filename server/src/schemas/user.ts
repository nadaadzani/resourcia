import { getDatabase } from "../config/mongoConnection";

export const typeDefs = `#graphql
    type User {
        _id: ID
        email: String!
        password: String!
        fullName: String!
        role: String
        totalPoint: Int
    }

    input RegisterInput {
        email: String
        password: String
        fullName: String
    }

    input LoginInput {
        email: String
        password: String
    }

    type LoginResponse {
        _id: ID
        token: String
    }

    type Query {
        getUserByLoginInfo: User
    }

    type Mutation {
        register(inputRegister: RegisterInput): User
        login(inputLogin: LoginInput): LoginResponse
    }
`;

export const resolvers = {
  Query: {
    getUserByLoginInfo: async (_parent: unknown, args: unknown) => {},
  },
  Mutation: {
    register: async (_parent: unknown, args: unknown) => {},
    login: async (_parent: unknown, args: unknown) => {},
  },
};
