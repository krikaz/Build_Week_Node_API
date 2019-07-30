const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
// const recipesRouter = require('../recipes/recipes-router');

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

module.exports = server;
