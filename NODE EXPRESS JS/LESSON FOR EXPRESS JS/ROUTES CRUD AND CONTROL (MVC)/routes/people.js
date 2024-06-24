const express = require("express");
const router = express.Router();


const {
  getPeople,
  putPeople,
  deletePeople,
} = require("../controllers/people.js");

router.get("/", getPeople);

router.put("/:id", putPeople);

router.delete("/:id", deletePeople);

module.exports = router;
