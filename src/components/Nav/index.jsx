import React from 'react';
import PropTypes from 'prop-types';
import Home from './types/Home';
import SignUp from './types/SignUp';
import './index.css';

const options = {
  home: <Home />,
  signup: <SignUp />,
};

const Nav = props => options[props.nav];

Nav.propTypes = {
  nav: PropTypes.string.isRequired,
};

Nav.defaultProps = {
  nav: 'home',
};

export default Nav;
