import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SVG from 'react-inlinesvg';
import Iframe from 'react-iframe';
import * as actions from 'action/space';
import ReviewFull from 'assets/icons/ic_star.svg';
import ReviewHalf from 'assets/icons/ic_star_half.svg';
import DownArrow from 'assets/icons/downArrow.svg';
import HeartLike from 'assets/icons/heartLike.svg';
import VideoIcon from 'assets/icons/360icon.svg';
import ShopFront1 from 'assets/img/demo/shopfront1.jpg';
import ShopFront2 from 'assets/img/demo/shopfront2.jpg';
import styles from 'components/Profile/index.css';

class FindSpace extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { dispatch } = this.props;
    actions.getAllSpaces(dispatch);
  }

  render() {
    return (
      <div className={styles.spaceWrapper}>
        <section className={styles.spaceCard}>
          <div className={styles.spaceTop}>
            <div className={styles.spaceTopLeft}>
              <SVG src={HeartLike} />
            </div>
            <div className={styles.spaceTopRight}>
              <div className={styles.spaceTitle}>Local Coffee Shop</div>
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
  }
}

FindSpace.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(FindSpace);
