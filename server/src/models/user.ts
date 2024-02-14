import { GraphQLError } from "graphql";
import { getDatabase } from "../config/mongoConnection.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { signToken } from "../utils/token.js";

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
  });

  return { _id: user._id, token };
};
