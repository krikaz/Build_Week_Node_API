module.exports = (req, res, next) => {
	if (req.body) {
		next();
	} else {
		res.status(401).send('missing body');
	}
};
