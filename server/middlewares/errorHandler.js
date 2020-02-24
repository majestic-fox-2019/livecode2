"use strict"

function errorHandler(err, req, res, next) {
    if (err.name === "SequelizeValidationError") {
        const temp = []
        err.errors.forEach(el => {
            temp.push(el.message)
        });
        res.status(400).json(temp)
    } else {
        res.status(500).json(err)
    }
}

module.exports = errorHandler