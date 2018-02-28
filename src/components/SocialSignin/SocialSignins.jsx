import React from 'react';
import PropTypes from 'prop-types';
import SocialButton from 'components/SocialSignin/SocialButton';
import handleSocialLoginSuccess from 'api/auth/handleSocialLoginSuccess';
import handleSocialLoginFailure from 'api/auth/handleSocialLoginFailure';
import { withRouter } from 'react-router-dom';

const {
  FACEBOOK_APP_ID,
  GOOGLE_APP_ID,
} = process.env;

const SocialSignins = ({ history: { push } }) => (
  <div>
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

SocialSignins.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default withRouter(SocialSignins);
