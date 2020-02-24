'use strict';

const router = require('express').Router();
const movieRouter = require('./movie');
const rateRouter = require('./rate');

router.use('/movies', movieRouter);
router.use('/rates', rateRouter);

module.exports = router;
