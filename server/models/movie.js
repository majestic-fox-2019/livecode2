'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Movie extends Model {}
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: "title harus diisi"
        },
        notEmpty: {
          msg: "title harus diisi"
        }
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notNull: {
          msg: "year harus diisi"
        },
        notEmpty: {
          msg: "year harus diisi"
        },
        isNumeric: {
          msg: "year harus number"
        }
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: "type harus diisi"
        },
        notEmpty: {
          msg: "type harus diisi"
        },
        isIn: {
          args: [['series', 'movie']],
          msg: "type harus series atau movie"
        }
      }
    },
    poster: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: "poster harus diisi"
        },
        notEmpty: {
          msg: "poster harus diisi"
        }
      }
    },
    imdbID: DataTypes.STRING
  }, {sequelize});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Rate)
  };
  return Movie
};