const fs = require("fs");
const path = require("path");

module.exports = (data) => { // pass in the data
  try {
    fs.writeFileSync( // write the file sync to post, get the path and then write it, strigufy and utf
      path.join(__dirname, "..", "data", "movies.json"),
      JSON.stringify(data),
      "utf-8"
    );
  } catch (err) {
    console.log(err);
  }
};
