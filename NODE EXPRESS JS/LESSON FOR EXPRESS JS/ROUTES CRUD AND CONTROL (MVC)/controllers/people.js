const { user } = require("../data.js");

const getPeople = (req, res) => {
  const users = user.map((data) => {
    const { id, name } = data;
    return { id, name };
  });

  res.json(users);
};

const putPeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const findIndex = user.findIndex((user) => user.id === Number(id));

  console.log(findIndex);
  console.log(id);
  console.log(name);

  if (!name) {
    res.json({ success: "false", msg: "Input a name" });
  }

  if (findIndex === -1) {
    // if not found return -1
    res.json({ success: "false", msg: "Input a proper Id" });
  } else {
    user[findIndex] = { ...user[findIndex], name }; // earlier my code is ...name which wont work becuase we only pass one param

    //... = when we have alot of things to chagne
    // if only one just use normal

    res.json({ success: "true", msg: user });
  }
};

const deletePeople = (req, res) => {
  const { id } = req.params;
  const findIndex = user.findIndex((users) => users.id === Number(id));

  console.log(findIndex);
  console.log(id);

  if (findIndex === -1) {
    res.json({ success: "false", msg: "Id not found" });
  } else {
    user.splice(findIndex, 1);

    // splice remove something
    // get the index so [{id : 3, name : qwe}]
    // now the 1 will get the 1 element on the splice which is the one we get and remove it proplery

    res.json({ success: "true", msg: user });
  }
};


module.exports = {
    getPeople,
    putPeople,
    deletePeople
}