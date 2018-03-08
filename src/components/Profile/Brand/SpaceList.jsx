import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import ReviewFull from 'assets/icons/ic_star.svg';
import ReviewHalf from 'assets/icons/ic_star_half.svg';
import DownArrow from 'assets/icons/downArrow.svg';
import VideoIcon from 'assets/icons/360icon.svg';
import HeartLike from 'assets/icons/heartLike.svg';
import ShopFront1 from 'assets/img/demo/shopfront1.jpg';
import ShopFront2 from 'assets/img/demo/shopfront2.jpg';
import SVG from 'react-inlinesvg';
import styles from 'components/Profile/index.css';

const SpaceList = ({ space }) => (
  <section className={styles.spaceCard}>
    <div className={styles.spaceTop}>
      <div className={styles.spaceTopLeft}>
        <SVG src={HeartLike} />
      </div>
      <div className={styles.spaceTopRight}>
        <div className={styles.spaceTitle}>{ space.name }</div>
        <div className={styles.locationText}>{ space.address }</div>
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
          <li className={styles.borderListSelected}>
            <div className={styles.previewBox}>
              <SVG
                className={styles.svgOverlay}
                src={VideoIcon}
              />
              <img src={ShopFront1} alt="preview" />
            </div>
          </li>
          <li className={styles.borderList}>
            <div className={styles.previewBox}>
              <img src={ShopFront1} alt="preview" />
            </div>
          </li>
          <li className={styles.borderList}>
            <div className={styles.previewBox}>
              <img src={ShopFront2} alt="preview" />
            </div>
          </li>
          <li>
            <SVG src={DownArrow} />
          </li>
        </ul>
      </div>
      <div className={styles.previewWrapper}>
        <Iframe
          url={space.video}
          id="video"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    </div>
  </section>
);

SpaceList.propTypes = {
  space: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default SpaceList;
