function errorHandler(err, req, res, next) {
    // console.log(err, "<< ini error")
    if (err.code) {
        res.status(err.code).json({ errors: err, message: err.message })
    } else if (err.errors) {
        let errornya = []
        console.log(err.errors)
        res.status(408).json({ errors: err, message: "Ngarang dulu" })
        // res.status(400).json()
    } else {
        res.status(500).json({ errors: err, message: "Internal server error" })
    }

}

module.exports = errorHandler