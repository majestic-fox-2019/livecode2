'use strict';

const rateRouter = require('express').Router();
const RateController = require('../controllers/rate');

rateRouter.post('/:movieId', RateController.create);
rateRouter.delete('/:id', RateController.destroy);

module.exports = rateRouter;
