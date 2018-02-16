import React from 'react';
import SocialButton from 'components/Signin/SocialButton';
import handleFacebookLogin from 'api/auth/facebook';
import handleSocialLoginFailure from 'api/auth/handleSocialLoginFailure';

const FacebookButton = () => (
  <div>
    <SocialButton
      provider="facebook"
      appId="149261575830134"
      onLoginSuccess={handleFacebookLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      SIGN IN WITH FACEBOOK
    </SocialButton>
  </div>
);

export default FacebookButton;
