import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.DB_URL;
const client = new MongoClient(uri);

let db;

export const connectDB = async () => {
	if (!db) {
		try {
			await client.connect();
			console.log("✅ MongoDB connected");
			db = client.db("blogDB"); // Specify your database name
		} catch (error) {
			console.error("❌ Error connecting to MongoDB:", error);
			throw error;
		}
	}
	return db;
};
