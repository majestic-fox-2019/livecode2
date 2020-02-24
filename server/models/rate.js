'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Rate extends Model { };
  Rate.init({
    reviewer: {
      type: DataTypes.STRING,
    allowNull: false,
    validate: {
     notEmpty:true, 
    }
  },
    point: {
      type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true, 
      max: 100,
      min: 0,
    }
  },
    MovieId: {
      type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
     notEmpty:true, 
    }
  }}, {sequelize})
  Rate.associate = function(models) {
    // associations can be defined here
    Rate.belongsTo(models.Movie)
  };
  return Rate;
};