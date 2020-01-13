exports.seed = function(knex) {
	return knex('quantities')
		.truncate()
		.then(function() {
			return knex('quantities').insert([
				{ amount: 1 },
				{ amount: 5 },
				{ amount: 10 },
				{ amount: 100 },
				{ amount: 250 },
			]);
		});
};
