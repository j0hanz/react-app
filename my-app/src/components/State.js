import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesRight,
  faAnglesLeft,
  faPoo,
  faFaceGrinTongueWink,
} from '@fortawesome/free-solid-svg-icons';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        You have clicked:<hr></hr>
        <FontAwesomeIcon className="mx-3 icon-poo" icon={faPoo} />
        <span className="badge text-bg-warning">{count}</span>
        <FontAwesomeIcon className="mx-3 icon-poo" icon={faPoo} />
      </p>
      <button
        className="btn btn-outline-warning btn-lg my-5"
        onClick={() => setCount(count + 1)}
      >
        <FontAwesomeIcon className="text-white-50" icon={faAnglesRight} />
        <FontAwesomeIcon
          className="icon-hand mx-2 fa-lg"
          icon={faFaceGrinTongueWink}
        />
        <FontAwesomeIcon className="text-white-50" icon={faAnglesLeft} />
      </button>
    </div>
  );
}

export default Counter;
