module.exports = (req, res) => {
  // we exported this so it would be called to the switch and pass the req and res and pass it to the server .js
  // weird question with a weird answer :but why do we have req, res parameters here? is it so that we can get the things we need and pass it to the server.js swtich?
  // exmaple i says req.movies (get the movies from the server.js) and res.write(somthing) (pass it to the server.js)
  // the asnwer is yes

  let id = req.url.split("/").pop();
  // this would split the url, and pop will get the last after the "/", and the .url came from the http from the server.js

  if (req.url.startsWith("/api/movies")) {
    if (id === "" && !isNaN(id)) {
      // if id is not false (true)
      res.statusCode = 200;
      res.setHeader("Content-type", "application/json"); // we are using json
      res.write(JSON.stringify(req.movies));
      res.end();
    } else {
      // now if we have an id
      let movie = req.movies.find((movie) => movie.id === Number(id));// basically just find the id and the movie will render that, becuase find will pull the whole object
      if(movie){
      res.statusCode=200;
      res.setHeader("Content-type", "application/json");
      res.write(JSON.stringify(movie));
      res.end()
      }else{
        res.statusCode = 404;
        res.write(JSON.stringify({title: "Not foung", message: "Status 404"}));
        res.end()
      }
    }
  } else {
    res.statusCode = 400;
    res.write(JSON.stringify({ title: "No Route Found" })); // you forgot to put JSON.stringfy
    res.end();
  }
};
