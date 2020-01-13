const db = require('../data/dbConfig');
const Recipes = require('./recipes-model');
const Users = require('../users/users-model');

beforeEach(async () => {
	// await db('recipes').truncate();
	await db('users').truncate();
	const users = await Users.find();
	if (users.length !== 0) {
		await Users.add({ username: 'jack', password: '1234' });
	}
});

afterEach(async () => {
	// await db('users').truncate();
	// await db('recipes').truncate();
});

function addRecipe(id, title, cat, src) {
	Recipes.add({ user_id: id, title: title, category: cat, source: src });
}

describe('recipes.insert', () => {
	it('adds the new recipe to the db', async () => {
		let recipes = await Recipes.find();
		// expect(recipes).toHaveLength(0);
		const recipesLength = recipes.length;

		await addRecipe(
			1,
			'Secret dishsssssss',
			'dishes',
			'source of all good things'
		);
		await addRecipe(
			1,
			'Secret dessertssssss',
			'dessert',
			'source of all good things'
		);
		await addRecipe(
			1,
			'Yummy mashed potatoesssssss',
			'meal',
			'source of all good things'
		);
		recipes = await Recipes.find();
		expect(recipes).toHaveLength(recipesLength + 3);
	});

	it('adds the correct recipe', async () => {
		let recipes = await Recipes.find();
		// expect(recipes).toHaveLength(0);
		const recipesLength = recipes.length;

		await addRecipe(1, 'Secret dish', 'dishes', 'source of all good things');
		await addRecipe(
			1,
			'Secret dessert',
			'dessert',
			'source of all good things'
		);
		await addRecipe(
			1,
			'Yummy mashed potatoes',
			'meal',
			'source of all good things'
		);
		recipes = await Recipes.find();

		expect(recipes[recipesLength].title).toBe('Secret dish');
		expect(recipes[recipesLength + 1].title).toBe('Secret dessert');
		expect(recipes[recipesLength + 2].title).toBe('Yummy mashed potatoes');
	});

	it('returns the newly inserted recipe', async () => {
		const newRecipe = await addRecipe(
			1,
			'new recipe so good',
			'dishes',
			'source of all good things'
		);
		expect(newRecipe.title).toBe('new recipe so good');
	});
});
