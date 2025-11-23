import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', ()=>{
        console.log('DB connected successfully');
    })
    await mongoose.connect(`${process.env.MONGODB_URI}maxbuy`)
}

export default connectDB;