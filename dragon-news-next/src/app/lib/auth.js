import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_CONNECTION);
const db = client.db("dragon-news-db");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    //...other options
    emailAndPassword: {
      enabled: true,
    },
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
});
