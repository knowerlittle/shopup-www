import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'components/Global/Logo';
import styles from 'components/Nav/index.css';

const SignUpNav = () => (
  <nav id="nav-signup" className={styles.nav}>
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <Logo shadow="red" />
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
