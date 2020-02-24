const router = require('express').Router()
const Movie = require('./movie')
const Rating = require('./rating')

router.use('/movies', Movie).use('/rate', Rating)

module.exports = router
