const express = require('express');
const router  = express.Router();

const RateController = require('../controllers/RateController');

router.post('/:movieId', RateController.addRateToAMovie);
router.delete('/:movieId', RateController.deleteRateToAMovie);

module.exports = router