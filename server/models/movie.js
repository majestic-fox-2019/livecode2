'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize

  class Movie extends Model {}

  Movie.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Title is required!'
        }
      }
    },
    year: {
      type : DataTypes.INTEGER,
      validate : {
        isNumeric : {
          msg: 'Year must be a number!'
        }
      }
    },
    type: {
      type : DataTypes.STRING,
      validate : {
        isIn : [['movie','series']]
      }
    },
    poster: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Poster is required!'
        }
      }
    },
    imdbID : DataTypes.STRING
  }, { sequelize })

  Movie.associate = function(models) {
    Movie.hasMany(models.Rate)
  };
  return Movie;
};