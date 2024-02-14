import { ObjectId } from "mongodb";
import { getDatabase } from "../config/mongoConnection.js";

const getCollection = () => {
  const db = getDatabase();
  const postCollection = db.collection("products");
  return postCollection;
};

export const getProducts = async (search: string, offset: number) => {
  const postCollection = getCollection();
  let products: unknown;

  // No Search
  if (!search || search === "") {
    products = await postCollection.find({}).limit(8).skip(offset).toArray();
    return products;
  }

  // With Search
  products = await postCollection
    .find({
      name: { $regex: search, $options: "i" },
    })
    .limit(8)
    .skip(offset)
    .toArray();

  return products;
};

export const getProductById = async (id: string) => {
  const postCollection = getCollection();

  const product = await postCollection.findOne({
    _id: new ObjectId(id),
  });

  return product;
};
