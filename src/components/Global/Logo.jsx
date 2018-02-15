import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from 'assets/images/popin_logo_red.png';

const Logo = props => (
  <div>
    <NavLink to="/" activeClassName="current">
      <img src={logo} alt="Logo" width={props.width} />
    </NavLink>
  </div>
);

Logo.propTypes = {
  width: PropTypes.string,
};

Logo.defaultProps = {
  width: '124',
};

export default Logo;
