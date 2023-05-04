const express = require("express");
const { formDataUser } = require("../controllers/patient");
const router = express.Router();

router.post("/form", formDataUser);
module.exports = router;