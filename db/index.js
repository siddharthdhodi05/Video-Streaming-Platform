import mongoose from "mongoose";
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

export default connectDB;