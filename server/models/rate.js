'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize

  class Rate extends Model {}

  Rate.init({
    point: {
      type : DataTypes.NUMBER,
      validate : {
        min: 0,
        max : 100,
        notEmpty : {
          msg : 'Point is required!'
        }
      }
    },
    reviewer: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Reviewer is required!'
        }
      }
    },
    MovieId : {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          msg : 'MovieId is required!'
        }
      }
    }
  }, { sequelize })

  Rate.associate = function(models) {
    Rate.belongsTo(models.Movie)
  };
  return Rate;
};