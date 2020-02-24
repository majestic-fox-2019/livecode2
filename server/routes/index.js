const router = require('express').Router()
const Movie = require('./movie')
const Rating = require('./rating')

router.use('/movies', Movie)
router.use('/rates', Rating)

module.exports = router
