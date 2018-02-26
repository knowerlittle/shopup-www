import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import red from 'assets/logo/popin_logo_red.png';
import white from 'assets/logo/popin_logo_white.png';
import black from 'assets/logo/popin_logo_black.png';
import styles from 'components/Global/logo.css';


const logo = {
  red,
  white,
  black,
};

const propsShadow = color => (color === 'red'
  ? styles.redShadow
  : styles.blackShadow
);

const Logo = props => (
  <NavLink to="/" activeClassName="current">
    <img
      className={propsShadow(props.shadow)}
      src={logo[props.logo]}
      alt="Logo"
      width={props.width}
    />
  </NavLink>
);

Logo.propTypes = {
  width: PropTypes.string,
  logo: PropTypes.string,
  shadow: PropTypes.string,
};

Logo.defaultProps = {
  width: '140',
  logo: 'red',
  shadow: 'black',
};

export default Logo;
