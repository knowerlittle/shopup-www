import React from 'react';
import Nav from 'components/Nav/index';
import SigninPanel from 'components/SocialSignin/index';
import Footer from 'components/Footer/index';
import styles from 'components/OnboardUser/index.css';

const Signin = () => (
  <div>
    <Nav nav="home" />
    <div className={styles.bodyWrapper}>
      <SigninPanel />
    </div>
    <Footer />
  </div>
);

export default Signin;
