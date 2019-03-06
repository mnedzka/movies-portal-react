import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarRouter = () => {
  return (
    <nav className='navbar navbar-router navbar-expand-lg navbar-light bg-light'>
      <ul className='navbar-nav '>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/counters'>
            Counters
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/movies'>
            Movies
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/customers'>
            Customers
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/rentals'>
            Rentals
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/login'>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarRouter;
