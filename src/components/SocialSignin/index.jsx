import React from 'react';
import PropTypes from 'prop-types';
import handleSocialLoginSuccess from 'components/SocialSignin/handleSocialLoginSuccess';
import SocialButton from 'components/SocialSignin/SocialButton';
import handleSocialLoginFailure from 'components/SocialSignin/handleSocialLoginFailure';
import { withRouter } from 'react-router-dom';
import styles from 'components/SocialSignin/index.css';

const {
  FACEBOOK_APP_ID,
  GOOGLE_APP_ID,
} = process.env;

const SocialSignin = ({ history: { push } }) => (
  <div className={styles.wrapper}>
    <SocialButton
      provider="facebook"
      appId={FACEBOOK_APP_ID}
      onLoginSuccess={handleSocialLoginSuccess(push)}
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

SocialSignin.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default withRouter(SocialSignin);
