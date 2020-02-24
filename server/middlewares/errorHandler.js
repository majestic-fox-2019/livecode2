module.exports = {
    errorHandler(err, req, res, next) {
        let status = null
        let message = null

        if(err.name === 'SequelizeValidationError') {
            status = 400
            arrMessage = []
            for(const key in err.errors) {
                arrMessage.push(err.errors[key].message)
            }
            message = arrMessage
        } else {
            status = err.status || 500
            message = err.message || 'Internal server error'
        }

        res.status(status).json({
            error: message
        })
    }
}