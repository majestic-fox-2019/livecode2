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
          msg: "Please input title"
        },
        notEmpty: {
          msg: "Please input title"
        }
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input title"
        },
        notEmpty: {
          msg: "Please input title"
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input title"
        },
        notEmpty: {
          msg: "Please input title"
        },
        isIn: {
          args: [['series', 'movie']],
          msg: "Type either movie or series"
        },
      }
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input title"
        },
        notEmpty: {
          msg: "Please input title"
        },
      }
    },
    imdbID: DataTypes.STRING,
  }, { sequelize })

  Movie.associate = function (models) {
    // associations can be defined here
    Movie.hasMany(models.Rate)
  };
  return Movie;
};