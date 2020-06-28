/** @format */
require("dotenv").config();
const emailService = require("./services/emailService");
const ejs = require("ejs");
const userDAO = require("./services/DAO/userDAO");

/**
 * Before send email from your gmail account go to this page and enable it https://myaccount.google.com/lesssecureapps
 */

(async function sendEmail() {
	try {
		const id = 1;
		const user = await userDAO.getUserWithId(id);
		if (!user) {
			throw "User doesn't exist";
		}

		const templateData = {
			amountInNumber: user.user.amountInNumber,
			amountInWords: user.user.amountInWords,
			account: user.user.account,
			applicationReferenceNo: user.user.applicationReferenceNo,
			product: user.product,
		};

		/**
		 * Rendering subscription purchase receipt using ejs
		 */
		const renderedData = await ejs.renderFile(
			"./views/emailTemplate.ejs",
			templateData
		);

		const data = {
			to: user.user.email,
			subject: "Test Email",
			value: renderedData,
		};
		await emailService(data);
	} catch (err) {
		console.log(err);
	}
})();
