import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from 'components/Profile/index.css';
import ReactSVG from 'react-svg';
import Calender from 'assets/icons/miniCalender.svg';

class BrandProfile extends Component {
  render() {
    const { brand } = this.props;
    return (
      <div className={styles.bodyWrapper}>
        <div className={styles.innerWrapper}>
          <section className={styles.leftMenu}>
            <div className={styles.menuOptions}>
              <ul>
                <li>
                  { brand.name }
                </li>
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

BrandProfile.propTypes = {
  brand: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state) => {
  const { brand } = state.auth;
  return {
    brand,
  };
};

// export default BrandProfile;
export default withRouter(connect(mapStateToProps)(BrandProfile));
