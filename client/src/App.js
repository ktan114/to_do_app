import React, { PureComponent } from 'react';
import axios from 'axios';

import Header from './Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import { filteredTodos } from './utils/helper';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filtered: false,
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios
      .get('http://localhost:5000/api/todos')
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => console.log(err));
  };

  onClick = () => {
    this.setState({ filtered: !this.state.filtered });
  };

  render() {
    let { todos, filtered } = this.state;
    if (filtered) todos = filteredTodos(todos);
    return (
      <div>
        <Header />
        <Todos todos={todos} />
        <AddTodo getTodos={this.getTodos} />
        <button onClick={this.onClick}>Filter Completed Todos</button>
      </div>
    );
  }
}
