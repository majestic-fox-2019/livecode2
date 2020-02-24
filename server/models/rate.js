'use strict';

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Rate extends Model { }
  
  Rate.init(
    {
      reviewer: {
        type: DataTypes.STRING
      },
      point: {
        type: DataTypes.INTEGER
      },
      MovieId: {
        type: DataTypes.INTEGER
      }
    },
    { sequelize }
  );

  Rate.associate = function(models) {
    // associations can be defined here
    Rate.belongsTo(models.Movie);
  };

  return Rate;
};