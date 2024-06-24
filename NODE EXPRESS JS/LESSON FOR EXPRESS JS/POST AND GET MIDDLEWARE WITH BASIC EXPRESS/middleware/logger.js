const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const params = req.params; // get :id or other
    const time = new Date().getFullYear();
    console.log(method, url, params, time);
    // res.send("Next?");
    next()
    //   So next() will say after the logger(middleware) do the next one which is (req,res) => {
    //     res.send("HomePage");
    //   });
    
    //  so if res.send it will send the send which will stop the programm and it wont pass this part (req,res)
  };
  

module.exports = logger