import React from 'react';

const ChangeView = props => {
  return (
    <div>
      <button onClick={props.onClick}>Filter Completed Todos</button>
    </div>
  );
};

export default ChangeView;
