'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Movie extends Model {}
  Movie.init(
    {
      title: DataTypes.STRING,
      year: DataTypes.STRING,
      type: DataTypes.STRING,
      poster: DataTypes.STRING,
      imdbID: DataTypes.STRING
    },
    { sequelize }
  )
  Movie.associate = function(models) {
    Movie.hasMany(models.Rate)
  }
  return Movie
}
