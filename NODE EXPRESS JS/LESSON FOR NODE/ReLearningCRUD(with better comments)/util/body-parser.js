module.exports = (req) => { // what is the req for? HTTP (POST, GET, DELETE, UPDATE)
  return new Promise((resolve, reject) => {
    try {
      let body = " ";
      req.on("data", (chunk) => { // what is the data for (i know .on is like an event listner), data is an event name to indicate a new chunk of data has been received
        body += chunk; // chunk represent the data
      });

      req.on("end", () => {  // what is the end for? same with data but this is to let the server know that the received data is complete
        resolve(JSON.parse(body)); // break down into json
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
