'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Rate extends Model {}

  Rate.init({
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Point must be filled"
        },
        notNull: {
          msg: 'Please enter point'
        },
        len: [1, 100]
      }
    },
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Reviewer must be filled"
        },
        notNull: {
          msg: 'Please enter reviewer'
        },
      }
    },
    MovieId: DataTypes.INTEGER
  },
  {
    sequelize
  })
  
  Rate.associate = function(models) {
    Rate.belongsTo(models.Movie)
  };
  return Rate;
};