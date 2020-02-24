module.exports = function (err, req, res, next) {
    if(err.statusCode){
        res.status(err.statusCode).json({errors: err, message: err.message});
    }

    res.status(500).json(err);
    console.log(err);

    res.status(500).send('Internal Server Error!')
}