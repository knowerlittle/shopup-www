import React from 'react';
import LinkButton from 'components/Global/LinkButton';
import styles from 'components/OnboardUser/index.css';

const Footer = () => (
  <div className={styles.onboardFooter}>
    <h3>Itinerrary builder</h3>
    <p className={styles.footerExplainer}>
      Save, organize, and share all details here
    </p>
    <LinkButton
      color="yellow"
      text="Got it!"
      link="/onboard/brand/2"
      height="50"
      width="200"
    />
  </div>
);

export default Footer;
