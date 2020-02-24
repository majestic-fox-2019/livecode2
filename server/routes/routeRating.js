const routes = require("express").Router()
const controlRating = require("../controllers/controlRating")

routes.post("/:movieId", controlRating.postRating)

module.exports = routes