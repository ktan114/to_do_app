import React from 'react';

const ChangeView = props => {
  return (
    <div>
      <button className="Button" onClick={props.onClick}>
        Filter Completed Todos
      </button>
    </div>
  );
};

export default ChangeView;
