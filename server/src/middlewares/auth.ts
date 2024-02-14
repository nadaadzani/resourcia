import { GraphQLError } from "graphql";
import { getPayload } from "../utils/token.js";
import { getUserById } from "../models/user.js";
import { IncomingMessage } from "http";

export const authentication = async (req: IncomingMessage) => {
  let { authorization } = req.headers;
  if (!authorization) throw new GraphQLError("Invalid Token");

  let token = authorization.split(` `)[1];
  let payload = getPayload(token);

  let userFound = await getUserById(payload.userId as string);
  if (!userFound) throw new GraphQLError("Invalid Token");

  return payload;
};
