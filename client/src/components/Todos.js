import React from 'react';

const Todos = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <div>{todo.name}</div>
      ))}
    </div>
  );
};

export default Todos;
