"use strict"

const router = require('express').Router()
const controllerMovie = require('../controllers/movie')

router.get("/", controllerMovie.findAll)
router.get("/:id", controllerMovie.findOne)
router.put("/:id", controllerMovie.updateMovie)

module.exports = router