import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from 'components/Global/Logo';
import Button from 'components/Global/Button';
import styles from 'components/Nav/index.css';

const HomeNav = () => (
  <nav className={styles.redNav}>
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <Logo logo="white" />
      </div>
      <div className={styles.menuContainer}>
        <ul className={styles.ul}>
          <li>
            <NavLink to="/mission" className={styles.menuLink} activeClassName={styles.currentPage}>
             Mission
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" className={styles.menuLink} activeClassName={styles.currentPage}>
              Sign in
            </NavLink>
          </li>
          <li>
            <Link to="/signup">
              <Button
                color="purple"
                text="SIGN UP"
                height="40"
                width="100"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default HomeNav;
