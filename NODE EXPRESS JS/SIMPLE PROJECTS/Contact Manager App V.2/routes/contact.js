const express = require("express");
const router = express.Router();
const {
  getContact,
  postContact,
  deleteContact,
  putContact,
} = require("../controller/contact");

router.get("/", getContact);

router.get("/:id", getContact);

router.post("/", postContact);

router.delete("/:id", deleteContact);

router.put("/:id", putContact);

module.exports = router;
