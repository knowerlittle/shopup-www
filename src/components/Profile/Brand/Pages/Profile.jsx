import React from 'react';
import styles from 'components/Profile/index.css';
import BackgroundDemo from 'assets/img/demo/brandbg.png';

const divStyle = {
  backgroundImage: `url(${BackgroundDemo}`,
  backgroundSize: 'cover',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const Profile = () => (
  <div className={styles.pageWrapper}>
    <section className={styles.profileInfo} style={divStyle}>
      <div className={styles.profileItemTop}>
        Hi 
      </div>
      <div className={styles.profileItem}>Hi</div>
      <div className={styles.profileItem}>Hi</div>
      <div className={styles.profileItem}>Hi</div>
      <div className={styles.profileItemBottom}>Hi</div>
    </section>
    Profilex
  </div>
);

export default Profile;
