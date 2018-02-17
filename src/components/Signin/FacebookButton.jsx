import React from 'react';
import SocialButton from 'components/Signin/SocialButton';
import handleFacebookLogin from 'api/auth/facebook';
import handleSocialLoginFailure from 'api/auth/handleSocialLoginFailure';

const FACEBOOK = 'facebook';
const APP_ID = process.env.FACEBOOK_APP_ID;

const FacebookButton = () => (
  <div>
    <SocialButton
      provider={FACEBOOK}
      appId={APP_ID}
      onLoginSuccess={handleFacebookLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      SIGN IN WITH FACEBOOK
    </SocialButton>
  </div>
);

export default FacebookButton;
