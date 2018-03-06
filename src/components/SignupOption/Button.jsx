import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from 'components/SignupOption/index.css';

const Button = ({ text, link }) => (
  <div className={styles.buttonWrapper}>
    <Link to={link}>
      <div className={styles.rectangle}>
        <p className={styles.text}>{ text }</p>
      </div>
    </Link>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
