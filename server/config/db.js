import mongoose from "mongoose"

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/devbay`)
        console.log("MongoDB connection successful:",connectionInstance.connection.host)
    } catch (error) {
        console.log('mongoDB connection error',error)
        process.exit(1)
    }
}

export default connectDB