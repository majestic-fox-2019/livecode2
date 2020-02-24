module.exports = (err, req, res, next) => {
    if (err.name == 'SequelizeDatabaseError') {
        res.status(500).json({
            errors: err.name,
            message: "Internal Server Error"
        })
    } else {
        res
            .status(err.statusCode || 400)
            .json({
                errors: err.name,
                message: err.message.split('\n')
            })
    }
}