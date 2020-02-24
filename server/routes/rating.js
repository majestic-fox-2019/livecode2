"use strict"

const router = require('express').Router()
const controllerRating = require('../controllers/rating')

router.post("/:movieId", controllerRating.addRate)
router.delete("/:movieId", controllerRating.deleteRate)

module.exports = router