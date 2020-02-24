'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Rating extends Model { }
  Rating.init({
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "please fill name reviewer"
        }
      }
    },
    point: {
      type: DataTypes.INTEGER,
      validate: {
        max: {
          args: 100,
          msg: "point can only between 0 - 100"
        },
        min: {
          args: 0,
          msg: "point can only between 0 - 100"
        }
      }
    },
    MovieId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize
  });
  Rating.associate = function (models) {
    // associations can be defined here
    Rating.belongsTo(models.Movie)
  };
  return Rating;
};