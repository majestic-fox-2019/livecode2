const express = require('express')
const router = express.Router()
const movies = require('./movie')
const rates = require('./rate')

router.use('/movies',movies)
router.use('/rates',rates)

module.exports = router