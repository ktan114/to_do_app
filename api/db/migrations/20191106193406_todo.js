exports.up = function(knex) {
  return knex.schema.createTable('todo', table => {
    table.increments('id');
    table.string('name');
    table.timestamp('due_date');
    table.boolean('is_finished').defaultTo(false);
    table.string('notes');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('todo');
};
