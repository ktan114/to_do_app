import React from 'react';

const ChangeView = props => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%'}}>
      <button onClick={props.onClick}>Filter Completed Todos</button>
      <button onClick={() => props.sort('due_date')}>Sort By Due Date</button>
      <button onClick={() => props.sort('name')}>Sort By Name</button>
      <button onClick={() => props.sort('type')}>Sort By Type</button>
      <button onClick={props.getTodos}>Original</button>
    </div>
  );
};

export default ChangeView;
