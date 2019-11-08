import React, { Component } from 'react';
import axios from 'axios';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      due_date: new Date(),
      type: '',
      notes: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = async () => {
    const { name, due_date, type, notes } = this.state;
    const todo = {
      name,
      due_date,
      type,
      notes,
    };

    const response = await axios.post('http://localhost:5000/api/todos', todo);
    if (response) {
      this.props.getTodos();
      this.setState({ name: '', type: '', notes: '' });
    }
  };

  render() {
    const { name, due_date, type, notes } = this.state;
    return (
      <div>
        <input
          name="name"
          value={name}
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          name="type"
          value={type}
          placeholder="Type"
          onChange={this.handleChange}
        />
        <input
          name="notes"
          value={notes}
          placeholder="Notes"
          onChange={this.handleChange}
        />
        <input
          name="due_date"
          value={due_date}
          placeholder="Due Date"
          onChange={this.handleChange}
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

export default AddTodo;
