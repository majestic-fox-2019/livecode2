'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize
  class Rate extends Model{}

  Rate.init({
    MovieId: DataTypes.INTEGER,
    reviewer:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: ' reviewer cannot be empty'},
        notNull: {msg: 'reviewer cannot be empty'},
      }
    },
    point:{
      type: DataTypes.NUMBER,
      validate: {
        max: {
          args: [100],
          msg: ' maximum 100 !'
        },
        min: {
          args: [1],
          msg: 'minimum 1'
        }
      }
    }
  },{ sequelize })

 
  Rate.associate = function(models) {
    Rate.belongsTo(models.Movie)
    // associations can be defined here
  };
  return Rate;
};