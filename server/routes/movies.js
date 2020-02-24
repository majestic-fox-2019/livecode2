const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movieController');

router.get("/", MovieController.showAll);
router.get("/:id", MovieController.showOne);
router.put("/:id", MovieController.updateOne);

module.exports = router;
