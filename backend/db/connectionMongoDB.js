import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connect To mongoDB");
    } catch(error) {
        console.log("Error on MongoDB connection");
    }
}

export default connectToMongoDB;