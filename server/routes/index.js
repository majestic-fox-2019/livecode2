const express = require("express");
const router = express.Router();
const movie = require("./movie");
const rate = require("./rate");

router.use("/movies", movie);
router.use("/rate", rate);
module.exports = router;
