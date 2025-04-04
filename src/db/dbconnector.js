
import 'dotenv/config'
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";
export const connectDB = async () => {

    try {
        const connectionInstance  = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` );
        console.log("DB connected");
    } catch (error) {
        console.log("Error MongoDb connection failed:"+error);
    }

    
};
