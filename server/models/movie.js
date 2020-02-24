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
          msg: 'Title Cannot Be Empty'
        },
        notNull: {
          args: true,
          msg: 'Title Cannot Be Null'
        }
      }},
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Year Cannot Be Empty'
        },
        notNull: {
          args: true,
          msg: 'Year Cannot Be Null'
        }
      }
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'imdbID Cannot Be Empty'
        },
        notNull: {
          args: true,
          msg: 'imdbID Cannot Be Null'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Type Cannot Be Empty'
        },
        notNull: {
          args: true,
          msg: 'Type Cannot Be Null'
        }
      }
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Poster Cannot Be Empty'
        },
        notNull: {
          args: true,
          msg: 'Poster Cannot Be Null'
        }
      }
    },
  }, {sequelize});

  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Rating)
  };
  return Movie;
};