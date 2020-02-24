'use strict'

const express = require("express")
const route = express.Router()
const MovieController = require("../controllers/movie")

route.get('/', MovieController.readAll)
route.get('/:id', MovieController.readOne)
route.put('/:id', MovieController.update)

module.exports = route


