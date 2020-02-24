'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Rate extends Model {}

  Rate.init(
    {
      reviewer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Reviewer is required'
          }
        }
      },
      point: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: {
            args: [0, 100],
            msg: 'Point can only between 0 - 100'
          }
        }
      },
      MovieId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { sequelize }
  )
  Rate.associate = function(models) {
    Rate.belongsTo(models.Movie)
    // associations can be defined here
  }
  return Rate
}
