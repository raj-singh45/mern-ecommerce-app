import { config } from "./config.js";
import mongoose from "mongoose"
export const connectDb = async()=>{
    await mongoose.connect(config.MONGO_URI)
    console.log("Db connected succesfully")
}