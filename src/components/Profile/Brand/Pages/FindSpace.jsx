import React from 'react';
import styles from 'components/Profile/index.css';
import SVG from 'react-inlinesvg';
import Iframe from 'react-iframe';
import ReviewFull from 'assets/icons/ic_star.svg';
import ReviewHalf from 'assets/icons/ic_star_half.svg';

const FindSpace = () => (
  <div className={styles.spaceWrapper}>
    <section className={styles.spaceCard}>
      <div className={styles.spaceTop}>
        <div className={styles.spaceTopLeft}>
          <div>Heart Icon</div>
        </div>
        <div className={styles.spaceTopRight}>
          <div className={styles.spaceTitle}>Space Name</div>
          <div className={styles.locationText}>148 Shoreditch High Street, E1 6JE</div>
          <div className={styles.reviewIcons}>
            <SVG src={ReviewFull} />
            <SVG src={ReviewFull} />
            <SVG src={ReviewFull} />
            <SVG src={ReviewFull} />
            <SVG src={ReviewHalf} />
          </div>
        </div>
      </div>
      <div className={styles.spaceBottom}>
        <div className={styles.previewOptions}>
          <ul>
            <li>
              <div className={styles.previewBox}>
                Preview Box
              </div>
            </li>
            <li>
              <div className={styles.previewBox}>
                Preview Box
              </div>
            </li>
            <li>
              <div className={styles.previewBox}>
                Preview Box
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.previewWrapper}>
          <Iframe
            url="https://www.thinglink.com/mediacard/975040659507380227?autoplay=0&autorotate=0&displaytitle=1&rel=1"
            id="video"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </div>
      </div>
    </section>
    <section className={styles.spaceCard}>
        narp
    </section>
  </div>
);

export default FindSpace;
