import React, { Component } from 'react';
import SocialButton from '../SocialButton/index';

const handleSocialLogin = (user) => {
  const profile = Object.assign(user.profile, { provider: user.provider });
  console.log(profile);
  fetch('http://localhost:3000/auth/facebook', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch(err => console.log('err', err));
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
