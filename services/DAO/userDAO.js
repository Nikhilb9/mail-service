/** @format */
const models = require("../../models/index");
const product = require("../../models/product");

class UserDAO {
	async getUserWithId(userId) {
		try {
			const [user, product] = await Promise.all([
				models.user.findOne({
					where: {
						id: userId,
					},
				}),
				models.product.findAll({
					where: { userId: userId },
				}),
			]);

			return { user, product };
		} catch (err) {
			return Promise.reject(err);
		}
	}
}

const userDAO = new UserDAO();

module.exports = userDAO;
