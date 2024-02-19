import { GraphQLError } from "graphql";
import {
  addProductOrder,
  changeStatusProductOrder,
  getAllProductOrder,
  getProductOrderById,
} from "../models/order.js";
import { TokenPayload } from "../models/user.js";

export const productOrderTypeDefs = `#graphql
    type ProductOrder {
        _id:ID
        userId:String
        productId:String
        province:String
        address:String
        status:String
        createdAt:String
    }

    type Query {
        getProductOrder(status:String): [ProductOrder]
        getProductOrderById(id: String!): ProductOrder
    }

    type Mutation {
        createProductOrder(productId:String!, province:String!, address:String!): ProductOrder
        changeStatusProductOrder(productOrderId:String!):ProductOrder
    }
`;

export type ProductOrderInput = {
  productId: string;
  province: string;
  address: string;
};

export const productOrderResolvers = {
  Query: {
    getProductOrder: async (
      _parent: unknown,
      args: { status: string | undefined },
      contextValue: { authentication: () => Promise<TokenPayload> }
    ) => {
      const { userId } = await contextValue.authentication();
      const { status } = args;

      const data = await getAllProductOrder(userId as string, status);
      return data;
    },
    getProductOrderById: async (_parent: unknown, args: { id: string }) => {
      const { id } = args;
      const data = await getProductOrderById(id);
      return data;
    },
  },
  Mutation: {
    createProductOrder: async (
      _parent: unknown,
      args: ProductOrderInput,
      contextValue: { authentication: () => Promise<TokenPayload> }
    ) => {
      const { userId } = await contextValue.authentication();
      const { productId, province, address } = args;
      const productOrder = await addProductOrder(
        productId,
        userId as string,
        province,
        address
      );
      return productOrder;
    },
    changeStatusProductOrder: async (
      _parent: unknown,
      args: { productOrderId: string },
      contextValue: { authentication: () => Promise<TokenPayload> }
    ) => {
      const { role } = await contextValue.authentication();
      if (role !== "Admin") throw new GraphQLError("Forbidden");
      const { productOrderId } = args;
      const productOrder = await changeStatusProductOrder(productOrderId);
      return productOrder;
    },
  },
};
