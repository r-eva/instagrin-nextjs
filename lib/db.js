import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
const options = {};
if (!URI) throw new Error("Please add your Mongo URI to .env.local");

export async function connectToDatabase(params) {
  const client = await MongoClient.connect(URI, options);
  return client;
}
