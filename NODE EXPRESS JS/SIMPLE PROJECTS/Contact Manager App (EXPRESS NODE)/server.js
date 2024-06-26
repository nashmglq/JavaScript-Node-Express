const express = require("express");
const dotenv = require("dotenv").config(); 
const app = express();
const port = process.env.PORT || 5000;
const contacts = require("./routes/contact.js");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");

connectDb(); // connect database to our server.js
app.use(express.json()); // JSON POST TO GET API
// app.use(express.urlencoded({ extends: true })); // THIS FOR URL FOR ACTUAL WEBSITE WITH UI
app.use("/api/contacts", contacts);
app.use(errorHandler)// use it to all app with errorHandler or throw new error

// errorHandler part will run on each part of the code as soon as declare



app.listen(port, () => {
    console.log(`Running on server ${port}`)
})

