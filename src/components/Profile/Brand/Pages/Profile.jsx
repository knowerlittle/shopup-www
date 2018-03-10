import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';
import styles from 'components/Profile/index.css';
import SVG from 'react-inlinesvg';
import Email from 'assets/icons/ic_email.svg';
import BackgroundDemo from 'assets/img/demo/brandbg.png';
import HatLady from 'assets/img/demo/hatdemo.png';
import ReviewFull from 'assets/icons/ic_star.svg';
import ReviewHalf from 'assets/icons/ic_star_half.svg';
import Instagram from 'assets/icons/ic_instagram.svg';
import Twitter from 'assets/icons/ic_twitter.svg';
import Facebook from 'assets/icons/ic_facebook.svg';

const divStyle = {
  backgroundImage: `url(${BackgroundDemo}`,
  backgroundSize: 'cover',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const brandDescription = `Co-founder, chairman, and chief executive officer (CEO)
    of Apple Inc CEO and majority shareholder of Pixar Animation Studios;
    a member of The Walt Disney Company's`;

class Profile extends Component {
  componentDidUpdate() {
    const { location } = this.props;
    const { section } = qs.parse(location.search);
    if (section) {
      document.getElementById(section).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }
  render() {
    const {
      brand,
      location,
      history: { push },
    } = this.props;
    const query = qs.parse(location.search);

    return (
      <div className={styles.pageWrapper}>
        <section className={styles.profileInfo} style={divStyle}>
          <div className={styles.profileLeft}>
            <img src={HatLady} alt="Brand" width="120" />
          </div>
          <div className={styles.profileCenter}>
            <div className={styles.profileTop}>
              <span className={styles.brandName}>{brand.name}</span>
              <p>{brandDescription}</p>
            </div>
            <div className={styles.profileMiddle}>
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
            <div className={styles.profileSocial}>
              <div className={styles.purpleCircleSmall}>
                <SVG src={Twitter} />
              </div>
              <div className={styles.purpleCircleSmall}>
                <SVG src={Instagram} />
              </div>
              <div className={styles.purpleCircleSmall}>
                <SVG src={Facebook} />
              </div>
            </div>
            <div className={styles.profileMenu}>
              <div
                id="overview"
                className={query.section === 'overview' ?
                  styles.profileMenuSelected :
                  styles.profileMenu}
                onClick={() => push('profile?section=overview')}
                onKeyDown={() => {}}
                role="presentation"
              >
                <p>Overview</p>
              </div>
              <div
                className={query.section === 'products' ?
                  styles.profileMenuSelected :
                  styles.profileMenu}
                onClick={() => push('profile?section=products')}
                onKeyDown={() => {}}
                role="presentation"
              >
                <p>Products</p>
              </div>
              <div
                className={query.section === 'events' ?
                  styles.profileMenuSelected :
                  styles.profileMenu}
                onClick={() => push('profile?section=events')}
                onKeyDown={() => {}}
                role="presentation"
              >
                <p>Events</p>
              </div>
              <div
                className={query.section === 'reviews' ?
                  styles.profileMenuSelected :
                  styles.profileMenu}
                onClick={() => push('profile?section=reviews')}
                onKeyDown={() => {}}
                role="presentation"
              >
                <p>Reviews</p>
              </div>
            </div>
          </div>
          <div className={styles.profileRight}>
            <div className={styles.purpleCircle}>
              <SVG src={Email} />
            </div>
          </div>
        </section>
        <section className={styles.overviewInfo}>
          Overview
        </section>
        <section
          id="products"
          className={styles.productInfo}
        >
          Product
        </section>
        <section
          id="events"
          className={styles.productInfo}
        >
         Events
        </section>
        <section
          id="reviews"
          className={styles.productInfo}
        >
         Reviews
        </section>
      </div>
    );
  }
}

Profile.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  brand: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const { brand } = state.auth;
  return {
    brand,
  };
};

export default withRouter(connect(mapStateToProps)(Profile));
