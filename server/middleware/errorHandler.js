"use strict"

module.exports = function (err, req, res, next) {
    console.log(err);
    if (err.name === "SequelizeValidationError") {
        res.status(400).json(err.errors[0].message)
    }
}