const express = require('express')
const router = express.Router()

const movieRouter = require('./movie')
const ratingRouter = require('./rating')

router.use('/movies', movieRouter)
router.use('/rates', ratingRouter)

module.exports = router