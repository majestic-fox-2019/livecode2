"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Movie extends Model {}
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNull: {
            msg: "title cannot be empty"
          },
          isEmpty: {
            msg: "title cannot be empty"
          }
        }
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNull: {
            msg: "title cannot be empty"
          },
          isEmpty: {
            msg: "title cannot be empty"
          }
        }
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNull: {
            msg: "title cannot be empty"
          },
          isEmpty: {
            msg: "title cannot be empty"
          }
        }
      },
      poster: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNull: {
            msg: "poster cannot be empty"
          },
          isEmpty: {
            msg: "poster cannot be empty"
          }
        }
      },
      imdbID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNull: {
            msg: "imdbId cannot be empty"
          },
          isEmpty: {
            msg: "imdbId cannot be empty"
          }
        }
      }
    },
    { sequelize }
  );
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Rate);
  };
  return Movie;
};
