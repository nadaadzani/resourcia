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
  province: string,
  address: string
) => {
  const collection = getCollection();

  const productFound = await getProductById(productId);
  if (!productFound) throw new GraphQLError("Product Not Found");
  const userFound = await getUserById(userId);
  if (!userFound) throw new GraphQLError("User Not Found");

  if (userFound.totalPoint <= productFound.price)
    throw new GraphQLError(`You don't have enough points`);

  const response = await collection.insertOne({
    userId: new ObjectId(userId),
    productId: new ObjectId(productId),
    province,
    address,
    status: "Incomplete",
    createdAt: new Date(),
  });

  const order = await collection.findOne({ _id: response.insertedId });
  return order;
};

export const getAllProductOrder = async (userId: string) => {
  const collection = getCollection();

  const userFound = await getUserById(userId);

  if (userFound.role !== "Admin") {
    const aggAdmin = [
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: {
          path: "$product",
          preserveNullAndEmptyArrays: true,
        },
      },
    ];

    const data = await collection
      .aggregate(aggAdmin)
      .sort({ createdAt: -1 })
      .toArray();

    return data;
  }

  const agg = [
    {
      $match: {
        userId: new ObjectId("65ccbfa9ff6026ac00a5e56e"),
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: {
        path: "$product",
        preserveNullAndEmptyArrays: true,
      },
    },
  ];

  const data = await collection
    .aggregate(agg)
    .sort({ createdAt: -1 })
    .toArray();

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
