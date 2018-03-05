import React from 'react';
import Logo from 'components/Global/Logo';
import styles from 'components/Nav/index.css';

const ProfileNav = () => (
  <nav className={styles.nav}>
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.menuContainer}>
        <ul>
          <li className={styles.accountText}>
            Notifications
          </li>
          <li className={styles.accountText}>
           Message
          </li>
          <li>
            Faduma
            Pic
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default ProfileNav;
