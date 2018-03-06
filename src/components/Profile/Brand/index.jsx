import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { fetchBrandUser } from 'action/auth';
import SVG from 'react-inlinesvg';
import AccountIcon from 'assets/icons/accountCircle.svg';
import CalenderIcon from 'assets/icons/miniCalender.svg';
import MessageIcon from 'assets/icons/ic_comment.svg';
import FindSpaceIcon from 'assets/icons/ic_search.svg';
import styles from 'components/Profile/index.css';

class BrandProfile extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { dispatch } = this.props;
    fetchBrandUser(dispatch);
  }

  render() {
    const { brand } = this.props;

    return (
      <div className={styles.bodyWrapper}>
        <div className={styles.innerWrapper}>
          <section className={styles.leftMenu}>
            <div className={styles.menuOptions}>
              <ul>
                <NavLink to="/profile/brand" className={styles.grey} activeClassName={styles.red} >
                  <li>
                    <SVG src={AccountIcon} />
                    <span>{ brand.name }</span>
                  </li>
                </NavLink>
                <li>
                  <SVG src={CalenderIcon} />
                  <span>Bookings</span>
                </li>
                <li>
                  <SVG src={MessageIcon} />
                  <span>Messages</span>
                </li>
                <li>
                  <SVG src={FindSpaceIcon} />
                  <span>Find a Space</span>
                </li>
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { brand } = state.auth;
  return {
    brand,
  };
};

// export default BrandProfile;
export default withRouter(connect(mapStateToProps)(BrandProfile));
