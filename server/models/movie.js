'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Movie extends Model {}

  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Title must be filled"
        },
        notNull: {
          msg: 'Please enter title'
        }
      }
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Year must be filled"
        },
        notNull: {
          msg: 'Please enter year'
        }
      }
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "imdbID must be filled"
        },
        notNull: {
          msg: 'Please enter imdbID'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Type muust be filled"
        },
        notNull: {
          msg: 'Please enter type'
        }
      }
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        msg: "Poster must be filled"
      },
      notNull: {
        msg: 'Please enter poster'
      }
    }
  },
  {
    sequelize
  })

  Movie.associate = function(models) {
    Movie.hasMany(models.Rate)
  };
  return Movie;
};