import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connection(process.env.MONGO_URL)
        console.log(`databse connected succsfully on ${conn.connection.host}`)
    } catch (error) {
        console.error(`Mongodb server crashed due to ${error}`);
        process.exit(1)
    }
}

export default connectDB