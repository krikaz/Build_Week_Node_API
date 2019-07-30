const router = require('express').Router();

const Users = require('./users-model.js');
const Recipes = require('../recipes/recipes-model');
const restricted = require('../auth/restricted-middleware');
const checkUserId = require('../auth/checkUserId-middleware');

router.get('/', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.status(500).send(err));
});

router.get('/:id/recipes', restricted, checkUserId(2), (req, res) => {
	const { id } = req.params;
	Recipes.findByUserId(id)
		.then(recipes => {
			res.status(200).json(recipes);
		})
		.catch(err => res.status(500).send(err));
});

module.exports = router;
