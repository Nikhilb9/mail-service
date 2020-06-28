/** @format */

"use strict";

module.exports = (sequelize, DataTypes) => {
	const product = sequelize.define(
		"product",
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			productName: {
				type: DataTypes.STRING,
				field: "product_name",
			},
			productPrice: {
				type: DataTypes.INTEGER,
				field: "product_price",
			},
			userId: {
				allowNull: false,
				type: DataTypes.INTEGER,
				field: "user_id",
			},
			productQuantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				field: "product_quantity",
			},
		},
		{
			// disable the modification of table names; By default, sequelize will automatically
			// transform all passed model names (first parameter of define) into plural.
			// if you don't want that, set the following
			freezeTableName: true,
			underscored: true,
			timestamps: true,
		}
	);
	product.associate = function (models) {
		// associations can be defined here
		product.belongsTo(models.user, {
			foreignKey: "userId",
		});
	};
	return product;
};
