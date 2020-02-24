var express = require('express')
var router = express.Router()
var Movie = require("../controllers/movies")

router.get("/", Movie.findAll);
router.get("/:id", Movie.findOne);
router.put("/:id", Movie.updateOne);
router.post("rate/:MovieId", Movie.createRate);
router.delete(":MovieId", Movie.deleteOne)
module.exports = router