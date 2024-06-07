import React from 'react';

function Greeting(props) {
  return (
    <h1 className="display-1 mb-5">
      Hello,{' '}
      <span className="badge rounded-pill text-bg-secondary p-3">
        {props.name}
      </span>
    </h1>
  );
}

export default Greeting;
