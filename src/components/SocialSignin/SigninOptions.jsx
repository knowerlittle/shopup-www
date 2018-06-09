import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SocialButton from 'components/SocialSignin/SocialButton';
import styles from 'components/SocialSignin/index.css';
import handleSocialLoginFailure from 'components/SocialSignin/handleSocialLoginFailure';
import { handleSocialLoginSuccess } from 'components/SocialSignin/handleSocialLoginSuccess';

const {
  FACEBOOK_APP_ID,
  GOOGLE_APP_ID,
} = process.env;

const SigninOptions = ({
  dispatch,
  history: { push },
  location: { pathname: currentPath },
  inputValue,
}) => (
  <div className={styles.wrapper}>
    <SocialButton
      provider="facebook"
      appId={FACEBOOK_APP_ID}
      onLoginSuccess={handleSocialLoginSuccess(push, currentPath, inputValue, dispatch)}
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
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
  inputValue: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

SigninOptions.defaultProps = {
  inputValue: {},
};

const mapStateToProps = (state) => {
  const { inputValue } = state.signupInfo;
  return {
    inputValue,
  };
};


export default withRouter(connect(mapStateToProps)(SigninOptions));
