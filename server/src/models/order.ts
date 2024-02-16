import { ObjectId } from "mongodb";
import { getDatabase } from "../config/mongoConnection.js";
import { GraphQLError } from "graphql";
import { getProductById } from "./product.js";
import { getUserById } from "./user.js";

const getCollection = () => {
  const db = getDatabase();
  const productOrderCollection = db.collection("productOrders");
  return productOrderCollection;
};

export const addProductOrder = async (
  productId: string,
  userId: string,
  lat: string,
  lng: string
) => {
  const collection = getCollection();

  const productFound = await getProductById(productId);
  if (!productFound) throw new GraphQLError("Product Not Found");
  const userFound = await getUserById(userId);
  if (!userFound) throw new GraphQLError("User Not Found");

  const response = await collection.insertOne({
    userId: new ObjectId(userId),
    productId: new ObjectId(productId),
    lat,
    lng,
    status: "Incomplete",
    createdAt: new Date(),
  });

  const order = await collection.findOne({ _id: response.insertedId });
  return order;
};

export const getAllProductOrder = async (
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

export const getProductOrderById = async (id: string) => {
  const collection = getCollection();
  const data = await collection.findOne({ _id: new ObjectId(id) });
  if (!data) throw new GraphQLError("Data Not Found");
  return data;
};

export const changeStatusProductOrder = async (productOrderId: string) => {
  const collection = getCollection();
  await collection.updateOne(
    { _id: new ObjectId(productOrderId) },
    { $set: { status: "Complete" } }
  );
  const data = await collection.findOne({ _id: new ObjectId(productOrderId) });
  return data;
};
