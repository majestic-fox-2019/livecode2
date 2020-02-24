'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Movie extends Model {}

  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Title is required'
          }
        }
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: {
            args: 1,
            msg: 'Year min. 1'
          }
        }
      },
      imdbID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'imdbID is required'
          }
        }
      },
      type: {
        type: DataTypes.ENUM,
        values: ['series', 'movie'],
        allowNull: false,
        validate: {
          isIn: {
            args: [['series', 'movie']],
            msg: 'Movie type must be "movie" or "series"'
          },
          notEmpty: {
            msg: 'Type is required'
          }
        }
      },
      poster: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Poster is required'
          }
        }
      }
    },
    { sequelize }
  )
  Movie.associate = function(models) {
    Movie.hasMany(models.Rate)
    // associations can be defined here
  }
  return Movie
}
