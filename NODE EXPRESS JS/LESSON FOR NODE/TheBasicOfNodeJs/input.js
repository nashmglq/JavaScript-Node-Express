const readLine = require("readline");


const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question(`What is your name?`, (name) => {  // question is a built in within the rl
//     console.log(`Hello ${name}!`)
// })

// or use prompt-sync
const promt = require("prompt-sync")();

const name = promt("What is your name?");
console.log(`Hi ${name}!`);
