// const x = "1";
// const y = "2";

// console.clear();
// console.log(x, y);

//%s fromat variable to string
//%d format var to number
//%i format to integer
//%o format to object

// console.log("I am %s and my age is %d", "Nash", 19);
// console.count("I am?");
// console.count("I am?");
// console.count("I am?");
// console.count("ow");
// console.countReset("I am?");
// console.count("I am?");


// const function1 = () => console.trace();
// const function2 = () => function1();

// function2 ()



// const sum = () => console.log(`The sum of 2 and 3 is: ${2+3}`)
// const mult = () => console.log(`The mult of 2 and 3 is: ${2*3}`)

//     const measureTime = () => {
//         console.time("sum()");
//         sum();
//         console.timeEnd("sum()");
//         console.time("mult()");
//         mult();
//         console.timeEnd("mult()");
//     };
//     measureTime()


const progress = require("progress");
const chalked = require("chalk");

const bar = new progress("downloading [:bar] :rate/mbps :precent :etas", {
    total: 20,
})

const timer = setInterval(()=> {
    bar.tick();
    if(bar.complete){
        clearInterval(timer); // stop interval of the given node or const
        console.log(chalked.green("Done"))
    }
},100)

