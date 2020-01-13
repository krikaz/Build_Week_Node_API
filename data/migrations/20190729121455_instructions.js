exports.up = function(knex) {
	return knex.schema.createTable('instructions', table => {
		table.increments();
		table
			.integer('recipe_id')
			.references('id')
			.inTable('recipes');
		table.integer('order').notNullable();
		table
			.integer('quantity_id')
			.references('id')
			.inTable('quantities');
		table
			.integer('unit_id')
			.references('id')
			.inTable('units');
		table
			.integer('ingredient_id')
			.references('id')
			.inTable('ingredients');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('steps');
};
