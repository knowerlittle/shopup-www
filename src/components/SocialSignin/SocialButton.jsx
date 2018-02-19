import React from 'react';
import PropTypes from 'prop-types';
import SocialLogin from 'react-social-login';
import styles from 'components/SocialSignin/index.css';

class Button extends React.PureComponent {
  static propTypes = {
    triggerLogin: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
  };

  render() {
    const { triggerLogin, ...props } = this.props;

    return (
      <div
        className={styles.signinButton}
        onClick={triggerLogin}
        onKeyDown={() => {}}
        {...props}
        role="presentation"
      >
        <p className={styles.buttonText}>{this.props.children}</p>
      </div>
    );
  }
}

export default SocialLogin(Button);
