const http = require("http"); //creating http, http is the one that send data to the web
// require("dotenv").config();
const getReq = require("./methods/get-request.js");
const postReq = require("./methods/post-request.js");
const putReq = require("./methods/put-request.js");
const deleteReq = require("./methods/delete-request.js");
let movies = require("./data/movies.json")

const PORT = process.env.PORT || 5001; // this is like ternary ope, but we just use OR
// PORT is wheere the server will listen

const server = http.createServer((req, res) => {
  // creating a server
  req.movies = movies; // req is to get
  switch (req.method) { 
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;

      default:
        res.statusCode = 404; // res is to give
        res.setHeader("Content-type", "application/json");
        res.write(
            JSON.stringify({title: "Not found", message: "Route not found"})
        );
        res.end()
  }



//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json"); // header type, like content-type or auth
//   res.write(JSON.stringify({ message: "Hello" })); // what you want to print
//   res.end();
}); // server will run

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
}); // .listen will start the RUN OF SERVER
