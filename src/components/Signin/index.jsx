import React from 'react';
import SocialSignins from 'components/Signin/SocialSignins';
import styles from 'components/Signin/index.css';

const Signin = () => (
  <div className={styles.wrapper}>
    <SocialSignins />
  </div>
);

export default Signin;
