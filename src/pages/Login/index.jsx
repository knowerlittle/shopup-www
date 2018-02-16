import React from 'react';
import Nav from 'components/Nav/index';
import Signin from 'components/Signin/index';
import Footer from 'components/Footer/index';

const Login = () => (
  <div className="Login">
    <Nav nav="home" />
    <Signin />
    <Footer />
  </div>
);

export default Login;
