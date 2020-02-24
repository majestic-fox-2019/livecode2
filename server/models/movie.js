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
          msg: 'title cannot be empty'
        },
        notNull: {
          args: true,
          msg: 'Please fill in the title field'
        }
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'year cannot be empty'
        },
        notNull: {
          args: true,
          msg: 'Please fill in the year field'
        }
      }
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'imbdId cannot be empty'
        },
        notNull: {
          args: true,
          msg: 'Please fill in the imbdId field'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'type cannot be empty'
        },
        notNull: {
          args: true,
          msg: 'Please fill in the type field'
        },
        isIn: {
          args: [['movie ', 'series']],
          msg: "Type can only be 'series' or 'movie'"
        }
      }
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'poster cannot be empty'
        },
        notNull: {
          args: true,
          msg: 'Please fill in the poster field'
        }
      }
    }
  },{
    sequelize
  })

  Movie.associate = function(models) {
    Movie.hasMany(models.Rate)
  };
  return Movie;
};