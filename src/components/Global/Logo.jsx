import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import red from 'assets/logo/popin_logo_red.png';
import white from 'assets/logo/popin_logo_white.png';
import black from 'assets/logo/popin_logo_black.png';
import styles from 'components/Global/logo.css';


const logos = {
  red,
  white,
  black,
};

const propsShadow = color => (color === 'red'
  ? styles.redShadow
  : styles.blackShadow
);

const Logo = ({
  width,
  logo,
  shadow,
}) => (
  <NavLink to="/" activeClassName="current">
    <img
      className={propsShadow(shadow)}
      src={logos[logo]}
      alt="Logo"
      width={width}
    />
  </NavLink>
);

Logo.propTypes = {
  width: PropTypes.string,
  logo: PropTypes.string,
  shadow: PropTypes.string,
};

Logo.defaultProps = {
  width: '160',
  logo: 'red',
  shadow: 'black',
};

export default Logo;
