import { GraphQLError } from "graphql";
import {
  addPickupOrder,
  changeStatusPickupOrder,
  getAllPickupOrder,
  getPickupOrderById,
} from "../models/waste.js";
import { TokenPayload } from "../models/user.js";

export const pickupOrderTypeDefs = `#graphql
    type PickupOrder {
        _id:ID
        userId:String
        lat:String
        lng:String
        status:String
        createdAt:String
    }

    type Query {
        getPickupOrder(status:String): [PickupOrder]
        getPickupOrderById(id: String!): PickupOrder
    }

    type Mutation {
        createPickupOrder(lat:String!, lng:String!): PickupOrder
        changeStatusPickupOrder(pickupOrderId:String!):PickupOrder
    }
`;

export type PickupOrderInput = {
  lat: string;
  lng: string;
};

export const pickupOrderResolvers = {
  Query: {
    getPickupOrder: async (
      _parent: unknown,
      args: { status: string | undefined },
      contextValue: { authentication: () => Promise<TokenPayload> }
    ) => {
      const { userId } = await contextValue.authentication();
      const { status } = args;

      const data = await getAllPickupOrder(userId as string, status);
      return data;
    },
    getPickupOrderById: async (_parent: unknown, args: { id: string }) => {
      const { id } = args;
      const data = await getPickupOrderById(id);
      return data;
    },
  },
  Mutation: {
    createPickupOrder: async (
      _parent: unknown,
      args: PickupOrderInput,
      contextValue: { authentication: () => Promise<TokenPayload> }
    ) => {
      const { userId } = await contextValue.authentication();
      const { lat, lng } = args;
      const pickupOrder = await addPickupOrder(userId as string, lat, lng);
      return pickupOrder;
    },
    changeStatusPickupOrder: async (
      _parent: unknown,
      args: { pickupOrderId: string },
      contextValue: { authentication: () => Promise<TokenPayload> }
    ) => {
      const { role } = await contextValue.authentication();
      if (role !== "Admin") throw new GraphQLError("Forbidden");
      const { pickupOrderId } = args;
      const PickupOrder = await changeStatusPickupOrder(pickupOrderId);
      return PickupOrder;
    },
  },
};
