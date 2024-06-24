// This is how we do callback error
// function asncTask (callback){
//     setTimeout(()=>{
//         callback(null, "Data is passed") // first arg is for error, second is the data
//     },0)
// }

// asncTask((err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// Promise again?

// const promise = new Promise((resolve, reject)=> {
//     let user = true
//     if(!user){
//         resolve("THIS IS TRUE")
//     }else{
//         reject("Cap")
//     }
// })

// promise.then((val)=>{
//     console.log(val) // if resolve here
// }).catch((err)=>{
//     console.log(err) // reject will be here
//     console.log("catch?")
// }).finally(()=>{
//     console.log("done") // as long as the code end, it will work
// })

// const name = "fqwe";

// function asncTask() {
//   return Promise.resolve(); // we use return
// }

// asncTask().then(() => console.log(name));

// chaining promise

// const p = Promise.resolve("done");

// p.then((val)=>{
//     console.log(val) // console.log the first parameter pass
//     return "done2"// pass to the next one
// }).then((val)=>{
//     console.log(val)
//     return "done3"
// }).then((val)=>{
//     console.log(val)
//     return "done4"
// }).then((val)=>{
//     console.log(val)
//     return "done5"
// }).then((val)=>{
//     console.log(val) // it wont return the last one, because you didnt console.log it for the next
// }).catch((val)=>{console.log(val)})



const makeApiCall = (time) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve("This is " + time)
        }, time)
    })
};

let multiApiCall = [makeApiCall(1000), makeApiCall(2000),makeApiCall(3000)];

// Promise.all(multiApiCall).then((val) => {
//     console.log(val);
// })

// Promise.race(multiApiCall).then((val) => {
//     console.log(val);
// }) // run the timeout of the first pass

(async function(){
    for (let request of multiApiCall){
        console.log(await request)
    }
}()) // ohh so it is a function, but in a different way to write a new async




// START HERE: user login with promise and asyc await

// const userLogin = () => {
//   let username = window.prompt("Enter username: ");
//   let password = window.prompt("Enter password");
//   // no need to get value, using this it will auto get it without initial value

//   return new Promise((resolve, reject) => {
//     console.log("Checking username and password");
//     setTimeout(() => {
//       if (username === "nash" && password == "nash") {
//         resolve("Nice");
//         return username;
//       } else {
//         reject("Bad");
//       }
//     }, 1000);
//   });
// };

// function returnSomething(auth) {
//   // return the val log here
//   // console.log("Auth success  ", auth) // use this if you do not want to return twice
//   return Promise.resolve(`Go to homepage as: ${auth}`);
// }

// userLogin()
//   .then((val) => {
//     console.log(val);
//     return returnSomething(val);
//   }).then((val)=>{
//     console.log(val) // we return so we need to this again
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function perform() {
//   // call if await is okay
//   try {
//     const response = await userLogin(); //check resposne of funcitonm
//     console.log("user validated");
//     const functionResponse = await returnSomething(response); // call the function as well, will get the resposne from the resposne of userLogin and pass it
//     console.log(functionResponse); // return the resposne of the function}
//   } catch (err) {
//     console.log(err);
//   }
// }

// perform();

// END HERE


