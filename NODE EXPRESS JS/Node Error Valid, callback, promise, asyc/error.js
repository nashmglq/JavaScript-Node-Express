// const error = new Error("Something went wrong.");

// this one will just change the name of the Error:

// TYPE OF ERRORS YOU CAN DO:

// 1. TRY BLOCK

// try{
//     nothing()  //okay so it will read the try block and pull the nothing() as long as it is declare
//the catch error wont be called because the nothing will provide its own error (if the nnothing fucntion on top)
// }catch(error){
//     console.log("NETWORK PROBLEM")
//     console.log(error)
// }

// 2. Uncaught Exception (we can do this instead of try block)
// nothing()
// process.on("uncaughtException", (error)=>{
//     console.log("ERROR")
//     console.log(error)
//     process.exit(1)
// })
// Why does this work even the placing is not okay? Answer : oh i get it now this one is not the same with the try block as long as there is an error it will cathc it even though it is not inside

//3. Exception with promise

const nothing = () => {
  // const data = fetch("localhost:300/api"); //if we put this before the try block :  it will read the fucntion and the try block wont be read anymore
  console.log("WALA");
  const data = "duck";
  return data;
};

// const promise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve(nothing());
//   } else {
//     reject(nothing());  // data will return, now we have same output the return will be pass to val or error
//   }
// });

// promise.then((val)=>{
//     console.log(val)
// }).catch((error) => {
//     console.log("ERROR")
//     console.log(error)
// })

// 4. Exception with asynch and await

const { CustomError } = require("./customErro");

const walaa = () => {
  const data = fetch("localhost:300/api"); // If we put this before the try block, it will read the function and the try block won't be read anymore
  return data;
};

const somefunc = async () => {
  // Fix syntax error: async function expression
  try {
    await walaa();
  } catch (err) {
    console.log("QWE");
    throw new CustomError(err.message);
  }
};

somefunc();
