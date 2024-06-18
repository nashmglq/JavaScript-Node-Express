// learning paths

const path = require("path");

const filepath =
  "/Users/PC/Desktop/NodeErrorValidaiton/Node and Express notes.txt";

// console.log(path.dirname(filepath)) // where it can be find
// console.log(path.basename(filepath))// name of file
// console.log(path.extname(filepath)) // type

// console.log(__dirname) // dir of the project
// console.log(__filename)// filename with dir of the project

// const sampleFile = "Node and Express notes.txt"
// console.log(path.join(path.dirname(filepath), sampleFile)) // this is how to join to file

const fs = require("fs");
// // Reading a file - Async

// fs.readFile(filepath, "utf-8", (err, data) => {
//   // to convert to string
//   if(err) throw new Error ("Error")
//     console.log(data); //or just add .toString()
// });

// // Reading a file - Sync

// try {
//   const data2 = fs.readFileSync(
//     path.join(__dirname, "Node and Express notes.txt"), "utf-8"
//   );
//   console.log(data2);
// } catch (error) {
//   console.log(error);
// }

// file reading using promise
const fsPromise = require("fs").promises;

// const functionFsPromise = async()=> {
//     try{
//         const data = await fsPromise.readFile(filepath, {encoding: "utf-8"})
//         console.log(data)
//     }catch(err){

//         console.log(error)

//     }
// }

// functionFsPromise(); // call the function

// write a file
const txtFile = path.join(__dirname, "files!","newfile.txt");
//or
// const txtFile = path.join(path.dirname(filepath), "sample.txt")

const content = "DAMN THIS IS TOO MUCH";

// fs.writeFile(txtFile, content ,(err) => {
//   // to convert to string
//   if(err) throw new Error ("Error")
//     console.log("WRITING NOW");
//     fs.readFile(txtFile, "utf-8",(err, data)=>{ // read after write
//         console.log(data)
//     })
// });

// write read without using callback hell

// now we need to asyc and await because we are dealing with promise
// this way the await will know what to say to asyc to get the promsie needed

const writeReadfile = async () => {
  try {
    await fsPromise.writeFile(txtFile, "\n Append this new shit", {
        flag: "a+", 
    }); // add await, what file to write, and what content (already declare above)

    //now if you dont want to use append use the above!

    // await fsPromise.appendFile(txtFile, "\n adding a new line"); // append or add a new line on txt file so append(where, what)
    

    //RENAME?
    await fs.promises.rename(txtFile, path.join(__dirname,"files!","rename.txt")) // rename the txtFile, what to rename? join the __dirname and ur file
    console.log(__dirname)



    const data =  await fsPromise.readFile(txtFile, "utf-8"); // if we remove await here, the asyc will not know if it will send the new promise
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

writeReadfile();
