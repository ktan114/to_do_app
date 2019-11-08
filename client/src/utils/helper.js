const filteredTodos = todos => todos.filter(todo => !todo.is_finished);

const sortTodos = (todos, field) =>
  todos.sort((a, b) => (a[field] < b[field] ? -1 : 1));

module.exports = {
  filteredTodos,
  sortTodos,
};
