import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeNav = () => (
  <nav>
    <div className="wrapper">
      <div className="logo-container">
        <h1>Logo</h1>
      </div>
      <div className="menu-container">
        <ul>
          <li>
            <NavLink to="/help" activeClassName="current">
              Help
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" activeClassName="current">
              Sign in
            </NavLink>
          </li>
          <li>
            <button>
              <NavLink to="/signin" activeClassName="current">
                Get Started
              </NavLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default HomeNav;
