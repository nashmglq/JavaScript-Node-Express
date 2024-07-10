const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const connectDb = require("./config/configDb")
const routes = require("./routes/contact")
const port = process.env.PORT || 5000;
const path = require("path")

// how to send data to frontend
// npm install 

app.set('view engine', 'ejs'); // to set the ejs as renderer (its liek saying view engine is ejs)
app.set('views', path.join(__dirname, 'html')); // views is a key word followed up by the directory where to render


connectDb()
app.use(express.json());

app.use(express.urlencoded({ extends: true })); 



app.use(express.static("./public"))

app.use("/", routes)

app.listen(port , () => {
    console.log("LISTENING TO PORT: ", port)
})