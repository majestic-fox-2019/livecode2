const express = require('express')
const router = express.Router()
const ControllerMovie = require('../controllers/moviecontroller')

router.get('/movies', ControllerMovie.getAllData)
router.get('/movies/:id',ControllerMovie.getOneData)
router.put('/movies/:id', ControllerMovie.putData)

module.exports= router