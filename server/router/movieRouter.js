const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

// >>>>>>>> /movies

router.get('/', movieController.readAll)
router.put('/:id', movieController.updateMovie)
router.get('/:id', movieController.findMovieUpdate)


module.exports = router