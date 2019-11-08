import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

  handleDate = date => {
    this.setState({ due_date: date });
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
      this.setState({ name: '', type: '', notes: '', due_date: new Date() });
    }
  };

  render() {
    const { name, due_date, type, notes } = this.state;
    return (
      <div>
        <label>Name</label>
        <input
          name="name"
          value={name}
          placeholder="Name"
          onChange={this.handleChange}
        />
        <label>Type</label>
        <input
          name="type"
          value={type}
          placeholder="Type"
          onChange={this.handleChange}
        />
        <label>Notes</label>
        <input
          name="notes"
          value={notes}
          placeholder="Notes"
          onChange={this.handleChange}
        />
        <label>Due Date</label>
        <DatePicker selected={due_date} onChange={this.handleDate} />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

export default AddTodo;
