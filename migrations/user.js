/** @format */

("use strict");
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("user", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				autoIncrement: true,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING(20),
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING(40),
				unique: true,
			},
			application_reference_no: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			account: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			amount_in_words: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			amount_in_number: {
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
		return queryInterface.dropTable("user");
	},
};
