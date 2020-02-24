'use strict';
module.exports = (sequelize, DataTypes) => {
	const Model = sequelize.Sequelize.Model;
	class Rate extends Model {};
	Rate.init({
		reviewer: {
			type: DataTypes.STRING,
			allowNull: false, 
			validate: {
				notNull: {
					args: true, 
					message: "Please fill `Reviewer`"
				}, 
				notEmpty: {
					args: true, 
					message: "Please fill `Reviewer`"
				}
			}
		}, 
		point: {
			type: DataTypes.INTEGER, 
			allowNull: false, 
			validate: {
				notNull: {
					args: true, 
					message: "Please fill `Point`"
				}, 
				notEmpty: {
					args: true, 
					message: "Please fill `Point`"
				}, 
				minPoint(val) {
					if(val < 0) {
						throw Error("Minimal point is 0");
					}
				}, 
				maxPoint(val) {
					if(val > 100) {
						throw Error("Maximal point is 100");	
					}
				}
			}
		}, 
		MovieId: DataTypes.INTEGER
	}, {sequelize});

 	 Rate.associate = function(models) {
    		Rate.belongsTo(models.Movie);
  	};
  	return Rate;
};
