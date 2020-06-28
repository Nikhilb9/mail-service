/** @format */

"use strict";

module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		"user",
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.INTEGER,
				field: "id",
			},
			userName: {
				type: DataTypes.STRING,
				field: "name",
			},
			email: {
				type: DataTypes.STRING,
				field: "email",
				unique: true,
			},
			applicationReferenceNo: {
				type: DataTypes.INTEGER,
				field: "application_reference_no",
			},
			account: {
				type: DataTypes.INTEGER,
				field: "account",
			},
			amountInWords: {
				type: DataTypes.STRING,
				field: "amount_in_words",
			},
			amountInNumber: {
				type: DataTypes.INTEGER,
				field: "amount_in_number",
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
	user.associate = (models) => {
		// associations can be defined here
		user.hasMany(models.product, {
			foreignKey: "id",
		});
	};
	return user;
};
