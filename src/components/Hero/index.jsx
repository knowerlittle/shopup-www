import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'components/Hero/index.css';

const Hero = () => (
  <div>
    <div className={styles.heroContainer}>
      <h1>Home page title</h1>
      <p>
        <button>
          <NavLink to="/signup">
            Get Started
          </NavLink>
        </button>
      </p>
    </div>
    <div className={styles.featureContainer}>
      <h2>Feature Container</h2>
    </div>
  </div>
);

export default Hero;
