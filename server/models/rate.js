"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Rate extends Model {}
  Rate.init(
    {
      reviewer: {
        type: DataTypes.STRING
        // allowNull: false,
        // validate: {
        //   isNull: {
        //     args: true,
        //     msg: "reviewer cannot be emtpy"
        //   },
        //   isEmpty: {
        //     args: true,
        //     msg: "reviewer cannot be emtpy"
        //   }
        // }
      },
      point: DataTypes.INTEGER,
      MovieId: DataTypes.INTEGER
    },
    { sequelize }
  );

  Rate.associate = function(models) {
    // associations can be defined here
    Rate.belongsTo(models.Movie);
  };
  return Rate;
};
