import { GraphQLError } from "graphql";
import { TokenPayload } from "../models/user.js";
import { createLocation, getLocation } from "../models/location.js";

export const locationTypeDefs = `#graphql
    type Location {
        _id:ID
        lat:String
        lng:String
    }

    type Query {
        getLocation: [Location]
    }

    type Mutation {
        createLocation(lat:String!, lng:String!):Location
    }
`;

export const locationResolvers = {
  Query: {
    getLocation: async () => {
      const data = await getLocation();
      return data;
    },
  },
  Mutation: {
    createLocation: async (
      _parent: unknown,
      args: { lat: string; lng: string },
      contextValue: { authentication: () => Promise<TokenPayload> }
    ) => {
      const payload = await contextValue.authentication();
      const { lat, lng } = args;

      if (payload.role !== "Admin") throw new GraphQLError("Forbidden");
      const data = await createLocation(lat, lng);
      return data;
    },
  },
};
