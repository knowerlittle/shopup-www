import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import signinImage from 'assets/img/signin/cloud.png';
import styles from 'components/OnboardUser/index.css';
import SigninOptions from 'components/SocialSignin/SigninOptions';

const question = 'Sign in with ...';

const OnboardSignin = () => (
  <div className={styles.card}>
    <section className={styles.leftSection}>
      <img src={signinImage} width="280" alt="Signin" />
    </section>
    <section className={styles.rightSection}>
      <div className={styles.topWrapper}>
        {question}
      </div>
      <div className={styles.middleWrapper}>
        <SigninOptions />
      </div>
      <div className={styles.buttonWrapper}>
        hey
      </div>
    </section>
  </div>
);

export default connect()(OnboardSignin);
