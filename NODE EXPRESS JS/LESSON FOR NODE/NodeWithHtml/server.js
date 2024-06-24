const http = require("http"); // built-in
const fs = require("fs"); // to read, add, update, or delete from a file

const PORT = 5000 || 5001;

// const indexHtml = require("./index.html"); CANT DO THIS, it is only for JSON (require json)

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // remember that req.url will get all after the localhost:PORT

    fs.readFile("./index.html", (err, data) => {
      // the first parameter is for error, and the data is for the file that we pass
      if (err) {
        res.writeHead(500, { "content-type": "text/html" });
        res.write('<h1 style ="color:red"> Internal Error <h1>');
        res.end();
      } else if (data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("./about.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/html" });
        res.write('<h1 style = "color:red">Something went wrong </h1>');
        res.end();
      } else if (data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write('<h1 style = "color: red"> PAGE NOT FOUND </h1>');
    res.end();
  }
});

server.listen(PORT, () => {
  // so if the server was access it will do the const server like the console.log
  console.log(PORT);
});
