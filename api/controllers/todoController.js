const router = require('express').Router();
const service = require('../services/todoService');

/*
    @route  GET todos/
    @desc   Retrieves all of the todos
    @access Public
*/
router.route('/').get((req, res) => {
  return service
    .findAllTodos()
    .then(todos => res.status(200).json(todos))
    .catch(err => res.status(500).json(err));
});

/* 
    @route  POST todos/
    @desc   Create a new todo
    @access Public
*/
router.route('/').post((req, res) => {
  const { todo } = req.body;

  return service
    .saveTodo(todo)
    .then(() => res.status(201))
    .catch(err => res.status(500).json(err));
});

/*
    @route  PUT todos/:id
    @desc   Updates a todo by id
    @access Public
*/
router.route('/:id').put((req, res) => {
  const { todo } = req.body;
  const { id } = req.params;

  return service
    .updateTodo(id, todo)
    .then(() => res.status(204))
    .catch(err => res.status(500).json(err));
});

/*
    @route  DELETE todos/:id
    @desc   Delete a todo by id
    @access Public
*/
router.route('/:id').delete((req, res) => {
  const { id } = req.params;

  return service
    .deleteTodo(id)
    .then(() => res.status(204))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
