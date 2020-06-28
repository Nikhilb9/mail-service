/** @format */

module.exports = {
	emailConfig: {
		email: process.env.EMAIL,
		password: process.env.PASSWORD,
	},
	dbConfig: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: "postgres",
		define: {
			freezeTableName: true,
			underscored: true,
			timestamps: true,
		},
		dialectOptions: {
			useUTC: false, // for reading from database
		},
		timezone: "-08:00",
	},
};
