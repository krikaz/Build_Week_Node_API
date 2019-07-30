const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
// const recipesRouter = require('../recipes/recipes-router');
const restricted = require('../auth/restricted-middleware');
const checkRecipe = require('../recipes/checkRecipe-middleware');
const db = require('../data/dbConfig');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
// server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
	res.send("It's working!");
});

async function add(dbName, element) {
	const [id] = await db(dbName).insert(element);
	return findById(dbName, id);
}

function findById(dbName, id) {
	return db(dbName)
		.where({ id })
		.first();
}

server.post('/api/quantities', restricted, checkRecipe, (req, res) => {
	add('quantities', req.body)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => res.status(500).send(err));
});

server.post('/api/units', restricted, checkRecipe, (req, res) => {
	add('units', req.body)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => res.status(500).send(err));
});

server.post('/api/ingredients', restricted, checkRecipe, (req, res) => {
	add('ingredients', req.body)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => res.status(500).send(err));
});

server.post('/api/instructions', restricted, checkRecipe, (req, res) => {
	add('instructions', req.body)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => res.status(500).send(err));
});

module.exports = server;
