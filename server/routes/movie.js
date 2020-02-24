const express = require("express");
const router = express.Router();
const movieController = require("../controller/movieController");

router.get("/", movieController.getMovies);
router.get("/:id", movieController.findOne);
router.put("/:id", movieController.updateMovie);
module.exports = router;
