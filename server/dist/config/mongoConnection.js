import { MongoClient } from "mongodb";
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);
const dbName = "resourcia";
let db;
export async function mongoConnect() {
    try {
        await client.connect();
        console.log("MongoDB successfully connected");
        db = client.db(dbName);
        return "done";
    }
    catch (error) {
        await client.close();
    }
}
export function getDatabase() {
    return db;
}
