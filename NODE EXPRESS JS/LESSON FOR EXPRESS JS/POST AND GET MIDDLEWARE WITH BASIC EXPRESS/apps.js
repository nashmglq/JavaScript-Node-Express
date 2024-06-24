const express = require("express");
const app = express();
const {user} = require("./data.js");// always remember to return the export name and destructure OR JUST THE SAME WITH THE EXPORT
const path = require("path")

app.use(express.urlencoded({ extended: true })); // So in express i can just use this unlike node i need to some codes to get response and body and chunk
// or allows Express to parse incoming request bodies with URL-encoded payloads, and extended: true enables parsing of richer data types like arrays and objects using the qs library
//while false uses the simpler querystring library for parsing.


app.use(express.static("./public"))

app.get("/", (req, res) => {
  console.log("qwe");
  const showData = user.map((some) => { 
    const { id, name } = some;
    return { id, name };
  });

  res.sendFile(path.join(__dirname, "./html/index.html"))
});

app.get("/about", (req,res) => {
  res.sendFile(path.join(__dirname, "./html/about.html"))
})

app.get("/forms", (req,res) => {
  res.sendFile(path.join(__dirname, "./html/post.html"))
})

app.post("/submit", (req,res) => {
  console.log(req.body)
  const {name} = req.body

  if(name){
    res.status(201).send(`Hi ${name}`)
  }else{
    res.status(401).send("Please provide a name")
  }
  
})

app.listen(5000);
