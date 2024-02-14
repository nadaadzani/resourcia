import { Db, MongoClient, ObjectId } from "mongodb";

const url =
  "mongodb+srv://nadaadzani:mendokusainene@cluster0.w2fibaz.mongodb.net/";
const client = new MongoClient(url);

const dbName: string = "resourcia";
let db: Db;

export async function mongoConnect() {
  try {
    await client.connect();
    console.log("MongoDB successfully connected");

    db = client.db(dbName);

    return "done";
  } catch (error) {
    await client.close();
  }
}

export function getDatabase() {
  return db;
}
