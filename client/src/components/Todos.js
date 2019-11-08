import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Todos = props => {
  const data = props.todos;
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Due Date',
      accessor: 'due_date',
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
