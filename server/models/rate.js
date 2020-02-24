'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model= sequelize.Sequelize.Model

  class Rate extends Model {}
  Rate.init({
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your reviewer'
        }
      }
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your point'
        },
        min: {
          args: 1,
          msg: "point min 1"
        },
        max: {
          args: 10,
          msg: "point max 10"
        }
      }
    },
    MovieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter movieId'
        },
      }
    }
  }, { sequelize });
  Rate.associate = function(models) {
    // associations can be defined here
  };
  return Rate;
};