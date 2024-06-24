// LEARNING CRUD AND EXPRESS ROUTING
// MVC PATTERN

// MODEL = data
// VIEWS = LOGIC
// CONTROLLER = URL 

// IN NODE/EXPRESS = app.js where server will run and middleware be use
// routes = its like the urls IN DJANGO
// controllers is like the VIEWS

// NEXT TO LEARN IS DATABASE

const express = require("express");
const app = express();
const path = require("path");
const { user } = require("./data.js");

const people = require("./routes/people.js");

const auth = require("./routes/auth.js");


// MIDDLEWARE ( which work in the middle of the functions )
app.use(express.urlencoded({ extends: true })); // for url passed
app.use(express.static("./public"));
app.use(express.json()); // for json passed
app.use("/api/people", people); // so it is like saying each api/people  from people require can be use in this server? EXACTLY
// OKAY IT AINT WORKING BECAUSE OF THE / lol

app.use("/api/login", auth);


// FOR HTML 

// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, "./html/index.html"));
// });

// app.get("/about", (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, "./html/about.html"));
// });

// app.get("/forms", (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, "./html/post.html"));
// });

// app.post("/submit", (req, res) => {
//   console.log(req.body);
//   const { name } = req.body;

//   if (!name) {
//     return res.status(400).json({ success: false, msg: "Please Enter A Name" });
//   } else {
//     res.send(`HEY ${name}`);
//   }
// });



app.listen(5000);
