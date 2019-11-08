import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import axios from 'axios';

const Todos = props => {
  const data = props.todos;

  const handleEdit = id => {
    const todo = data.filter(todo => todo.id === id);
    axios
      .put(`http://localhost:5000/api/todos/${id}`, todo[0])
      .then(() => props.getTodos())
      .catch(err => console.log(err));
  };
  const handleDelete = id => {
    axios
      .delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => {})
      .catch(err => console.log(err));
  };

  const renderEditable = cellInfo => {
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
  const columns = [
    {
      Header: 'Changes',
      accessor: 'id',
      Cell: props => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button onClick={() => handleEdit(props.value)}>Save</button>
            <button
              onClick={() => handleDelete(props.value)}
              style={{ color: 'red' }}
            >
              Delete
            </button>
          </div>
        );
      },
    },
    {
      Header: 'Name',
      accessor: 'name',
      Cell: renderEditable,
    },
    {
      id: 'due_date',
      Header: 'Due Date',
      accessor: data => (
        <span>{moment(data.due_date).format('MM/DD/YYYY')}</span>
      ),
    },
    {
      Header: 'Type',
      accessor: 'type',
      Cell: renderEditable,
    },
    {
      Header: 'Notes',
      accessor: 'notes',
      Cell: renderEditable,
    },
    {
      id: 'is_finished',
      Header: 'Completed',
      accessor: data => <input type="checkbox" checked={data.is_finished} />,
    },
  ];

  return (
    <div>
      <ReactTable
        data={data}
        resolveData={data => data.map(row => row)}
        columns={columns}
        defaultPageSize={5}
      />
    </div>
  );
};

export default Todos;
