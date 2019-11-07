const knex = require('../db/knex');

// Find all todos
const findAllTodos = () => knex('todo').select();

// Create a new todo
const saveTodo = todo => knex('todo').insert(todo);

// Update field(s) in a todo
const updateTodo = (id, todo) =>
  knex('todo')
    .where({ id })
    .update(todo);

// Delete a todo by id
const deleteTodo = id =>
  knex('todo')
    .where({ id })
    .del();

module.exports = {
  findAllTodos,
  saveTodo,
  updateTodo,
  deleteTodo,
};
