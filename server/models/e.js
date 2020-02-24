'use strict';
module.exports = (sequelize, DataTypes) => {
  const e = sequelize.define('e', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    imdbID: DataTypes.STRING,
    type: DataTypes.STRING,
    poster: DataTypes.STRING
  }, {});
  e.associate = function(models) {
    // associations can be defined here
  };
  return e;
};