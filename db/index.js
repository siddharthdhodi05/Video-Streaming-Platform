/*import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";

const connectDB = async () =>{
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`connection established at ${connectionInstance.connection.host}`);
    
  } catch (error) {
    console.log("MONGODB connection ERROR: ", error)
    process.exit(1)
  }
}

export default connectDB;*/

import "dotenv/config";
import mongoose from "mongoose";

/**
 * Connects to MongoDB using Mongoose.
 * @async
 * @returns {Promise<void>} A Promise that resolves when the connection is successful.
 * @throws {Error} Throws an error if MongoDB connection URL is undefined or if connection fails.
 */
export const connectToDatabase = async () => {
  try {
    const mongoURL = process.env.MONGODB_URI; // Ensure this matches your .env variable name

    if (!mongoURL) {
      throw new Error("MongoDB connection URL is undefined.");
    }

    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};

// Usage example (in your src/index.js or wherever you initialize your server)

