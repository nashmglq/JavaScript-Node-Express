const auth = (req, res, next) => {
  const { user } = req.query;

  if (user === "adol") {
    req.user = { name: "adol", age: 31 }; //  req.user is like saying get the user an equal it to this
    // it would get the user with the req
    // you cannot pass the req.user here pass it to the app
    next();
  }else{
    res.status(404).send("unatuh")
    next();
  }

};


// so basically this auth will pass anything to the app wether the if or else

module.exports = auth;
