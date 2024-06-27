const express = require("express");
const asyncWrapper = require("express-async-handler");

const Contact = require("../models/contactModel");

const getContact = asyncWrapper(async (req, res) => {
  const contact = await Contact.find(); // async/await MONGO(MONGOOSE) RETURN PROMISE
  const { id } = req.params;

  if (!id) {
    // use return on the if statment, because if we dont it wont stop giving that
    return res.status(200).json({ contact });
  }

  const contactId = contact.find((cont) => cont.id === id);
  res.status(200).json({ contactId });
});

const postContact = asyncWrapper(async (req, res) => {
  // use async/await for mongo(MONGO WILL THE ONE TO PUSH AND await will tell async to wait for the push of mongo before moving on)
  console.log(req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const newContact = await Contact.create({
    // create the key of what we want to pass
    name,
    email,
    phone,
  });
  res.status(201).json({ newContact });
});

const deleteContact = asyncWrapper(async (req, res) => {
  // use async/await becuase mongo will be the one to delete, its like await will tell async to wait for the delete of MONGO, so await wont request a new one and wait for the first one
  const { id } = req.params;
  const removeId = await Contact.findByIdAndDelete(id);

  if (removeId === null) {
    res.status(404);
    throw new Error("NOT FOUND");
  }

  res.status(201).json({
    success: "true",
    msg: `Succesfully deleted Name: ${removeId.name}`,
  });
});
const putContact = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  const updatedBody = await Contact.findByIdAndUpdate(id, newData, {
    new: true,
  });
  // (getId we pass, newDate user input, true(show new), fasle(show original but change database))

  if (updatedBody === null) {
    res.status(404);
    throw new Error("ID NOT FOUND");
  }

  res.status(201).json({ updatedBody });
});

module.exports = {
  getContact,
  postContact,
  deleteContact,
  putContact,
};
