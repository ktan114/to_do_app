import React, { PureComponent } from 'react';
import axios from 'axios';

import './App.css';
import Header from './Header';
import ChangeView from './components/ChangeView';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { filteredTodos } from './utils/helper';

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

  render() {
    let { todos, filtered } = this.state;
    if (filtered) todos = filteredTodos(todos);
    return (
      <div>
        <Header />
        <div className="App__Section">
          <AddTodo getTodos={this.getTodos} />
          <ChangeView onClick={this.onClick} />
        </div>
        <Todos todos={todos} getTodos={this.getTodos} />
      </div>
    );
  }
}
