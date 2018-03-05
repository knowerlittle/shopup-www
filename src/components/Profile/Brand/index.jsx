import React, { Component } from 'react';
import styles from 'components/Profile/index.css';
/* eslint import/no-webpack-loader-syntax: off */
import ReactSVG from 'react-svg';
import Calender from 'assets/icons/miniCalender.svg';

class BrandProfile extends Component {
  render() {
    return (
      <div className={styles.bodyWrapper}>
        <div className={styles.innerWrapper}>
          <section className={styles.leftMenu}>
            <div className={styles.menuOptions}>
              <ul>
                <li>Name</li>
                <li>
                  <ReactSVG
                    path={Calender}
                    callback={(svg) => {
                      svg.height.baseVal.valueAsString = '30px'; // eslint-disable-line no-param-reassign
                      svg.width.baseVal.valueAsString = '30px'; // eslint-disable-line no-param-reassign
                      return svg;
                    }}
                    wrapperClassName={styles.grey}
                  />
                  <p>Bookings</p>
                </li>
                <li>Bookings</li>
                <li>Find a Space</li>
              </ul>
            </div>
          </section>
          <section className={styles.contentBody}>
            Profile
          </section>
        </div>
      </div>
    );
  }
}

export default BrandProfile;
