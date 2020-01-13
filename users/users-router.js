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

router.put('/recipes/:id', restricted, checkRecipe, (req, res) => {
	Recipes.edit(req.params.id, req.body)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => res.status(500).send(err));
});

router.delete('/recipes/:id', restricted, (req, res) => {
	Recipes.remove(req.params.id)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => res.status(500).send(err));
});

router.post('/recipes/search/:term', restricted, (req, res) => {
	Recipes.search(req.params.term)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => res.status(500).send(err));
});

module.exports = router;
