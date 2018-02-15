import React from 'react';
import Logo from 'components/Global/Logo';
import styles from 'components/Footer/index.css';
import facebook from 'assets/icons/facebook.png';
import twitter from 'assets/icons/twitter.png';
import instagram from 'assets/icons/instagram.png';

const Footer = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>Header</header>
    <article className={styles.main}>
      <div className={styles.footerNav}>
        <h3>PRODUCT</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>Popular</li>
          <li className={styles.li}>Trending</li>
          <li className={styles.li}>Catalog</li>
          <li className={styles.li}>Features</li>
        </ul>
      </div>
      <div className={styles.footerNav}>
        <h3>COMPANY</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>Popular</li>
          <li className={styles.li}>Trending</li>
          <li className={styles.li}>Catalog</li>
          <li className={styles.li}>Features</li>
        </ul>
      </div>
      <div className={styles.footerNav}>
        <h3>INFO</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>Popular</li>
          <li className={styles.li}>Trending</li>
          <li className={styles.li}>Catalog</li>
          <li className={styles.li}>Features</li>
        </ul>
      </div>
    </article>

    <aside className={`${styles.aside} ${styles.aside1}`}>
      <div className={styles.logoWrapper}>
        <Logo width="200" />
      </div>
    </aside>

    <aside className={`${styles.aside} ${styles.aside2}`}>
      <p>Follow Us</p>
      <p>
        <img className={styles.icon} src={facebook} alt="facebook" width="30" />
        <img className={styles.icon} src={twitter} alt="twitter" width="30" />
        <img className={styles.icon} src={instagram} alt="instagram" width="30" />
      </p>
    </aside>

    <footer className={styles.footer}>
      <p>Popin 2018. All rights reserved.</p>
    </footer>
  </div>
);

export default Footer;
