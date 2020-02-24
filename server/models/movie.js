'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize

  class Movie extends Model {}

  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title is empty'
        },
        notNull: {
          args: true,
          msg: 'Title must be filled'
        }
      }
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Year is empty'
        },
        notNull: {
          args: true,
          msg: 'Year must be filled'
        }
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Type is empty'
        },
        notNull: {
          args: true,
          msg: 'Type must be filled'
        }
      }
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Poster is empty'
        },
        notNull: {
          args: true,
          msg: 'Poster must be filled'
        }
      }
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'ImdbID is empty'
        },
        notNull: {
          args: true,
          msg: 'ImdbID must be filled'
        }
      }
    }
  }, {sequelize});
  Movie.associate = function(models) {
    Movie.hasMany(models.Rate)
  };
  return Movie;
};