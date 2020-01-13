exports.seed = function(knex) {
	return knex('instructions')
		.truncate()
		.then(function() {
			return knex('instructions').insert([
				{ recipe_id: 1, order: 1, quantity_id: 2, unit_id: 2, ingredient_id: 7 },
				{ recipe_id: 1, order: 2, quantity_id: 5, unit_id: 1, ingredient_id: 3 },
				{ recipe_id: 1, order: 3, quantity_id: 3, unit_id: 5, ingredient_id: 8 },
				{ recipe_id: 2, order: 1, quantity_id: 5, unit_id: 4, ingredient_id: 10 },
				{ recipe_id: 2, order: 2, quantity_id: 4, unit_id: 3, ingredient_id: 6 },
				{ recipe_id: 2, order: 3, quantity_id: 1, unit_id: 2, ingredient_id: 7 },
				{ recipe_id: 2, order: 4, quantity_id: 2, unit_id: 3, ingredient_id: 5 },
				{ recipe_id: 3, order: 1, quantity_id: 4, unit_id: 5, ingredient_id: 13 },
				{ recipe_id: 3, order: 2, quantity_id: 5, unit_id: 1, ingredient_id: 4 },
        { recipe_id: 3, order: 3, quantity_id: 2, unit_id: 2, ingredient_id: 2 },
        { recipe_id: 4, order: 1, quantity_id: 1, unit_id: 5, ingredient_id: 11 },
				{ recipe_id: 4, order: 2, quantity_id: 3, unit_id: 3, ingredient_id: 9 },
				{ recipe_id: 4, order: 3, quantity_id: 4, unit_id: 2, ingredient_id: 6 },
			]);
		});
};
