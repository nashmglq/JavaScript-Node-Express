// const crypto = require("crypto");
const requestBodyparser = require("../util/body-parser.js");
const writeToFile = require("../util/write-to-file.js")

module.exports = async (req, res) => {
  // use this for our export on the script.js
  if (req.url.startsWith("/api/movies/")) {
    //use reduce to get the total id number
    let maxId = req.movies.reduce((max, movie) => {
      // max(accumulator) job is to find the highest
      // so it is like the max (the one who will find the highest) will know that we are finding the id by the element(the one we are tlaking about)
      //So max is the one finding the highest, while the element is the next one and the hodler of the prev one
      //okay i get it now, max will check if the next value is greater than max, if it is the maxId will now get the element(next value id) else just remain to max
      return movie.id > max ? movie.id : max;
    }, 0);

    try {
      // gets the data of the fucntion from the body-parser.js
      let body = await requestBodyparser(req);
      console.log(maxId);

      console.log("Request Body: ", body); // req.body is a keyword
      body.id = maxId + 1; // if the return is 10, that is the body new id
      req.movies.push(body);
      writeToFile(req.movies) // so it will also add in the file
      res.writeHead(201, { "Content-type": "application/json" });
      res.end();
    } catch (err) {
      console.log(err);
    }
  }
};
