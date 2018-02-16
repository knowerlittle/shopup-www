import React from 'react';
import PropTypes from 'prop-types';
import SocialLogin from 'react-social-login';
import styles from 'components/SocialButton/index.css';

// const ENTER = 13;

// const checkKeyPressed = e => (e.keyCode ? e.keyCode : e.which);

// const handleKeydown = (e, fn) => {
//   const keyPressed = checkKeyPressed(e);
//   if (keyPressed === ENTER) {
//     console.log('ENTER');
//     fn();
//   }
// };

const Button = ({ triggerLogin, children, ...props }) => (
  <div
    className={styles.signinButton}
    onClick={triggerLogin}
    onKeyDown={() => {}}
    role="presentation"
    {...props}
  >
    {children}
  </div>
);

Button.propTypes = {
  triggerLogin: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default SocialLogin(Button);
