// REPL = Read Evaluate Print Loop
// a way to use REPL
const repl = require("repl"); // "repl for the actual repl it is like a command"

const local = repl.start("REPL console started: "); // start to start the node


local.on('exit', ()=> {  // "This is like an evnetListner"
    console.log("Ended"); // console.log before the exit
    process.exit();  // if we exit it will do .exit()
})