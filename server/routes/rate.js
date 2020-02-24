const express = require("express");
const router = express.Router();
const Controller = require("../controllers/rate.js");

router.post("/:id", Controller.create);
router.delete("/:id", Controller.destroy);

module.exports = router;
