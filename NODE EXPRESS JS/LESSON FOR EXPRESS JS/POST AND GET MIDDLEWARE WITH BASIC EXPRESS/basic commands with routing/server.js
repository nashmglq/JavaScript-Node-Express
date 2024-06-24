const express = require("express");
const path = require("path")
const app = express();


app.use(express.static("./public")) //express.static serves files (like images or CSS) from a folder. AND (app.use so all the app can use it)
//Yes, as long as the files are inside the specified folder and correctly linked in the HTML, express.static will serve them.
// and if i put ur index html to that folder it will load it as initial


// sendFile is a built in with EXPRESS
// sendFile in Express.js is used to respond to HTTP requests by sending files from the server to the client.


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
}) 

app.get("/about", (req,res) => { 
    res.sendFile(path.join(__dirname, "./about.html"))
}) 

app.all("*", (req,res)=>{
    res.status(404).send("Something went wrong")
})



app.listen(5000)