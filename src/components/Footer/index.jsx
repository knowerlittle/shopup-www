import React from 'react';
import Logo from 'components/Global/Logo';
import styles from 'components/Footer/index.css';
import facebook from 'assets/icons/facebook.png';
import twitter from 'assets/icons/twitter.png';
import instagram from 'assets/icons/instagram.png';

const Footer = () => (
  <div className={styles.wrapper}>
    <header />
    <article className={styles.main}>

      <div className={styles.footerNav}>
        <p className={styles.titleFont}>PRODUCT</p>
        <ul>
          <li>Popular</li>
          <li>Trending</li>
          <li>Catalog</li>
          <li>Features</li>
        </ul>
      </div>

      <div className={styles.footerNav}>
        <p className={styles.titleFont}>COMPANY</p>
        <ul>
          <li>Popular</li>
          <li>Trending</li>
          <li>Catalog</li>
          <li>Features</li>
        </ul>
      </div>

      <div className={styles.footerNav}>
        <p className={styles.titleFont}>INFO</p>
        <ul>
          <li>Popular</li>
          <li>Trending</li>
          <li>Catalog</li>
          <li>Features</li>
        </ul>
      </div>

    </article>

    <aside className={`${styles.aside} ${styles.aside1}`}>
      <div className={styles.logoWrapper}>
        <Logo width="200" shadow="red" />
      </div>
    </aside>

    <aside className={`${styles.aside} ${styles.aside2}`}>
      <p className={styles.titleFont}>FOLLOW US</p>
      <p>
        <a href="//facebook.com/popin">
          <img className={styles.icon} src={facebook} alt="facebook" width="30" />
        </a>
        <a href="//twitter.com/popin">
          <img className={styles.icon} src={twitter} alt="twitter" width="30" />
        </a>
        <a href="//instagram.com/popin">
          <img className={styles.icon} src={instagram} alt="instagram" width="30" />
        </a>
      </p>
    </aside>

    <footer className={styles.footer}>
      <p>Popin 2018. All rights reserved.</p>
    </footer>
  </div>
);

export default Footer;
