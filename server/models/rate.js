'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Rate extends Model{}

  Rate.init({
    reviewer: DataTypes.STRING,
    point: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  },{
    sequelize
  })
  
  Rate.associate = function(models) {
  };
  return Rate;
};