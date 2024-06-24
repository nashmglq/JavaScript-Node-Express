const express = require("express");
const router = express.Router();
const createPeople = require("../controllers/auth.js")

router.post("/", createPeople);

module.exports = router;
