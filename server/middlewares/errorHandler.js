module.exports = (req, res, next) => {
    console.log('masuk di error')
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