'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    point: DataTypes.INTEGER,
    reviewer: DataTypes.STRING,
    MovieId: DataTypes.INTEGER
  }, {});
  Rate.associate = function(models) {
    // associations can be defined here
  };
  return Rate;
};