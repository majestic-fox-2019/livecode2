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
    poster: DataTypes.STRING,
    imdbID: DataTypes.STRING
  }, { sequelize })

  Movie.associate = function (models) {
    // associations can be defined here
  };
  return Movie;
};