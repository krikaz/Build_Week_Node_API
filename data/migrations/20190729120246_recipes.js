exports.up = function(knex) {
	return knex.schema
		.createTable('recipes', table => {
			table.increments();
			table
				.integer('user_id')
				.references('id')
				.inTable('users');
			table.string('title', 128).notNullable().unique();
			table.string('category', 128).notNullable();
			table.string('source', 128);
		})
		.createTable('ingredients', table => {
			table.increments();
			table.string('name', 128).notNullable().unique();
		})
		.createTable('quantities', table => {
			table.increments();
			table.float('amount').notNullable().unique();
		})
		.createTable('units', table => {
			table.increments();
			table.string('unit', 128).notNullable().unique();
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists('recipes')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('quantities')
		.dropTableIfExists('units');
};
