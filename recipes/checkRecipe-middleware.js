const Users = require('../users/users-model');

function sendError(message) {
	return res.status(401).send(message);
}

module.exports = (req, res, next) => {
	if (!req.body) {
		sendError('missing body');
	}

	const { user_id, title, category, source } = req.body;
	if (!user_id || !title || !category) {
		sendError('missing attribute');
	}

	if (!Users.findById(user_id)) {
		sendError('this user could not be found');
	}

	if (typeof user_id !== 'number') {
		sendError('user Id is not a number');
	}

	next();
};
