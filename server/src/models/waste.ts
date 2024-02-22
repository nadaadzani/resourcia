import { ObjectId } from "mongodb";
import { getDatabase } from "../config/mongoConnection.js";
import { GraphQLError } from "graphql";
import { getProductById } from "./product.js";
import { getUserById } from "./user.js";

const getCollection = () => {
  const db = getDatabase();
  const pickupOrderCollection = db.collection("pickupOrders");
  return pickupOrderCollection;
};

export const addPickupOrder = async (
  userId: string,
  lat: string,
  lng: string
) => {
  const collection = getCollection();

  const userFound = await getUserById(userId);
  if (!userFound) throw new GraphQLError("User Not Found");

  const response = await collection.insertOne({
    userId: new ObjectId(userId),
    lat,
    lng,
    status: "Incomplete",
    createdAt: new Date(),
  });

  const order = await collection.findOne({ _id: response.insertedId });
  return order;
};

export const getAllPickupOrder = async (
  userId: string,
  status?: string | undefined
) => {
  const collection = getCollection();

  const userFound = await getUserById(userId);
  if (userFound.role !== "Admin") {
    let body: { status?: string; userId: ObjectId } = {
      userId: new ObjectId(userId),
    };
    if (status) body.status = status;

    const data = await collection.find(body).sort({ createdAt: -1 }).toArray();

    return data;
  }

  let body: { status?: string } = {};
  if (status) body.status = status;

  const data = await collection.find(body).sort({ createdAt: -1 }).toArray();

  return data;
};

export const getPickupOrderById = async (id: string) => {
  const collection = getCollection();
  const data = await collection.findOne({ _id: new ObjectId(id) });
  if (!data) throw new GraphQLError("Data Not Found");
  return data;
};

export const changeStatusPickupOrder = async (pickupOrderId: string) => {
  const collection = getCollection();

  await collection.updateOne(
    { _id: new ObjectId(pickupOrderId) },
    { $set: { status: "Complete" } }
  );

  const data = await collection.findOne({ _id: new ObjectId(pickupOrderId) });

  return data;
};
