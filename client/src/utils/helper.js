import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const filteredTodos = todos => todos.filter(todo => !todo.is_finished);

export const handleEdit = (id, todos, getTodos) => {
  const todo = todos.filter(todo => todo.id === id);
  axios
    .put(`http://localhost:5000/api/todos/${id}`, todo[0])
    .then(() => getTodos())
    .catch(err => console.log(err));
};

export const handleDelete = (id, getTodos) => {
  axios
    .delete(`http://localhost:5000/api/todos/${id}`)
    .then(() => getTodos())
    .catch(err => console.log(err));
};

export const renderEditable = (cellInfo, data) => {
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onBlur={e => {
        let index = cellInfo['index'];
        let field = cellInfo['column']['id'];
        let currentValue = e.target.innerHTML;
        data[index][field] = currentValue;
      }}
    >
      {cellInfo.value}
    </div>
  );
};

/*
  Edits for the date and completed status when the 'Save' button 
  is clicked but because date and status is not attached to state, 
  setState can't be called to change the view of the selected date. 
*/
export const editDate = (cellInfo, data) => {
  let selected = new Date(cellInfo['original'].due_date);
  let index = cellInfo['index'];
  let field = cellInfo['column']['id'];
  return (
    <div>
      <DatePicker
        selected={selected}
        onChange={date => {
          selected = date;
          data[index][field] = date;
        }}
      />
    </div>
  );
};
