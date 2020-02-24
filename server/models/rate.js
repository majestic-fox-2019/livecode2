'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize;
  class Rate extends Model {}
  
  Rate.init({
    point: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Point cannot be empty!'
        },
        isInt: {
          args: true,
          msg: 'Point must be number!'
        },
        betweenCustom(value) {
          if (parseInt(value) < 0 || parseInt(value) > 100) {
            throw new Error('Point must be between 0 and 100');
          }
        }
      }
    },
    reviewer: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Reviewer cannot be empty!'
        }
      }
    }
  }, {
    sequelize
  });

  Rate.associate = function(models) {
    // associations can be defined here
    // Rate.belongsTo(models.Movie);
  };
  return Rate;
};