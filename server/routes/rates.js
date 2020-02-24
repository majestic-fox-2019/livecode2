const express = require('express');
const router = express.Router();
const RateController = require('../controllers/rateController');

router.post("/:MovieId", RateController.createRate);
router.delete("/:id", RateController.deleteRate);

module.exports = router;
