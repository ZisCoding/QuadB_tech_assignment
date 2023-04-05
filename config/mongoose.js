// importing mongoose module
const mongoose = require('mongoose');

async function connectDb(){
    try{
        // connection to the local MongoDb
        await mongoose.connect('mongodb://127.0.0.1:27017/crypto');
        console.log("Connected to db successfully");
    }catch(err){
        console.log("error in connecting to db",err);
    }
    
}

connectDb();

module.exports = mongoose;