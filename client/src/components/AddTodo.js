import React, { Component } from 'react';
import axios from 'axios';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'name',
      due_date: new Date(),
      type: 'type',
      is_finished: false,
      notes: 'notes',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = () => {
    const { name, due_date, type, is_finished, notes } = this.state;
    const todo = {
      name,
      due_date,
      type,
      is_finished,
      notes,
    };

    console.log('todo', todo)

    axios
      .post('http://localhost:5000/api/todos', todo)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const { name, due_date, type, is_finished, notes } = this.state;
    return (
      <div>
        <input
          name="name"
          value={name}
          placeholder="Name of todo"
          onChange={this.handleChange}
        />
        <input
          name="due_date"
          value={due_date}
          placeholder="Name of todo"
          onChange={this.handleChange}
        />
        <input
          name="type"
          value={type}
          placeholder="Name of todo"
          onChange={this.handleChange}
        />
        {/* Replace this with a checkbox */}
        <input
          name="is_finished"
          value={is_finished}
          placeholder="Name of todo"
          onChange={this.handleChange}
        />
        <input
          name="notes"
          value={notes}
          placeholder="Name of todo"
          onChange={this.handleChange}
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

export default AddTodo;
