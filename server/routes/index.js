const express = require('express')
const index = express.Router()
const errorHandler = require('../middlewares/errorHandler')
const movies = require('./movie')
const rates = require('./rate')

index
    .use('/', movies)
    .use('/', rates)
    .use(errorHandler)

module.exports = index