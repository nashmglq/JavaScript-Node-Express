const writeFile = require("../util/writetofile.js");

module.exports = (req, res) => {
  let id = req.url.split("/").pop();

  if (req.url.startsWith("/api/movies/")) {
    if (id !== "" && !isNaN(id)) {
      //
      // if id is empty(which is also equivalent to zero) and if not-a-number(hindi number) ex. if isNaN("12") = true, because it is a string now add the ! meaning it will be false
      // if id === "" && isNaN("id") it will take it to the let index or if we use it the new one
      // if not empty and not true that it is a non number go to the index

      let index = req.movies.findIndex((movies) => movies.id === Number(id));

      if (index !== -1) {
        // if index is in the array (becuase if it is not it will return -1)
        req.movies.splice(index, 1); // get the req.movies find the index and then remove it
        //splice (index(get the actual index inside the array or the whole object), 1(removes the first inside that array)) think of it like the math u be doing

        writeFile(req.movies);
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.write(JSON.stringify("Successfully removed"));
        res.end();
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(
          JSON.stringify({ title: "Not found", message: "Route not found" })
        );
        res.end();
      }
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(
      JSON.stringify({ title: "Not found", message: "Route not found" })
    );
    res.end();
  }
};
