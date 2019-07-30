const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	findByUserId,
	edit,
	remove,
};

function find() {
	return db('recipes').select('id', 'username', 'password');
}

function findBy(filter) {
	return db('recipes').where(filter);
}

async function add(recipe) {
	const [id] = await db('recipes').insert(recipe);
	return findById(id);
}

function findById(id) {
	return db('recipes')
		.where({ id })
		.first();
}

function findByUserId(id) {
	return db('recipes').where({ user_id: id });
}

async function edit(id, recipe) {
	await db('recipes')
		.where({ id })
		.update(recipe);
	return await findById(id);
}

async function remove(id) {
	const result = await db('recipes')
		.where({ id })
		.del();
	return result;
}
