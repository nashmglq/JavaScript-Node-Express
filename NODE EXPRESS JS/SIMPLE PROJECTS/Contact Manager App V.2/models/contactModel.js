const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone"],
    },
  },
  {
    timestamp: true,
  }
);


module.exports = mongoose.model("Contact", contactSchema); // (REPRESENT, THE ONE WHO WE REPRESENT)