/** @format */

const nodeMailer = require("nodemailer");
const { emailConfig } = require("../config.js");

/**
 * This service create for sending email
 * @param {*} data object { to ,subject, text}
 */
const emailService = async (data) => {
	let mailTransporter = nodeMailer.createTransport({
		service: "gmail",
		auth: { user: emailConfig.email, pass: emailConfig.password },
	});

	try {
		if (!data.to) {
			throw "Please provide recipient email";
		}

		if (!data.subject) {
			throw "Please provide email subject";
		}

		if (!data.value) {
			throw "Please provide email value";
		}

		let mailDetails = {
			from: emailConfig.email,
			to: data.to,
			subject: data.subject,
			html: data.value,
			// text: data.body,
			// html:
			// 	"<b>Hey there! </b><br> This is our first message sent with Nodemailer",
		};

		mailTransporter.sendMail(mailDetails, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Email sent successfully");
			}
		});
	} catch (err) {
		return Promise.reject(err);
	}
};

module.exports = emailService;
