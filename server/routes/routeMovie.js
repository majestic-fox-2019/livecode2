const routes = require("express").Router()
const controlMovie = require("../controllers/controlMovie")

routes.get("/", controlMovie.getAllMovies)
routes.get("/:id", controlMovie.getById)
routes.put("/:id", controlMovie.updateMovie)

module.exports = routes