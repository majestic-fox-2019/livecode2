'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Movie extends Model {}

  Movie.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Title is required'
        }
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Year is required'
        }
      }
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ImdbID is required'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['movie', 'series']],
          msg: "Type must be Movie or Series"
        }
      }
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Poster is required'
        }
      }
    }
  }, {
    sequelize
  });
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Rate, { foreignKey: 'MovieId'})
  };
  return Movie;
};