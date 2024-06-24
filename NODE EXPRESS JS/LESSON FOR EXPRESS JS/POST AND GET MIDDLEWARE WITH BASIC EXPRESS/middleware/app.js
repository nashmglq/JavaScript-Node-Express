const express = require("express");
const app = express();
const logger = require("./logger.js");
const auth = require("./auth.js");

const morgan = require("morgan")

// learning MIDDLEWARE
// so middleware is just something that we put as a part of our parameters or arguement that will work in the middle of the funciton
// req => middleware => res 

// MIDDLEWARE IS IMPORTANT

// app.use([logger, auth]); // the use will add the middleware to all app. 
// we can also use the express.static
// AND WE CAN USE THIRD PARTY LIKE MORGAN

// app.use(morgan('tiny')) // use app.use so all the app can use morgan

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.get("/about", (req, res) => {
  res.send("ABOUT");
});

app.get("/api/product", (req, res) => {
  res.send("PRODUCTS");
});

app.get("/api/items", (req, res) => {
  res.send("items");
});



app.get("/api/query", [logger, auth] ,(req, res) => { // comment above but still same it just show how multiple middleware work
  res.send(req.user) // so what will happen is the auth middleware will send something which is in this case the req.user
});

app.listen(5000);
