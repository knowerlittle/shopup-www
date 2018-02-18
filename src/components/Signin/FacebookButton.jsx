import React from 'react';
import SocialButton from 'components/Signin/SocialButton';
import handleFacebookLogin from 'api/auth/facebook';
import handleGoogleLogin from 'api/auth/google';
import handleSocialLoginFailure from 'api/auth/handleSocialLoginFailure';

const FACEBOOK = 'facebook';
const GOOGLE = 'google';

const {
  FACEBOOK_APP_ID,
  GOOGLE_APP_ID,
} = process.env;

console.log('google', GOOGLE_APP_ID);

const FacebookButton = () => (
  <div>
    <SocialButton
      provider={FACEBOOK}
      appId={FACEBOOK_APP_ID}
      onLoginSuccess={handleFacebookLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      SIGN IN WITH FACEBOOK
    </SocialButton>

    <SocialButton
      provider={GOOGLE}
      appId={GOOGLE_APP_ID}
      onLoginSuccess={handleGoogleLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      SIGN IN WITH GOOGLE
    </SocialButton>
  </div>
);

export default FacebookButton;
