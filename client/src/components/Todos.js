import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

import tableConfig from '../utils/tableConfig';

const Todos = props => {
  const data = props.todos;

  const columns = tableConfig(data, props.getTodos);

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
