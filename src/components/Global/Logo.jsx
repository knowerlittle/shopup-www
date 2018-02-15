import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import red from 'assets/logo/popin_logo_red.png';
import white from 'assets/logo/popin_logo_white.png';
import black from 'assets/logo/popin_logo_black.png';
import styles from 'components/Global/index.css';

const logo = {
  red,
  white,
  black,
};

const Logo = props => (
  <div>
    <NavLink to="/" activeClassName="current">
      <div>
        <img
          className={styles.image}
          src={logo[props.logo]}
          alt="Logo"
          width={props.width}
        />
      </div>
    </NavLink>
  </div>
);

Logo.propTypes = {
  width: PropTypes.string,
  logo: PropTypes.string,
};

Logo.defaultProps = {
  width: '140',
  logo: 'red',
};

export default Logo;
