const { Movie } = require('../models')

class MovieController{

  static getAllData(req,res,next){
    Movie
    .findAll()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static getOneData(req,res,next){
  
    Movie
    .findOne({
      where: {id : req.params.id}
    })
    .then(result=>{
      res.status(200).json(result)
    })
    .catch(err=>{
      next(err)
    })
  }

  static putData(req,res,next){
    let dataMovie = {
      title: req.body.title,
      year: req.body.year,
      type: req.body.type,
      poster: req.body.poster,
      imdbID: req.body.imdbID
    }
    Movie
    .update(dataMovie,{
      where: {id: req.params.id},
      returning: true
    })
    .then(result => {
      console.log(result)
      res.status(200).json(result[1])
    })
    .catch(err => {
      next(err)
    })
  }

  static 
}

module.exports = MovieController