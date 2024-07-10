const express = require("express");
const routes = express.Router()
const { getAbout, getProjects, getEmails, getContact, postContact, getSomething, deleteSomething } = require("../controller/contact")

routes.get("/", getAbout)

routes.get("/email", getEmails) // practice

routes.get("/projects", getProjects)

routes.get("/contact", getContact)

routes.get("/api", getSomething)
routes.delete("/api/delete/:id", deleteSomething)



routes.post("/submit", postContact)

module.exports = routes