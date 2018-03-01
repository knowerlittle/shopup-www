import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Global/Button';
import styles from 'components/OnboardUser/index.css';

const IntroFooter = () => (
  <div className={styles.onboardFooter}>
    <h3>Itinerary builder</h3>
    <p className={styles.footerExplainer}>
      Save, organize, and share all details here
    </p>
    <Link to="/onboard/brand/2">
      <Button
        color="yellow"
        text="Got it!"
        height="50"
        width="200"
      />
    </Link>
  </div>
);

export default IntroFooter;
