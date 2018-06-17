import React from 'react';
import PropTypes from 'prop-types';
import Home from 'components/Nav/types/Home';
import SignUp from 'components/Nav/types/SignUp';
import Profile from 'components/Nav/types/Profile';

export const options = {
  home: <Home />,
  signup: <SignUp />,
  profile: <Profile />,
};

const Nav = ({ nav }) => options[nav];

Nav.propTypes = {
  nav: PropTypes.string.isRequired,
};

Nav.defaultProps = {
  nav: 'home',
};

export default Nav;
