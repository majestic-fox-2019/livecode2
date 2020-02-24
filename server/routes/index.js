var express = require('express')
var Movie = require("../controllers/movies")
var router = express.Router()

router.get("/", Movie.getAll);
router.get("/:MovieId", Movie.findOne);
router.put("/:id", Movie.updateOne);
router.post("rate/:MovieId", Movie.createRate);
router.delete(":MovieId", Movie.deleteOne)
module.exports = router