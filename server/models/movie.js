'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model= sequelize.Sequelize.Model

  class Movie extends Model {}
  Movie.init({
    title: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          arg: true,
          msg: "year must be number"
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          arg: [['movie', 'series']],
          msg: "type must be movie/series"
        }
      }
    },
    poster: {
      type: DataTypes.STRING, 
    },
    imdbID: {
      type: DataTypes.STRING
    }
  }, { sequelize });
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};