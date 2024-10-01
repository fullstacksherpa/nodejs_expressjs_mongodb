import "dotenv/config.js";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error(
        "MongoDB connection URI is not defined in environment variables."
      );
    }

    mongoose.set("strictQuery", true);

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connected successfully ✅ || DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("❌ MONGODB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
