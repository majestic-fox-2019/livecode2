module.exports = function (err, req, res, next) {
    if(err.statusCode){
        res.status(err.statusCode).json({errors: err, message: err.message});
    }

    if(err.name === "SequelizeValidationError") {
        res.status(400).json({errors: err.errors, message: err.errors[0].message});
    }

    res.status(500).send({errors: err, message: 'Internal Server Error!'})
}