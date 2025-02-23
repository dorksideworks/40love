import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection
        return connection
    } catch(error) {
        console.log("ERROR CONNECTING to mongodb");
    }
}