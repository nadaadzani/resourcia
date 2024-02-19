import { login, register } from "../models/user.js";

export const userTypeDefs = `#graphql
    type User {
        _id: ID
        email: String!
        password: String
        fullName: String!
        role: String
        totalPoint: Int
    }

    input RegisterInput {
        email: String
        fullName: String
        password: String
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
        register(inputRegister: RegisterInput!): User
        login(inputLogin: LoginInput!): LoginResponse
    }
`;

type inputRegister = {
  inputRegister: {
    email: string;
    fullName: string;
    password: string;
  };
};

type loginInput = {
  inputLogin: {
    email: string;
    password: string;
  };
};

export const userResolvers = {
  Query: {
    getUserByLoginInfo: async (_parent: unknown, args: unknown) => {},
  },
  Mutation: {
    register: async (_parent: unknown, args: inputRegister) => {
      const payload = args.inputRegister;
      const newUser = await register(payload);
      return newUser;
    },
    // ! Sending a database _id to client might pose a security issue
    login: async (_parent: unknown, args: loginInput) => {
      const payload = args.inputLogin;
      const loggedUser = await login(payload);
      return loggedUser;
    },
  },
};
