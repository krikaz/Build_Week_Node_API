const db = require('../data/dbConfig');
const Recipes = require('./recipes-model');

beforeEach(async () => {
	await db('recipes').truncate();
});

function addRecipe(id, title, cat, src) {
	return Recipes.add({ user_id: id, title: title, category: cat, source: src });
}

function addTestRecipes() {
	addRecipe('1', 'Secret dish', 'dishes', 'source of all good things');
	addRecipe('1', 'Secret dessert', 'dessert', 'source of all good things');
	addRecipe('1', 'Yummy mashed potatoes', 'meal', 'source of all good things');
}

describe('recipes.insert', () => {
	it('adds the new recipe to the db', async () => {
		let recipes = await Recipes.find();
		expect(recipes).toHaveLength(0);

		addTestRecipes();
		recipes = await Recipes.find();
		expect(recipes).toHaveLength(3);
	});

	it('adds the correct recipe', async () => {
		let recipes = await Recipes.find();
		expect(recipes).toHaveLength(0);

		addTestRecipes();
		recipes = await Recipes.find();

		expect(recipes[0].title).toBe('Secret dish');
		expect(recipes[1].title).toBe('Secret dessert');
		expect(recipes[2].title).toBe('Yummy mashed potatoes');
	});

	it('returns the newly inserted recipe', async () => {
		const newRecipe = await addRecipe(
			'1',
			'Secret dish',
			'dishes',
			'source of all good things'
		);
		expect(newRecipe.title).toBe('Secret dish');
	});
});
