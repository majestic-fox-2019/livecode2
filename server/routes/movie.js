// List of available endpoints:

// - `GET /movies`
// - `GET /movies/:id`
// - `PUT /movies/:id`

// - `POST /rate/:movieId`
// - `DELETE /rate/:movieId`

const router = require('express').Router()
const ControllerMovie = require('../controllers/movie')

router.get('/', ControllerMovie.allMovie)
router.get('/:id', ControllerMovie.movieById)
router.put('/:id', ControllerMovie.updateById)




module.exports = router