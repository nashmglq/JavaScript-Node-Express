const requestBodyparser = require("../util/body-parser.js");
const writeToFile = require("../util/write-to-file.js");

module.exports = async (req, res) => {
  // use asycn for the requestBodyparser becasue we use a promise method
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/").pop(); // to get the id
  let body = await requestBodyparser(req); // forgot to pass this one the req is the one manageing the chunk

  if (req.url.startsWith("/api/movies/")) {
    if (id && Number(id)) {
      let index = req.movies.findIndex((movies) => movies.id === Number(id)); // also forget to turn this one into a number

      if (index === -1) {
        // if the id index is not found it will return a negative 1 value
        res.statusCode = 404; // not found
        res.setHeader("Content-Type", "application/json");
        res.write(
          JSON.stringify({ title: "Not found", message: "Route not found" })
        );
        res.end();
      } else {
        req.movies[index] = { ...req.movies[index], ...body }; // inside the object becuase the vlaue is an object
        // same object? so it is like saying, get the index and change it as the new body
        writeToFile(req.movies);

        res.writeHead(200, { "Content-Type": "application/json" });
        console.log("SUCCESS");
        res.end(JSON.stringify(req.movies[index]));
      }
    } else {
      console.log("First thing first wribg");
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ title: "Not found", message: "Route not found" })
      );
      res.end();
    }
  }
};
