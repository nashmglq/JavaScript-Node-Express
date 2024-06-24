require("dotenv").config(); // import .env to call the .env const

console.log(process.env.NAME);
console.log(process.env.JOB);
console.log(`I am learning ${process.env.COURSE}`);