exports.seed = function(knex) {
  return knex('todo')
    .del()
    .then(function() {
      return knex('todo').insert([
        {
          name: 'Clean the dishes',
          due_date: new Date(2019, 11, 15, 8, 30),
          type: 'Cleaning',
          is_finished: false,
          notes: 'Apply soap and rinse the dishes',
        },
        {
          name: 'Mow the lawn',
          due_date: new Date(2019, 11, 8, 10, 15),
          type: 'Cleaning',
          is_finished: false,
          notes: 'Rake up all of the leaves and mow the lawn',
        },
        {
          name: 'Grocery shopping',
          due_date: new Date(2019, 11, 12, 8, 12),
          type: 'Chore',
          is_finished: false,
          notes: 'Go to the store and pick up all of your groceries',
        },
      ]);
    });
};
