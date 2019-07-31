const db = require('../data/dbConfig');
const Users = require('./users-model');

beforeEach(async () => {
	await db('users').truncate();
});

function addUser(name, pass) {
	return Users.insert({ username: name, password: pass });
}

function addTestUsers () {
  await addUser('whiskeyjack', '12345');
  await addUser('crokus', '12345');
  await addUser('swedgen', '12345');
}

describe('users.insert', () => {
	it('is able to add user to the db!', async () => {
		let users = await Users.find();
		expect(users).toHaveLength(0);

    addTestUsers();
		users = await Users.find();
		expect(users).toHaveLength(3);
	});

	it('is able to insert the correct users', async () => {
		let users = await Users.find();
		expect(users).toHaveLength(0);

    addTestUsers();
		users = await Users.find();

		expect(users[0].username).toBe('whiskeyjack');
		expect(users[1].username).toBe('crokus');
		expect(users[2].username).toBe('swedgen');
	});

	it('returns the newly inserted user', async () => {
		const newUser = await addUser('whiskeyjack', '12345');
		expect(newUser.username).toBe('whiskeyjack');
	});
});
