import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/popin_logo_red.png';

const Logo = () => (
  <div>
    <NavLink to="/" activeClassName="current"><img src={logo} alt="Logo" width="162" /></NavLink>
  </div>
);

export default Logo;
