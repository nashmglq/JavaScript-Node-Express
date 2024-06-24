const writeFile = require("../util/writetofile.js");
const bodyParser = require("../util/body-parser.js");

module.exports = async (req, res) => {
  if (req.url.startsWith("/api/movies")) {
    let maxId = req.movies.reduce((max, element) => {
      return element.id > max ? element.id : max;
    }, 0);

    try {
      let body = await bodyParser(req); // http pass to the parser which will manage it, and parse it

      body.id = maxId + 1;
      req.movies.push(body); // push the data to the array
      writeFile(req.movies); // push it to the dummy data, it is not the body it is the movie with the new POST push (it is the body part change it to req.movies)
      res.writeHead(201, { "Content-type": "application/json" });
      res.write(JSON.stringify(body));
      res.end();
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.write(JSON.stringify({ error: "Internal Server Error" }));
        res.end();
      }
    } else {
      res.statusCode = 400; 
      res.write(JSON.stringify({ error: "Bad request" }));
      res.end();
    }
  };