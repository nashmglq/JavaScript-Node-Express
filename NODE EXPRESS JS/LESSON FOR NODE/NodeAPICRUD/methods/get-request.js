module.exports = (req, res) => {
  // use this because we are exporting this to our server.js
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1); // get the base url using substring and index
  // +1 will add the "/"
  let id = req.url.split("/").pop(); // what will happen is it wil lget the url, .split will remove the /, .pop will get the last value

  // req.url is a keyword to get => (/api/movies/)
  if (req.url.startsWith("/api/movies/")) {
    if (id === " " && isNaN(id)) {
      // if no id, show all movies
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(req.movies));
      res.end();
    } else {
      let movie = req.movies.find((movie) => movie.id == id);
      // find will find the movie.id in the json file.
      // so now it will print the movie with that id
      if (movie) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(movie));
        res.end(); // you need this after any req or res
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
