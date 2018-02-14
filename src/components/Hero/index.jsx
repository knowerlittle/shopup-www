import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Hero = () => (
  <div className="hero-container">
    <h1>Home page title</h1>
    <button>
      <NavLink to="/signup" activeClassName="current">
        Get Started
      </NavLink>
    </button>
  </div>
);

export default Hero;
