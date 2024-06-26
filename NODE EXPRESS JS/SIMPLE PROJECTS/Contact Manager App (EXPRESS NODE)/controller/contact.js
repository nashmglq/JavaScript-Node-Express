// LEARNING AND USING MONGODB (MONGODB return a promise so we need to use async and awit)

const asyncHandler = require("express-async-handler"); // if there is error on database this will catch it
const Contact = require("../models/contactModel.js");

// Async/await and express-async-handler collaborate for error handling.
// express-async-handler simplifies error handling in asynchronous Express routes by automatically catching errors,
// while async/await is used to await asynchronous operations within route handlers.

const getContact = asyncHandler(async (req, res) => {
  // we have two urls so you need to use statemnts to get if we have id or not

  const { id } = req.params;
  const contacts = await Contact.find(); // retrieves all contacts stored in DATABASE, we use await because mongo retruns promises

  if (id) {
    const findId = contacts.find((contac) => contac.id === id);

    res.status(200).json(findId);
  } else {
    res.status(200).json(contacts);
  }
});

const postContact = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    // return  res.status(400).json({success: "false", msg: "Please input all the proper data"}); // we need the return because the if will not end
    // but lets use this one

    res.status(400);
    throw new Error("All field are mandatory");
  }
  const contact = await Contact.create({
    // the await Contact.create with differcent fields will create the destructure req.body and push it to the dabatase
    name,
    email,
    phone,
  });

  res.status(201).json({ contact });
});

const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contacts = await Contact.find();

  const deletedContact = await Contact.findByIdAndDelete(id); // this will find the id and splice or delete it on the database

  if (id) {
    if (deletedContact) {
      res.status(202).json({ msg: `Succesfully deleted ${id}` });
    } else if (deletedContact === null) {
      // return null if not found in the database
      res.status(404);
      throw new Error("Id not FOUND");
    }
  } else {
    res.status(500);
    throw new Error("INPUT A VALID ID");
  }
});

const putContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body; // this is the input and pass to the findByIdandUpdate to make it cleaner
  const updatedContact = await Contact.findByIdAndUpdate(id, updateData, {
    // findByIdandUpdate same logic with delete
    new: true,
  }); // get id, updateData (data we input), new (true will change the database and show the new while false will show the old one but change the original in database)

  // no need for contact.create the updateData will serve like it (specifying what fields are existing in the data)

  const contacts = await Contact.find();

  if (id) {
    console.log(id)
    if (updatedContact) {
      console.log(id);
      const findNewUpdate = contacts.find((cont) => cont.id === id);
      res.status(200).json(findNewUpdate);
    }else if(updatedContact === null){
      res.status(404);
      throw new Error("Id not FOUND");
    }
  } else{
    res.status(404);
    throw new Error("Id not FOUND");
  }
});

module.exports = { getContact, postContact, deleteContact, putContact };
