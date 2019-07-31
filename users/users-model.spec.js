const db = require('../data/dbConfig');
const Users = require('./users-model');

beforeEach(async () => {
	await db('users').truncate();
});

describe('users.insert', () => {
	it('is able to add user to the db!', async () => {
		let users = await Users.find();
		expect(users).toHaveLength(0);

		await Users.insert({ username: 'whiskeyjack', password: 12345 });
		await Users.insert({ username: 'crokus', password: 12345 });
		await Users.insert({ username: 'swedgen', password: 12345 });
		users = await Users.find();
		expect(users).toHaveLength(3);
	});

	it('is able to insert the correct users', async () => {
		let users = await Users.find();
		expect(users).toHaveLength(0);

		await Users.insert({ username: 'whiskeyjack', password: 12345 });
		await Users.insert({ username: 'crokus', password: 12345 });
		await Users.insert({ username: 'swedgen', password: 12345 });
		users = await Users.find();

		expect(users[0].username).toBe('whiskeyjack');
		expect(users[1].username).toBe('crokus');
		expect(users[2].username).toBe('swedgen');
	});

	it('returns the newly inserted user', async () => {
		const newUser = await Users.insert({
			username: 'whiskeyjack',
			password: 12345,
		});
		expect(newUser.username).toBe('whiskeyjack');
	});
});
