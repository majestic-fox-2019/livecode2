var express = require('express')
var router = express.Router()
const Movie = require('../controllers/MovieController')

/* GET users listing. */
router.get('/', Movie.getAll)
router.get('/category', Movie.getByCategory)
router.get('/:id', Movie.getById)
router.put('/:id', Movie.update)

module.exports = router
