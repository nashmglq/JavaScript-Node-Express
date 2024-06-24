// REPL = Read Evaluate Print Loop
// a way to use REPL
const repl = require("repl"); // "repl for the actual repl it is like a command"

const local = repl.start("REPL console started: "); // start to start the node


local.on('exit', ()=> {  // "This is like an evnetListner"
    console.log("Ended"); // console.log before the exit
    process.exit();  // if we exit it will do .exit()
})

// const car = {
//     brand: "toyota",
//     model: "supra"
// }

// module.exports = car;

// const car1 = {
//     brand: "toyota",
//     model: "supra"
// }

// const car2 = {
//     brand: "Honda",
//     model: "NSX"
// }

// exports.datas = {car1 , car2};

//OR

exports.car1 = {
    brand: "toyota",
    model: "supra"
}

exports.car2 = {
    brand: "Honda",
    model: "NSX"
}

