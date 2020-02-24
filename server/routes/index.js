"use strict"

const routes = require('express').Router()
const movieRouter = require('./movie')
const ratingRouter = require('./rating')

routes.use("/movies", movieRouter)
routes.use("/rate", ratingRouter)

module.exports = routes