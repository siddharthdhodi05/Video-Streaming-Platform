import mongoose from 'mongoose';  // Use ES module syntax for importing
import dotenv from 'dotenv';      // Import dotenv

dotenv.config();  // Load environment variables

const connectToDatabase = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;

    if (!mongoURL) {
      throw new Error("MongoDB connection URL is undefined.");
    }

    const options = {
      autoIndex: true,
    };

    const connection = await mongoose.connect(mongoURL, options);

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    process.exit(1);
  }
};

export default connectToDatabase;