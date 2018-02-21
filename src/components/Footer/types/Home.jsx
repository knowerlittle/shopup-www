import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Global/Logo';

const HomeFooter = () => (
  <nav>
    <div className="wrapper">
      <div className="logo-container">
        <h1><Logo /></h1>
      </div> 
    </div>
  </nav>
);

export default HomeFooter;