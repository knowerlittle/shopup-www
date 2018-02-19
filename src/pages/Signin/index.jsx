import React from 'react';
import Nav from 'components/Nav/index';
import SocialSignin from 'components/SocialSignin/index';
import Footer from 'components/Footer/index';

const Signin = () => (
  <div className="Login">
    <Nav nav="home" />
    <SocialSignin />
    <Footer />
  </div>
);

export default Signin;
