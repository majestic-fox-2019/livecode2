'use strict'

module.exports= function (err, req, res, next) {
    // console.log(err.name)
    // console.log(err.errors)
    const errors = []
    if(err.name == 'SequelizeValidationError') {
        console.log("masuk error sequelize")
        err.errors.forEach(error => {
            errors.push(error.message)
        })
        res.status(400).json({errors, message: errors.join(', ')})
    } else if(err.status !== null){
        res.status(err.status).json({message: err.message})
    }
}