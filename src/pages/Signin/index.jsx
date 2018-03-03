import React from 'react';
import Nav from 'components/Nav/index';
import HomePageSignin from 'components/SocialSignin/HomePageSignin';
import Footer from 'components/Footer/index';

const Signin = () => (
  <div className="Login">
    <Nav nav="home" />
    <HomePageSignin />
    <Footer />
  </div>
);

export default Signin;
