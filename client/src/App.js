import React, { PureComponent } from 'react';
import axios from 'axios';

import Header from './Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import { filteredTodos, sortTodos } from './utils/helper';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filtered: false,
      sort: false,
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = async () => {
    const todos = await axios.get('http://localhost:5000/api/todos');
    this.setState(prevState => ({ todos: [prevState, ...todos.data] }));
  };

  onClick = () => {
    this.setState({ filtered: !this.state.filtered });
  };

  sort = field => {
    this.setState({
      sort: !this.state.sort,
      todos: sortTodos(this.state.todos, field),
    });
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
        <button onClick={() => this.sort('due_date')}>Sort By Due Date</button>
        <button onClick={() => this.sort('name')}>Sort By Name</button>
        <button onClick={() => this.sort('type')}>Sort By Type</button>
        <button onClick={this.getTodos}>Original</button>
      </div>
    );
  }
}
