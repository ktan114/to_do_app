import React, { PureComponent } from 'react';
import axios from 'axios';

import Header from './Header';
import ChangeView from './components/ChangeView';
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
    this.setState(() => ({ todos: todos.data }));
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
        <ChangeView
          onClick={this.onClick}
          sort={this.sort}
          getTodos={this.getTodos}
        />
        <AddTodo getTodos={this.getTodos} />
        <Todos todos={todos} />
      </div>
    );
  }
}
