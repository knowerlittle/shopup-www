import React from 'react';
import Button from 'components/Global/Button';
import styles from 'components/Hero/index.css';
import { Link } from 'react-router-dom';
// import NeonLike from 'assets/img/home/neonlike.png';
import Iframe from 'react-iframe';

const introText = 'THE INTERNET SAYS IT\'S';

const Hero = () => (
  <div>
    <section className={styles.heroContainer}>
      <div className={styles.leftSection}>
        <p className={styles.introText}>{introText}</p>
        <p className={styles.mainText}>The best way</p>
        <p className={styles.mainText}>to find space</p>
        <p className={styles.mainTextLast}>for your passion.</p>
        <div className={styles.buttonWrapper}>
          <Link to="/signup">
            <Button
              color="purple"
              text="GET STARTED"
              height="50"
              width="300"
            />
          </Link>
        </div>
      </div>
      <div className={styles.rightSection}>
        {/* <img src={NeonLike} alt="like" /> */}
        <div className={styles.videoWrapper}>
          <Iframe
            url="https://www.thinglink.com/mediacard/951052997931040769?autoplay=1&autorotate=1&displaytitle=1&rel=1"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </div>
      </div>
    </section>
    <section className={styles.featureContainer}>
      <h2>Feature Container</h2>
    </section>
  </div>
);

export default Hero;
