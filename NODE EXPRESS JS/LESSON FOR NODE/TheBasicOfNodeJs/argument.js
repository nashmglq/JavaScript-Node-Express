// arguments in NODE
// how to run? 
// node filename.js argument.var

// WHAT IS ARGS FOR? to let the user input.


// console.log(process.argv.slice(2,3))
// console.log(process.argv.slice(2)[0]) //slice(2) get the exact index //[0] to get the value without array
// console.log(process.argv)


// process.argv.forEach((val, index) => { // in this the parameter will always work as 1stParamater = value, second = index or num
//     console.log(`${index}: ${val}`)
// })

// INSTALLING MINIMIST SO WE CAN NOW IMPORT IT
// minimist is a package to convert it to an object and access it easily
const minimist = require("minimist");

const argNew = minimist(process.argv.slice(2));
console.log(argNew.name)