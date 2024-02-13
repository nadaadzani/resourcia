import { getDatabase } from "../config/mongoConnection";

export const typeDefs = `#graphql
    type User {
        _id: ID
        email: string!
        password: string!
        fullName: string!
        role: string
        totalPoint: number
    }

    type RegisterInput {
        email: string
        password: string
        fullName: string
    }

    type LoginInput {
        email: string
        password: string
    }

    type LoginResponse {
        _id: ID
        token: string
    }

    type Mutation {
        register(inputRegister: RegisterInput): User
        login(inputLogin: LoginInput): LoginResponse
    }
`;

export const resolvers = {
  Mutation: {
    register: async (_parent: unknown, args: unknown) => {},
    login: async (_parent: unknown, args: unknown) => {},
  },
};
