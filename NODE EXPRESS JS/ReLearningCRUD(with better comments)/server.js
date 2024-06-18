const http = require("http");
const getReq = require("./request/get-req.js");
const postReq = require("./request/post-req.js");
const deleteReq = require("./request/delete-req.js");
const putReq = require("./request/put-req.js");
const movies = require("./data/movies.json");
const PORT = process.env.PORT || 5001; // if it failed for the PORT env it will get the 5001

// createServer is a keyword
const server = http.createServer((req, res) => {
  req.movies = movies; // so we do not need to import it to each request files
  // it is like find tthe mehtod from switch and pass the req.movies
  // switch (req.mehtod) the parameter here is what we compare
  // req.method here is the PUT DELETE POST GET
  switch (req.method) {
    case "GET":
      getReq(req, res); // if get we will call the function get
      break;
    case "POST":
      postReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;

    default:
      res.statusCode = 404;
      res.setHeader("Content-type", "application/json");
      res.write(JSON.stringify({ message: "Not found" }));
      res.end();
  }

  //   res.statusCode = 200; just to test
  //   res.setHeader = ("Content-type", "application/json"); // saying the type ex. type: json
  //   res.write(JSON.stringify({ title: "Hello", message: "HELLO PO!" }));
  //   res.end();
});

// start the server
server.listen(PORT, () => {
  console.log(PORT);
});
