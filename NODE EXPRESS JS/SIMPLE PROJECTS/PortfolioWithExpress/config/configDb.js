const mongoose = require("mongoose");


const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDb