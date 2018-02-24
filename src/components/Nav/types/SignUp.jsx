import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'components/Global/Logo';
import styles from 'components/Nav/index.css';

const SignUpNav = () => (
  <nav>
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <h1><Logo /></h1>
      </div>
      <div className={styles.menuContainer}>
        <ul>
          <li className={styles.accountText}>
            Have an account?
          </li>
          <li>
            <NavLink to="/signin" className={styles.signinText} activeClassName={styles.current}>
            Sign in
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default SignUpNav;
