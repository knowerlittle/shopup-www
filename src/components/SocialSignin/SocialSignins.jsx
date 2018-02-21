import React from 'react';
import SocialButton from 'components/SocialSignin/SocialButton';
import handleSocialLoginSuccess from 'api/auth/handleSocialLoginSuccess';
import handleSocialLoginFailure from 'api/auth/handleSocialLoginFailure';

const {
  FACEBOOK_APP_ID,
  GOOGLE_APP_ID,
} = process.env;

console.log('google', GOOGLE_APP_ID);

const SocialSignins = () => (
  <div>
    <SocialButton
      provider="facebook"
      appId={FACEBOOK_APP_ID}
      onLoginSuccess={handleSocialLoginSuccess}
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

export default SocialSignins;
