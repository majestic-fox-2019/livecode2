const express = require('express');
const router  = express.Router();

const MovieController = require('../controllers/MovieController');

router.get('/', MovieController.showMovie);
router.get('/:id', MovieController.showMovieRatesDetail);
router.put('/:id', MovieController.updateMovieDetail);

module.exports = router