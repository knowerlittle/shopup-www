import React, { Component } from 'react';
import SocialButton from '../SocialButton/index';

const handleSocialLogin = (user) => {
  console.log(user);
};

const handleSocialLoginFailure = (err) => {
  console.error(err);
};

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.onLoginSuccess = handleSocialLogin;
    this.onLoginFailure = handleSocialLoginFailure;
  }
  render() {
    return (
      <div>
        <SocialButton
          provider="facebook"
          appId="149261575830134"
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginSuccess}
        >
          Login with Facebook
        </SocialButton>
      </div>
    );
  }
}
