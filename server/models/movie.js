'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Movie extends Model { }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill title"
        }
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill year"
        }
      }
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill imdbID"
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [["movie", "series"]],
          msg: "please add correct type"
        }
      }
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill poster"
        }
      }
    }
  }, {
    sequelize
  });
  Movie.associate = function (models) {
    // associations can be defined here
    Movie.hasMany(models.Rating)
  };
  return Movie;
};