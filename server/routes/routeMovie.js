const routes = require("express").Router()
const controlMovie = require("../controllers/controlMovie")

routes.get("/", controlMovie.getAllMovies)
routes.get("/:id", controlMovie.getById)
routes.put("/:id", controlMovie.updateMovie)
routes.get("/category/:category", controlMovie.filterCategory)
routes.get("/title/:search", controlMovie.fitlerByTitle)

module.exports = routes