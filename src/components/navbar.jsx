import React from 'react';

// Stateless Functional Component
const NavBar = props => {
  return (
    <div className='row'>
      <div className='col-2 d-flex'>
        Counters in use{' '}
        <span className='badge badge-pill badge-secondary align-items-center m-1'>
          {props.totalCounters}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
