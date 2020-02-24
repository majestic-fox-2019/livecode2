'use strict'

const express = require('express') 
const route = express.Router()
const MovieRoute = require("./movie")
// const RateRoute = require("./rate")

route.use('/movies', MovieRoute)
// route.use('/rate', RateRoute)


module.exports = route
