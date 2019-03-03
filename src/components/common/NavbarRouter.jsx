import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarRouter = () => {
  return (
    <nav className='navbar navbar-router navbar-expand-lg navbar-light bg-light'>
      <ul class='navbar-nav '>
        <li class='nav-item'>
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
        </li>
        <li class='nav-item'>
          <NavLink className='nav-link' to='/counters'>
            Counters
          </NavLink>
        </li>
        <li class='nav-item'>
          <NavLink className='nav-link' to='/movies'>
            Movies
          </NavLink>
        </li>
        <li class='nav-item'>
          <NavLink className='nav-link' to='/customers'>
            Customers
          </NavLink>
        </li>
        <li class='nav-item'>
          <NavLink className='nav-link' to='/rentals'>
            Rentals
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarRouter;
