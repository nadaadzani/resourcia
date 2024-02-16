import { getDatabase } from "../config/mongoConnection.js";

const getCollection = () => {
  const db = getDatabase();
  const locationCollection = db.collection("locations");
  return locationCollection;
};

export const createLocation = async (lat: string, lng: string) => {
  const response = await getCollection().insertOne({ lat, lng });
  const data = await getCollection().findOne({ _id: response.insertedId });
  return data;
};

export const getLocation = async () => {
  const response = await getCollection().find({}).toArray();
  return response;
};
