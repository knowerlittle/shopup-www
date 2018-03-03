import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SocialButton from 'components/SocialSignin/SocialButton';
import { withRouter } from 'react-router-dom';
import styles from 'components/SocialSignin/index.css';
import handleSocialLoginFailure from 'components/SocialSignin/handleSocialLoginFailure';
import handleSocialLoginSuccess from 'components/SocialSignin/handleSocialLoginSuccess';

const {
  FACEBOOK_APP_ID,
  GOOGLE_APP_ID,
} = process.env;

const SigninOptions = ({
  history: { push },
  location: { pathname: currentPath },
  inputValue,
}) => (
  <div className={styles.wrapper}>
    { inputValue.name }
    <SocialButton
      provider="facebook"
      appId={FACEBOOK_APP_ID}
      onLoginSuccess={handleSocialLoginSuccess(push, currentPath, inputValue)}
      onLoginFailure={handleSocialLoginFailure}
    >
      SIGN IN WITH FACEBOOK
    </SocialButton>

    <SocialButton
      provider="google"
      appId={GOOGLE_APP_ID}
      onLoginSuccess={handleSocialLoginSuccess}
      onLoginFailure={handleSocialLoginFailure}
    >
      SIGN IN WITH GOOGLE
    </SocialButton>
  </div>
);

SigninOptions.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
  inputValue: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

SigninOptions.defaultProps = {
  inputValue: false,
};

const mapStateToProps = (state) => {
  const { inputValue } = state.signupInfo;
  return {
    inputValue,
  };
};


export default withRouter(connect(mapStateToProps)(SigninOptions));
