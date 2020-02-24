const routes = require("express").Router()
const controlRating = require("../controllers/controlRating")

routes.post("/:movieId", controlRating.postRating)
routes.delete("/:id", controlRating.deleteRating)

module.exports = routes