'use strict'

const { Rate } = require("../models")

class RateController {
    static create (req, res, next){
        console.log("masuk create")
        console.log(req.body)
        const { reviewer, point } = req.body 
        Rate.create({ reviewer, point, MovieId : req.params.id })
        .then( response => {
            res.status(200).json(response)
        })
        .catch(next)
    }
    static delete(req, res, next) {
        Rate.delete({
            where: {
                id: req.params.id
            },
            returning: true,
            plain:true
        })
        .then( response => {
            res.status(200).json({message: "Delete rate success"})
        })
        .catch(next)
    }
}

module.exports = RateController