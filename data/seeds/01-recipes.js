exports.seed = function(knex) {
	return knex('recipes')
		.truncate()
		.then(function() {
			return knex('recipes').insert([
				{
					user_id: 1,
					title: 'crazy cake',
					category: 'cake',
					source: 'grandma',
				},
				{
					user_id: 1,
					title: 'brunch of the gods',
					category: 'brunch',
					source: 'grandma',
				},
				{ user_id: 1, title: 'funky space meal', category: 'meal', source: '' },
				{
					user_id: 1,
					title: 'oh so secret recipe',
					category: 'pasta',
					source: '',
				},
			]);
		});
};
