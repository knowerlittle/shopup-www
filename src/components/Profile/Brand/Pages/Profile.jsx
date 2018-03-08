import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from 'components/Profile/index.css';
import SVG from 'react-inlinesvg';
import Email from 'assets/icons/ic_email.svg';
import BackgroundDemo from 'assets/img/demo/brandbg.png';
import HatLady from 'assets/img/demo/hatdemo.png';
import ReviewFull from 'assets/icons/ic_star.svg';
import ReviewHalf from 'assets/icons/ic_star_half.svg';

const divStyle = {
  backgroundImage: `url(${BackgroundDemo}`,
  backgroundSize: 'cover',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const brandDescription = `Co-founder, chairman, and chief executive officer (CEO) 
    of Apple Inc CEO and majority shareholder of Pixar Animation Studios; 
    a member of The Walt Disney Company's`;

const Profile = ({ brand }) => (
  <div className={styles.pageWrapper}>
    <section className={styles.profileInfo} style={divStyle}>
      <div className={styles.profileItemTop}>
        <span className={styles.brandName}>{brand.name}</span>
        <div className={styles.purpleCircle}>
          <SVG src={Email} />
        </div>
      </div>
      <div className={styles.profileItemWithImage}>
        <img src={HatLady} alt="Brand" width="120" />
        <p>{brandDescription}</p>
      </div>
      <div className={styles.profileItemStats}>
        <p>45 <span>Views</span></p>
        <p>10 <span>Events</span></p>
        <p>
          <SVG src={ReviewFull} />
          <SVG src={ReviewFull} />
          <SVG src={ReviewFull} />
          <SVG src={ReviewFull} />
          <SVG src={ReviewHalf} />
        </p>
      </div>
      <div className={styles.profileItem}>Hi</div>
      <div className={styles.profileItemBottom}>Hi</div>
    </section>
  </div>
);

Profile.propTypes = {
  brand: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state) => {
  const { brand } = state.auth;
  return {
    brand,
  };
};

export default connect(mapStateToProps)(Profile);
