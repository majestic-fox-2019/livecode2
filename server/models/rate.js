'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Rate extends Model { }
  Rate.init({
    point: DataTypes.INTEGER,
    reviewer: DataTypes.STRING,
    MovieId: DataTypes.INTEGER
  }, { sequelize })


  // const Rate = sequelize.define('Rate', {
  //   point: DataTypes.INTEGER,
  //   reviewer: DataTypes.STRING
  // }, {});
  Rate.associate = function (models) {
    // associations can be defined here
    Rate.belongsTo(models.Movie)
  };
  return Rate;
};