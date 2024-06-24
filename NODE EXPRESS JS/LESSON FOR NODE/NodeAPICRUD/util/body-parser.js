module.exports = (req) => {
  return new Promise((resolve, reject) => {
    try {
        let body = "";
        req.on("data", (chunk) => { // .on is like a evnetlistern when POST, we are going to use this one on our post-request.js
            body += chunk;   // chunk (a parameter(we can change the name)) is the data being sent to our data,
        });
        req.on("end", ()=>{
            resolve(JSON.parse(body))  // end 
        })
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};



// body empty
// req.on data = to append the data to the body
// req.on end = is a siganl to say to the program that the appending of data is complete and good, and the data will be now interpret as a json file

// BETTER AND SHORTER:

// body empty: Starts with an empty string to store incoming data.
// req.on data: Appends incoming data (chunk) to body.
// req.on end: Signals completion of data transmission and parses body as JSON.