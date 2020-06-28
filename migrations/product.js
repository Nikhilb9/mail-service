/** @format */

"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("product", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: "user",
					key: "id",
				},
			},
			product_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			product_price: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			product_quantity: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
			},
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("product");
	},
};
