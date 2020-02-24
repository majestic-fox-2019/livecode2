'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Movie extends Model { }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Title is required'
        }
      }
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          msg: 'Year must be number'
        },
        notEmpty: {
          msg: 'Year is required'
        }
      }
    },
    imdbID: DataTypes.STRING,
    type: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Type is required'
        }
      }
    },
    poster: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Poster is required'
        }
      }
    }
  }, { sequelize });
  Movie.associate = function (models) {
    // associations can be defined here
    Movie.hasMany(models.Rate)
  };
  return Movie;
};