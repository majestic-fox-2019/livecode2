const router = require('express').Router()
const movieRoute = require('./movies')
const rateRoute = require('./rate')

router.use('/movies', movieRoute)

router.use('/rates', rateRoute)

module.exports = router