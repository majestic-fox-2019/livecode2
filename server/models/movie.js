'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Movie extends Model { }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Missing input for title!'
        },
        notEmpty: {
          args: true,
          msg: 'Missing input for title!'
        }
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Input only number!'
        },
        notNull: {
          args: true,
          msg: 'Missing input for year!'
        },
        notEmpty: {
          args: true,
          msg: 'Missing input for year!'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['series', 'movie']],
          msg: "Input only 'series' or 'movie'!"
        },
        notNull: {
          args: true,
          msg: 'Missing input for type movie!'
        },
        notEmpty: {
          args: true,
          msg: 'Missing input for type movie!'
        }
      }
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          args: true,
          msg: 'Please input a valid poster link!'
        },
        notNull: {
          args: true,
          msg: 'Missing input for poster movie!'
        },
        notEmpty: {
          args: true,
          msg: 'Missing input for poster movie!'
        }
      }
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Missing input for imdbID!'
        },
        notEmpty: {
          args: true,
          msg: 'Missing input for imdbID!'
        }
      }
    }
  }, { sequelize })

  Movie.associate = function (models) {
    // associations can be defined here
    Movie.hasMany(models.Rate)
  };
  return Movie;
};