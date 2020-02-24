'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    point: DataTypes.NUMBER,
    reviewer: DataTypes.STRING
  }, {});
  Rate.associate = function(models) {
    // associations can be defined here
  };
  return Rate;
};