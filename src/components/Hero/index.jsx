import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'components/Hero/index.css';

const Hero = () => (
  <div className={styles.heroContainer}>
    <h1>Home page title</h1>
    <button>
      <NavLink to="/signup">
        Get Started
      </NavLink>
    </button>
  </div>
);

export default Hero;
