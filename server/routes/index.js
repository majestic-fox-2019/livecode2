const express = require("express");
const router = express.Router();
const Movie = require("./movie");
const Rate = require("./rate");

router.use("/movies", Movie);
router.use("/rate", Rate);

module.exports = router;
