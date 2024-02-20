import { GraphQLError } from "graphql";
import { getDatabase } from "../config/mongoConnection.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { signToken } from "../utils/token.js";
import { ObjectId } from "mongodb";

const getCollection = () => {
  const db = getDatabase();
  const userCollection = db.collection("users");
  return userCollection;
};

type inputRegister = {
  email: string;
  password: string;
  fullName: string;
};

type inputLogin = {
  email: string;
  password: string;
};

export type TokenPayload = {
  userId: string | ObjectId;
  userEmail: string;
  role: string;
};

export const register = async (payload: inputRegister) => {
  const userCollection = getCollection();

  // Unique email validation here:

  const newUser = await userCollection.insertOne({
    ...payload,
    password: hashPassword(payload.password),
    // No input variables
    role: "User",
    totalPoint: 0,
  });

  // Finding recently created user
  const user = await userCollection.findOne(
    {
      _id: newUser.insertedId,
    },
    { projection: { password: 0 } }
  );

  return user;
};

export const login = async (payload: inputLogin) => {
  const userCollection = getCollection();
  const { email, password } = payload;

  const user = await userCollection.findOne({
    email,
  });

  if (!user) {
    throw new GraphQLError("Invalid email or password");
  }

  const validUser = comparePassword(password, user.password);

  if (!validUser) {
    throw new GraphQLError("Invalid email or password");
  }

  const token = signToken({
    userId: user._id,
    userEmail: user.email,
    role: user.role,
  });

  return { _id: user._id, token };
};

export const getUserById = async (id: string) => {
  const userCollection = getCollection();
  const user = await userCollection.findOne({ _id: new ObjectId(id) });
  if (!user) throw new GraphQLError("User Not Found");
  return user;
};

export const adminLogin = async (payload: inputLogin) => {
  const userCollection = getCollection();
  const { email, password } = payload;

  const user = await userCollection.findOne({
    email,
  });

  if (!user) {
    throw new GraphQLError("Invalid email or password");
  }

  if (user.role !== "Admin") throw new GraphQLError("Forbidden");

  const validUser = comparePassword(password, user.password);

  if (!validUser) {
    throw new GraphQLError("Invalid email or password");
  }

  const token = signToken({
    userId: user._id,
    userEmail: user.email,
    role: user.role,
  });

  return { _id: user._id, token };
};

export const addPoin = async (poin: number, userId: string) => {
  const userCollection = getCollection();

  const user = await userCollection.findOne({
    _id: new ObjectId(userId),
  });

  if (!user) {
    throw new GraphQLError("Invalid email or password");
  }
  let totalPoint = user.totalPoint + poin;

  await userCollection.updateOne(
    { _id: new ObjectId(userId) },
    {
      $set: { totalPoint },
    }
  );

  const userFound = await userCollection.findOne(
    {
      _id: new ObjectId(userId),
    },
    { projection: { password: 0 } }
  );
  return userFound;
};
