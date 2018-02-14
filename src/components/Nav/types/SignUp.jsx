import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Global/Logo';

const SignUpNav = () => (
  <nav>
    <div className="wrapper">
      <div className="logo-container">
        <h1><Logo /></h1>
      </div>
      <div className="menu-container">
        <ul>
          <li>
            Have an account?
          </li>
          <li>
            <NavLink to="/signin" activeClassName="current">
            Sign in
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default SignUpNav;
