const writeFile = require("../util/writetofile.js");
const bodyParser = require("../util/body-parser.js");

module.exports = async (req, res) => {
  // req is the HTTP req, res is the code respond
  let id = req.url.split("/").pop(); // split into an array and remove all the "/" and pop will get the last index

  if (req.url.startsWith("/api/movies")) {
    if (id !== "" && !isNaN(id)) {
      // id not empty and id is not a string (if isNaN(id) id here is an strng so true, if we add ! it will be false)
      let index = req.movies.findIndex((movie) => movie.id === Number(id));

      if (index !== -1) {
        // found in the index
        let body = await bodyParser(req); // call the promise using asyc so that it wont wait for the other code to execute, pass the req (request) of the http
        // pass the data here from our bodyParser now lets pass it to the req.movies then push to writeFile

        req.movies[index] = { ...req.movies[index], ...body }; // { change this, with this} for the object
        // req.movies[index] means get this index from this file
        // now equal it to this { ...req.movies[index], ...body }
        // spread the object with that index and change it with the body
        writeFile(req.movies);

        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.write(JSON.stringify(body));
        res.end();
      } else {
        res.statusCode = 404;
        res.setHeader("Content-type", "application/json");
        res.write(JSON.stringify("NOT FOUND"));
        res.end();
      }
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-type", "application/json");
    res.write(JSON.stringify("NOT FOUND"));
    res.end();
  }
};
