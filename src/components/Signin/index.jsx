import React from 'react';
import handleFacebookLogin from 'api/auth/facebook';
import SocialButton from 'components/SocialButton/indexx';
import styles from 'components/Signin/index.css';
// const handleSocialLogin = (user) => {
// handel
//   const profile = Object.assign(user.profile, { provider: user.provider });
//   console.log(profile);
//   fetch('http://localhost:3000/auth/facebook', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json, text/plain, */*',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(profile),
//   })
//     .then(res => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(err => console.log('err', err));
// };

const handleSocialLoginFailure = (err) => {
  console.error(err);
};

const Signin = () => (
  <div className={styles.wrapper}>
    <SocialButton
      provider="facebook"
      appId="149261575830134"
      onLoginSuccess={handleFacebookLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      <p className={styles.buttonText}>SIGN IN WITH FACEBOOK</p>
    </SocialButton>
  </div>
);

export default Signin;

// export default class Signin extends Component {
//   constructor(props) {
//     super(props);
//     this.onLoginSuccess = handleFacebookLogin;
//     this.onLoginFailure = handleSocialLoginFailure;
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <SocialButton
//           className={styles.signinButton}
//           provider="facebook"
//           appId="149261575830134"
//           onLoginSuccess={this.onLoginSuccess}
//           onLoginFailure={this.onLoginFailure}
//         >
//           Login with Facebook
//         </SocialButton>
//       </div>
//     );
//   }
// }
