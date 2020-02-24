const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

// >>>>>>>> /movies

router.get('/', movieController.readAll)
router.put('/:id', movieController.updateMovie)


module.exports = router