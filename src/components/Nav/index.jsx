import PropTypes from 'prop-types';
import React from 'react';
import Home from './types/Home';
import './index.css';

const Nav = (props) => {
  switch (props.nav) {
    case 'home':
      return <Home />;
    default:
      return <Home />;
  }
};

Nav.propTypes = {
  nav: PropTypes.string.isRequired,
};

export default Nav;
