const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connection successfully');
    } catch (error) {
        console.log('connection failed');
    }
}

module.exports = connectDB;