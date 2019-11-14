import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

import {
  handleEdit,
  handleDelete,
  renderEditable,
  editDate,
} from '../utils/helper';

const Todos = props => {
  const data = props.todos;

  const columns = [
    {
      Header: 'Changes',
      accessor: 'id',
      Cell: cellInfo => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button
              onClick={() => {
                handleEdit(cellInfo.value, data, props.getTodos);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                handleDelete(cellInfo.value, props.getTodos);
              }}
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
      Cell: cellInfo => renderEditable(cellInfo, data),
    },
    {
      id: 'due_date',
      Header: 'Due Date',
      accessor: data => (
        <span>{moment(data.due_date).format('MM/DD/YYYY')}</span>
      ),
      Cell: cellInfo => editDate(cellInfo, data),
    },
    {
      Header: 'Type',
      accessor: 'type',
      Cell: cellInfo => renderEditable(cellInfo, data),
    },
    {
      Header: 'Notes',
      accessor: 'notes',
      Cell: cellInfo => renderEditable(cellInfo, data),
    },
    {
      id: 'is_finished',
      Header: 'Completed',
      accessor: data => (
        <input
          type="checkbox"
          checked={data.is_finished}
          onChange={e => {
            data.is_finished = !data.is_finished;
          }}
        />
      ),
    },
  ];

  return (
    <div>
      <ReactTable
        data={data}
        resolveData={data => data.map(row => row)}
        columns={columns}
        defaultPageSize={10}
      />
    </div>
  );
};

export default Todos;
