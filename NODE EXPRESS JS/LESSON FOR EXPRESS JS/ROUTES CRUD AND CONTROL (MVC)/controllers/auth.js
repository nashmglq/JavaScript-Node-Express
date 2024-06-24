

const createPeople =  (req, res) => {
    console.log(req.body);
    const { name } = req.body;
  
    if (!name) {
      return res.status(400).json({ success: false, msg: "Please Enter A Name" });
    } else {
      res.json({ success: "true", msg: `${name}` });
    }
  }

module.exports = createPeople