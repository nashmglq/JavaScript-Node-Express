const express = require("express");
const router = express.Router();
const {getContact, postContact, deleteContact, putContact} = require("../controller/contact")

router.get("/", getContact);


router.post("/", postContact);


router.delete("/:id", deleteContact);


router.put("/:id", putContact);


router.get("/:id", getContact);

module.exports = router;