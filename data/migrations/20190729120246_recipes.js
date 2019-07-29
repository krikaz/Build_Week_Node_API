exports.up = function(knex) {
	return knex.schema
		.createTable('recipes', table => {
			table.increments();
			table
				.integer('user_id')
				.references('id')
				.inTable('users');
			table.text('title', 128).notNullable();
			table.text('category', 128).notNullable();
			table.text('source', 128);
		})
		.createTable('ingredients', table => {
			table.increments();
			table.text('name', 128).notNullable();
		})
		.createTable('quantities', table => {
			table.increments();
			table.float('amount').notNullable();
		})
		.createTable('units', table => {
			table.increments();
			table.text('unit', 128).notNullable();
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists('recipes')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('quantities')
		.dropTableIfExists('units');
};
