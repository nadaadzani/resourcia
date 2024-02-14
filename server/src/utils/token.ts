import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "not-safe-secret-key";

// !! Experiment: Do a signToken with jose
export const signToken = (payload: object) => jwt.sign(payload, SECRET_KEY);
