import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'components/Global/Logo';
import styles from 'components/Nav/index.css';

const HomeNav = () => (
  <nav>
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <h1><Logo /></h1>
      </div>
      <div className={styles.menuContainer}>
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
