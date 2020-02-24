module.exports = (err, req, res, next) => {
    if (err.name === 'SequelizeValidationError') {
        let msg = ''
        err.errors.forEach(element => {
            msg += '\n' + element.message
        });
        console.log(msg)
        res.status(400).json({ message: msg })
    }
}