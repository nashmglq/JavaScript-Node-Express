const mongoose = require("mongoose");

// BASICALLY SCHEMA IS A TOOL TO KNOW WHAT TYPE OF DATA WE ARE PUTTING IN
// kinda like models.py in django
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email"],
    },
    phone: {
      type: String,
      required: [true, "Please add the contact number"],
    },
  },
  {
    timestamps: true, // need to declare, id is autodeclaer
  }
);


module.exports = mongoose.model("Contact", contactSchema) // WE USE Contact to access this parts or to acccess the whole data with the name, email, number and id

// the id is not define but mongo automatically sends one as long as we use contact.find()