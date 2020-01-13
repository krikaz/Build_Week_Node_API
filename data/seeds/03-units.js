exports.seed = function(knex) {
	return knex('units')
		.truncate()
		.then(function() {
			return knex('units').insert([
				{ unit: 'g' },
				{ unit: 'mL' },
				{ unit: 'kg' },
				{ unit: 'L' },
				{ unit: 'unit' },
			]);
		});
};
