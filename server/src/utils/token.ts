import jwt from "jsonwebtoken";
import { TokenPayload } from "../models/user.js";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "not-safe-secret-key";

// !! Experiment: Do a signToken with jose
export const signToken = (payload: object) => jwt.sign(payload, SECRET_KEY);

// ! I haven't put jose verifyToken
export const getPayload = (token: string) =>
  jwt.verify(token, SECRET_KEY) as TokenPayload;
