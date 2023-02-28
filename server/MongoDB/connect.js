import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
let MONGOOSE_URI = process.env.MONGOOSE_URI

export const MongoConnect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(MONGOOSE_URI, () => {
        console.log("Mongoose Connected to database Succesfully")
    })
}

