const fs = require("fs"); // file operations like reading, writing, and manipulating files.
const path = require("path");

module.exports = (data) => {
  try {
    fs.writeFileSync(
      path.join(
        __dirname,
        "..",
        "data",
        "movies.json"),
        JSON.stringify(data),
        "utf-8"
      
    );
  } catch (err) { console.log(err)}
};
// use this with post, update, and delete