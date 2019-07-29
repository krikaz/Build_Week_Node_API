exports.seed = function(knex) {
	return knex('ingredients')
		.truncate()
		.then(function() {
			return knex('ingredients').insert([
				{ name: 'chocolate tablet' },
				{ name: 'flour' },
				{ name: 'milk' },
				{ name: 'eggs' },
				{ name: 'yoghurt nature' },
				{ name: 'ham' },
				{ name: 'cheese' },
				{ name: 'mushrooms' },
				{ name: 'sugar' },
				{ name: 'basilic' },
				{ name: 'potatoes' },
				{ name: 'bread' },
				{ name: 'jam' },
			]);
		});
};
