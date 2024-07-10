const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        email: {
            type:String,
            required: [true, "Please Enter Your Email"]
        },
        subject: {
            type:String,
            required: [true, "Please Enter Your Subject"]
        },
        message: {
            type:String,
            required: [true, "Please Enter Your Message"]
        },
    },
    {
        timestamps: true,
    }
)


module.exports = mongoose.model("Contact", contactSchema);