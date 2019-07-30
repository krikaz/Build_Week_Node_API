const router = require('express').Router();

const Users = require('./users-model.js');
const Recipes = require('../recipes/recipes-model');
const restricted = require('../auth/restricted-middleware');
const checkRecipe = require('../recipes/checkRecipe-middleware');

router.get('/', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.status(500).send(err));
});

router.get('/recipes', restricted, (req, res) => {
	Recipes.findByUserId(req.decodedToken.subject.toString())
		.then(recipes => {
			res.status(200).json(recipes);
		})
		.catch(err => res.status(500).send(err));
});

router.post('/recipes', restricted, checkRecipe, (req, res) => {
	Recipes.add(req.body)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => res.status(500).send(err));
});

// router.post('/instructions', restricted, checkRecipe, (req, res) => {
// 	add('instructions', req.body)
// 		.then(result => {
// 			res.status(200).json(result);
// 		})
// 		.catch(err => res.status(500).send(err));
// });

module.exports = router;
