'use strict'
module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define(
    'Rate',
    {
      reviewer: DataTypes.STRING,
      point: DataTypes.INTEGER,
      MovieId: DataTypes.INTEGER
    },
    {}
  )
  Rate.associate = function(models) {
    // associations can be defined here
    Rate.belongsTo(models.Movie)
  }
  return Rate
}
