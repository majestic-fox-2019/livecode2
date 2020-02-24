const { Movie } = require("../models")

class MovieController {
    static findAll(req, res, next) {
        console.log("asada")
        Movie.findAll()
            .then(response => {
                res.status(200).json(response)
            })
    }
    static findOne(req, res, net) {
        Movie.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(response => {
                res.status(200).json(response)
            })
    }
    static updateOne(req, res, next) {
        let errorArr = []
        if (req.body.title === "") {
            errorArr.push("title must be filled")
        }
        if (req.body.year === "") {
            errorArr.push("year must be filled")
        }
        if (req.body.type === "") {
            errorArr.push("type must be filled")
        }
        if (req.body.poster === "") {
            errorArr.push("poster must be filled")
        }
        if (errorArr.length >= 1) {
            throw (errorArr)
        }
        Movie.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(response => {
                if (response !== null) {
                    res.status(200).json(response)
                }
            })
            .catch(error => {
                console.log(err)
            })
    }
    static createRate(req, res, next) {
        let errorArr = []
        if (req.body.reviewer === "") {
            errorArr.push("reviewer must be filled")
        }
        if (req.body.poin === "") {
            errorArr.push("poin must be filled")
        }
        if (req.body.poin <= 0 && req.body.poin > 100) {
            errorArr.push("poin must be between 0 and 100")
        }
        if (errorArr.length >= 1) {
            throw (errorArr)
        }
        Movie.create({
            reviewer: req.body.reviewer,
            poin: req.body.point,
            id: req.params.id
        })
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                console.log(error)
            })


    }
    static deleteOne(req, res, next) {
        Movie.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(response => {
                res.status(200).json(response)
            })
    }
}
module.exports = MovieController