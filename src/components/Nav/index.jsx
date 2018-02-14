import PropTypes from 'prop-types';
import React from 'react';
import Home from './types/Home';
import SignUp from './types/SignUp';
import './index.css';

const Nav = (props) => {
  switch (props.nav) {
    case 'home':
      return <Home />;
    case 'signup':
      return <SignUp />;
    default:
      return <Home />;
  }
};

Nav.propTypes = {
  nav: PropTypes.string.isRequired,
};

export default Nav;
