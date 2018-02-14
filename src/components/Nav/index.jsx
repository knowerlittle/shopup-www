import React from 'react';
import PropTypes from 'prop-types';
import Home from 'components/Nav/types/Home';
import SignUp from 'components/Nav/types/SignUp';

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
