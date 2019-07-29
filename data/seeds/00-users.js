exports.seed = function(knex) {
	return knex('users')
		.truncate()
		.then(function() {
			return knex('users').insert([
				{
					username: 'tester',
					password: '1234',
				},
			]);
		});
};
