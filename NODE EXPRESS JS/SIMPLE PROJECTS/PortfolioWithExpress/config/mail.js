const nodeMailer = require("nodemailer")

const transporter = nodeMailer.createTransport({ // setting of what type of email provider will be used and who's email will be used
    service: "GMAIL",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
})


const sendMail = (to, subject, text) => { // parameters of what it will take when we pass something
    const emailStructure = { // strucuter of the email we are just passing the function 
        from: process.env.EMAIL,
        to,
        subject,
        text
    }

    return transporter.sendMail(emailStructure) // so it basically Email Provider. what to pass. strucutre of the sent email
}  // return the email structure when this function was called

module.exports = sendMail;