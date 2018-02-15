import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'components/Hero/index.css';

const HeroComp = () => (
  <div>
    <section className={styles.heroContainer}>
      <h1>Home page title</h1>
      <p>
        <button>
          <NavLink to="/signup">
            Get Started
          </NavLink>
        </button>
      </p>
    </section>
    <section className={styles.featureContainer}>
      <h2>Feature Container</h2>
    </section>
  </div>
);

export default HeroComp;
