const {Movie} = require('../models')
const createError = require('http-errors')

class Controller {
    static findAll(req, res, next){
        Movie
        .findAll()
        .then(data =>{
            if (data.length > 0) {
                res.status(200).json(data)
            } else {
                throw createError(404, 'Data Not Found')
            }
        })
        .catch(err =>{
            next(err)
        })
    }
    static findOne(req, res, next){
        Movie
        .findOne({
            where:{
                id:req.params.id
            }
        })
        .then(data =>{
            if(data){
                res.status(200).json(data)
            }else{
                throw createError(404, `Data Not found`)
            }
        })
        .catch(err =>{
            next(err)
        })
    }
    static update(req, res, next){
      const { title,
        year,
        imdbID,
        type,
        poster} = req.body
        Movie.findOne({
            where: {
                id: req.params.id
            }
        })
        .then( data =>{
                return Movie.update({
                  title,
                  year,
                  imdbID,
                  type,
                  poster
                    },{
                        where:{
                            id:req.params.id
                        },
                    returning:true
                })
        })
        .then(data =>{
            res.status(200).json(data[1][0])
        })
        .catch(err =>{
            next(err)
        })
    }
}

module.exports = Controller