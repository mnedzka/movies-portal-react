import React from 'react';
import { Link } from 'react-router-dom';

const NavBarRouter = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <ul class='navbar-nav '>
        <li class='nav-item active'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li class='nav-item'>
          <Link className='nav-link' to='/counters'>
            Counters
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarRouter;
