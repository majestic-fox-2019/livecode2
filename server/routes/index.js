"use strict"

const routes = require('express').Router()
const movieRouter = require('./movie')

routes.use("/movies", movieRouter)

module.exports = routes