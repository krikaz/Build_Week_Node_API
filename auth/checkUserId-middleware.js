module.exports = id => {
	return function(req, res, next) {
    console.log(id);
    console.log(req.decodedToken.subject);
		if (req.decodedToken.subject && req.decodedToken.subject === id) {
			next();
		} else {
			res.status(403).json({ message: 'you cannot check those' });
		}
	};
};
