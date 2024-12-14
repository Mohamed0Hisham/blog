// import { MongoClient } from "mongodb";
// import { configDotenv } from "dotenv";

// configDotenv();

// let client;
// let clientPromise; // Promise to ensure the client is only initialized once

// const connectToDatabase = async () => {
// 	if (!client) {
// 		// If the client is not initialized, create a new instance
// 		client = new MongoClient(process.env.DB_URL);
// 		clientPromise = client.connect(); // Initiate connection
// 		console.log("Database connection initialized 🚀");
// 	}
// 	await clientPromise; // Wait for the connection to be established
// 	return client;
// };
// // Export a function to get a specific database
// export const Database = async (dbName) => {
//     const client = await connectToDatabase();
// 	return client.db(dbName || process.env.DB_NAME); // Return the database instance
// };

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
