const db = require('../data/dbConfig');
const Users = require('./users-model');

beforeEach(async () => {
	await db('users').truncate();
	// await db('recipes').truncate();
});

// afterEach(async () => {
// 	await db('users').truncate();
// 	await db('recipes').truncate();
// });

function addUser(name, pass) {
	Users.add({ username: name, password: pass });
}

describe('users.insert', () => {
	it('is able to add user to the db!', async () => {
		let users = await Users.find();
		// expect(users).toHaveLength(0);
		const usersLength = users.length;

		await addUser('whiskeyjack', '12345');
		await addUser('crokus', '12345');
		await addUser('swedgen', '12345');

		users = await Users.find();
		expect(users).toHaveLength(usersLength + 3);
	});

	it('is able to insert the correct users', async () => {
		let users = await Users.find();
		// expect(users).toHaveLength(0);
		const usersLength = users.length;

		await addUser('john', '12345');
		await addUser('joe', '12345');
		await addUser('josh', '12345');

		users = await Users.find();
		expect(users[usersLength].username).toBe('john');
		expect(users[usersLength + 1].username).toBe('joe');
		expect(users[usersLength + 2].username).toBe('josh');
	});

	it('returns the newly inserted user', async () => {
		const newUser = await addUser('rake', '12345');
		expect(newUser.username).toBe('rake');
	});
});
