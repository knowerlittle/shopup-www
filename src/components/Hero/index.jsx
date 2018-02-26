import React from 'react';
import LinkButton from 'components/Global/LinkButton';
import styles from 'components/Hero/index.css';

const Hero = () => (
  <div>
    <section className={styles.heroContainer}>
      <h1>Home page title</h1>
      <p>
        <LinkButton
          color="purple"
          text="GET STARTED"
          link="/signup"
          height="50"
          width="300"
        />
      </p>
    </section>
    <section className={styles.featureContainer}>
      <h2>Feature Container</h2>
    </section>
  </div>
);

export default Hero;
