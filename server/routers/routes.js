const express = require('express')
const router = express.Router()
const ControllerMovie = require('../controllers/moviecontroller')

router.get('/movies', ControllerMovie.getAllData)

module.exports= router