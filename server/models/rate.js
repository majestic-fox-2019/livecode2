'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize

  class Rate extends Model { }
  Rate.init({
    reviewer: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Reviewer is required'
        }
      }
    },
    point: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100
      }
    },
    MovieId: DataTypes.INTEGER
  }, { sequelize });
  Rate.associate = function (models) {
    // associations can be defined here
    Rate.belongsTo(models.Movie)
  };
  return Rate;
};