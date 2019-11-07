import React, { PureComponent } from 'react';
import axios from 'axios';

import Header from './Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
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

  render() {
    const { todos } = this.state;

    return (
      <div>
        <Header />
        <Todos todos={todos} />
        <AddTodo getTodos={this.getTodos}/>
      </div>
    );
  }
}
