const mongoose = require("mongoose");
const connectToDatabase = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected");
    }catch(err){
        console.log("Server is down");
    }
}

module.exports = connectToDatabase;