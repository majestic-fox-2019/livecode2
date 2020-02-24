module.exports = function (err, req, res, next) {
    if(err.name == 'SequelizeValidationError'){
        let messages = []
        err.errors.forEach(element => {
            messages.push(element.message)
        });
        res.status(400).json({
            message: messages
        })
    } else if(err.name == 'SequelizeDatabaseError'){
        res.status(400).json({
            message: 'Incorrect format'
        })
    } else {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}