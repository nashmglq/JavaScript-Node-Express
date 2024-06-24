const writeToFile = require("../util/write-to-file.js");
module.exports = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/").pop();
  const writeToFile = require("../util/write-to-file.js");

  if (req.url.startsWith("/api/movies/")) {
    if (id && !isNaN(id)) {
      let movie = req.movies.find((movie) => movie.id === Number(id));

      if (movie) {
        try {
          const index = req.movies.findIndex(
            (movie) => movie.id === Number(id)
          );

          if (index !== -1) {
            // check if index is a postive value
            // if the id index is not found it will return a negative 1 value

            //ohh so [ {id:10}]
            // it will get the index and delete the position on the 1?

            req.movies.splice(index, 1);
            writeToFile(req.movies);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Movie deleted successfully" }));
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        // the id is not found
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(
          JSON.stringify({ title: "Not found", message: "Route not found" })
        );
        res.end();
      }
    }
  } else {
    res.write(
      JSON.stringify({ title: "Not found", message: "Route not found" })
    );
    res.end();
  }
};
