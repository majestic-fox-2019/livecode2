"use strict"

const { Movie } = require("../models")

class MovieController {
    static readAll (req, res, next) {
        Movie.findAll()
        .then( response => {
            res.status(200).json(response)
        })
        .catch(next)
    }

    static readOne (req, res, next){
        Movie.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            if(!response){
                throw {status: 404, message:"movie not found"}
            } else {
                res.status(200).json(response)
            }
        })
        .catch(next)
    }

    static update (req, res, next) {
        const { title, year, type, poster, imdbID } = req.body
        Movie.update({
            title,
            year,
            type,
            poster,
            imdbID 
        }, {
            where: {
                id: req.params.id,
            },
            returning: true,
            plain:true
        })
        .then(response => {
            res.status(200).json(response[1])
        })
        .catch(next)
    }
}

module.exports = MovieController