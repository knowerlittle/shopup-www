import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'components/Global/Logo';
import LinkButton from 'components/Global/LinkButton';
import styles from 'components/Nav/index.css';

const HomeNav = () => (
  <nav className={styles.nav}>
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <h1><Logo logo="white" /></h1>
      </div>
      <div className={styles.menuContainer}>
        <ul className={styles.ul}>
          <li>
            <NavLink to="/mission" className={styles.menuLink} activeClassName={styles.current}>
             Mission
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" className={styles.menuLink} activeClassName={styles.current}>
              Sign in
            </NavLink>
          </li>
          <li>
            <LinkButton
              color="purple"
              text="SIGN UP"
              link="/signup"
              height="40"
              width="100"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default HomeNav;
