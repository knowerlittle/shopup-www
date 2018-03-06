import React from 'react';
import Button from 'components/Global/Button';
import styles from 'components/Hero/index.css';
import { Link } from 'react-router-dom';

const Hero = () => (
  <div>
    <section className={styles.heroContainer}>
      <h1>Home page title</h1>
      <Link to="/signup">
        <Button
          color="purple"
          text="GET STARTED"
          height="50"
          width="300"
        />
      </Link>
    </section>
    <section className={styles.featureContainer}>
      <h2>Feature Container</h2>
    </section>
  </div>
);

export default Hero;
