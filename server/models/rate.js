'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    reviewer: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: "reviewer harus diisi"
        },
        notEmpty: {
          msg: "reviewer harus diisi"
        },
      },
    },
    point: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: "point harus diisi"
        },
        notEmpty: {
          msg: "point harus diisi"
        },
        isNumeric: {
          msg: "point harus number"
        },
        max: {
          args:[100],
          msg: "point harus 0-100"
        },                  // only allow values <= 23
        min: {
          args: [0],
          msg: "point harus 0-100"
        },
      },
    },
    MovieId: DataTypes.INTEGER
  }, {});
  Rate.associate = function(models) {
    // associations can be defined here
  };
  return Rate;
};