import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Global/Logo';
// import '../index.scss';

const HomeNav = () => (
  <nav>
    <div className="wrapper">
      <div className="logo-container">
        <h1><Logo /></h1>
      </div>
      <div className="menu-container">
        <ul>
          <li>
            <NavLink to="/help" activeClassName="current">
             Mission
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" activeClassName="current">
              Sign in
            </NavLink>
          </li>
          <li>
            <button>
              <NavLink to="/signup" activeClassName="current">
               SIGN UP
              </NavLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default HomeNav;
