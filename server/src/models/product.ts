import { ObjectId } from "mongodb";
import { getDatabase } from "../config/mongoConnection.js";

const getCollection = () => {
  const db = getDatabase();
  const postCollection = db.collection("products");
  return postCollection;
};

export const getProducts = async (search: string, filter: string) => {
  const postCollection = getCollection();
  let products: unknown;

  let body: { name?: {}; category?: string } = {};
  if (search) body.name = { $regex: search, $options: "i" };
  if (filter) body.category = filter;
  products = await postCollection.find(body).toArray();
  // No Search
  // if (!search || search === "") {
  //   products = await postCollection.find({}).toArray();
  //   return products;
  // }

  // With Search
  // products = await postCollection
  //   .find({
  //     name: { $regex: search, $options: "i" },
  //   })
  //   .toArray();

  return products;
};

export const getProductById = async (id: string) => {
  const postCollection = getCollection();

  const product = await postCollection.findOne({
    _id: new ObjectId(id),
  });

  return product;
};
