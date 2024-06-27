const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDb = require("./config/dbConnections");
const errorHandler = require("./middleware/errorHandler");
const contact = require("./routes/contact");

//MIDDLEWARE
connectDb();
app.use(express.json()); // receive POST JSON  (TIP IF YOU CANNOT POST JUST PUT IT BEFORE URL because the middleware cannot be use by everyone on the url)

app.use(errorHandler);
app.use("/api/contact/", contact);

app.listen(port, () => {
  console.log(port);
});
