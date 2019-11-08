import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import axios from 'axios';

const Todos = props => {
  const handleDelete = id => {
    axios
      .delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => props.getTodos())
      .catch(err => console.log(err));
  };
  const data = props.todos;
  const columns = [
    {
      Header: 'Changes',
      accessor: 'id',
      Cell: props => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <span>Edit</span>
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
    },
    {
      Header: 'Notes',
      accessor: 'notes',
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
