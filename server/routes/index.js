const routes = require("express").Router()
const routeMovie = require("./routeMovie")
const routeRating = require("./routeRating")

routes.use("/movies", routeMovie)
routes.use("/rates", routeRating)
module.exports = routes