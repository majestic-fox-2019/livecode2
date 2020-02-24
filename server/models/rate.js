'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Rate extends Model{}

  Rate.init({
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'reviewer cannot be empty'
        },
        notNull: {
          args: true,
          msg: 'Please fill in the reviewer field'
        }
      }
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'point cannot be empty'
        },
        notNull: {
          args: true,
          msg: 'Please fill in the point field'
        },
        max: {
          args: 100,
          msg: 'Point cannot be higher than 100'
        },
        min: {
          args: 0,
          msg: 'Point cannot be lower than 0'
        }
      }
    },
    MovieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'MovieId cannot be empty'
        },
        notNull: {
          args: true,
          msg: 'Please fill in the MovieId field'
        }
      }
    }
  },{
    sequelize
  })
  
  Rate.associate = function(models) {
  };
  return Rate;
};