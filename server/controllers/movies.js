const { Movie, Rate } = require('../models/index')
const  { Op } = require('sequelize').Sequelize

class MovieController {
  static showMovies(req, res, next){
    const title = req.query.title || ''

    Movie
      .findAll({
        include : Rate,
        where : {
          title : {
            [Op.like] : `%${title}%`
          }
        }
      })
      .then(response => {
        if(response.length > 0){
          res.status(200).json({
            status : 200,
            body : response
          })
        }else{
          res.status(200).json({
            status : 200,
            body : 'Movie is empty!'
          })
        }
      })
      .catch(next)
  }

  static showMoviesById(req, res, next){
    Movie
      .findOne({
        where : {
          id : req.params.id
        },
        include : Rate
      })
      .then(response => {
        res.status(200).json({
          status: 200,
          body : response
        })
      })
      .catch(next)
  }

  static updateMovie(req, res, next){
    const objValue = {
      title : req.body.title,
      year: req.body.year,
      type: req.body.type,
      poster : req.body.poster,
      imdbID : req.body.imdbID
    }

    Movie
      .update(objValue, {
        where : {
          id : req.params.id
        },
        returning: true
      })
      .then(response => {
        res.status(200).json({
          status: 200,
          body : response[1][0]
        })
      })
      .catch(next)
  }

}

module.exports = MovieController