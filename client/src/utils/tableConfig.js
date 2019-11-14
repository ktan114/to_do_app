import React from 'react';
import moment from 'moment';

import { handleEdit, handleDelete, renderEditable, editDate } from './helper';

const tableConfig = (data, getTodos) => {
  const columns = [
    {
      Header: 'Changes',
      accessor: 'id',
      Cell: cellInfo => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button
              onClick={() => {
                handleEdit(cellInfo.value, data, getTodos);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                handleDelete(cellInfo.value, getTodos);
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
      style: { whiteSpace: 'unset' },
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
      style: { whiteSpace: 'unset' },
      Cell: cellInfo => renderEditable(cellInfo, data),
    },
    {
      Header: 'Notes',
      accessor: 'notes',
      style: { whiteSpace: 'unset' },
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

  return columns;
};

export default tableConfig;
