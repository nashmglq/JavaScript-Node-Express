const path = require("path");
const Contact = require("../model/contactModel");
const sendMail = require("../config/mail");

const getAbout = (req, res) => {
  res.sendFile(path.join(__dirname, "../html/index.html"));
};

const getEmails = async (req, res) => {
  try {
      const contacts = await Contact.find({}, 'email subject message -_id');

      // Render emails.ejs with contacts data
      res.render('get', { contacts });
  } catch (err) {
      console.error('Error fetching contacts:', err);
      res.status(500).json({ error: 'Failed to fetch contacts' });
  }
}


const getSomething = async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json({ contact });
};

const deleteSomething = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      res.send("none");
    }

    const deleteId = await Contact.findByIdAndDelete(id);
    const contact = await Contact.find();

    res.status(201).json({ contact });
  } catch (err) {
    console.log(err);
  }
};

const getProjects = (req, res) => {
  res.sendFile(path.join(__dirname, "../html/projects.html"));
};

const getContact = (req, res) => {
  res.sendFile(path.join(__dirname, "../html/contact.html"));
};

const postContact = async (req, res) => {
  console.log(req.body);
  const { email, subject, message } = req.body;

  try {
    if (!email || !subject || !message) {
      res.redirect('/contact?success=false');
    }

    const postData = await Contact.create({
      email,
      subject,
      message,
    });

    //on this part the sendEmail will take the parameter and pass it to the function we created

    await sendMail(
      process.env.EMAIL,
      "New Contact",
      `From: ${email}\nSubject: ${subject}\nMessage: ${message}`
    );
    await sendMail(
      email,
      "Your Contact Receipt",
      `Thank you for Contacting, the user will respond as soon as possible!\nSubject: ${subject}\nMessage: ${message}`
    );

    res.redirect('/contact?success=true');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAbout,
  getEmails,
  getProjects,
  getContact,
  postContact,
  getSomething,
  deleteSomething,
};
