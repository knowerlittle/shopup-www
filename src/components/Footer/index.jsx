import React from 'react';
import Logo from '../Global/Logo';
// import './index.css';

const Footer = () => (
  <nav>
    <div className="wrapper">
      <div className="logo-container">
        <h1><Logo /></h1>
      </div>
      <div className="menu-container">
        <ul>
          <li>PRODUCT</li>
          <li>COMPANY</li>
          <li>INFO</li>
        </ul>
      </div>
    </div>
  </nav>
);


export default Footer;
