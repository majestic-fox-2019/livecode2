const {Movie, Rate} = require('../models')

class ComicController {
  static list(req,res,next) {
    Movie.findAll()
      .then(movies=>{
        res.status(200).json(movies)
      })
      .catch(error=>{
        next(error)
      })
  }
  static find(req,res,next) {
    let {id} = req.params
    Movie.findOne({
      where: {
        id,
      },
      include: [Rate]
    })
      .then(movies=>{
        res.status(200).json(movies)
      })
      .catch(error=>{
        next(error)
      })
  }
  static updateMovie(req,res,next) {
    console.log('update')
    let {id} = req.params
    console.log(req.body)
    let obj = {
      title: req.body.title,
      year: Number(req.body.year),
      poster: req.body.poster
    }
    Movie.update(obj,{
      where: {
        id,
      }
    })
      .then(movies=>{
        res.status(200).json(movies)
      })
      .catch(error=>{
        next(error)
      })
  }
  static addRate(req,res,next) {
    console.log(req.body,req.params)
    let obj = {
      reviewer: req.body.reviewer,
      point: Number(req.body.point),
      MovieId: Number(req.params.movieId)
    }
    Rate.create(obj)
      .then(rated=>{
        res.status(201).json(rated)
      })
      .catch(error=>{
        next(error)
      })
  }
  static deleteRate(req,res,next) {
    console.log(req.params)
    Rate.destroy({
      where: {
        id: req.params.movieId
      }
    })
      .then(deleted=>{
        console.log(deleted)
      })
      .catch(error=>{
        next(error)
      })
  }
}

module.exports = ComicController