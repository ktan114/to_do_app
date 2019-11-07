const filteredTodos = todos => todos.filter(todo => !todo.is_finished);

module.exports = {
    filteredTodos,
}