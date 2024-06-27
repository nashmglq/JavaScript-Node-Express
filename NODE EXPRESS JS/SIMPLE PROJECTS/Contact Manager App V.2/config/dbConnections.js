const mongoose = require("mongoose");
// use async and await for mongo(MONGODB RETURNS PROMISE)
const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("HOST", connect.connection.host, "NAME: ", connect.connection.name)
    }catch{
        console.log(err)
    }
}

module.exports = connectDb