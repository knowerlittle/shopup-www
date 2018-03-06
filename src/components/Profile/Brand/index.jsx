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
import Page from 'components/Profile/Brand/Pages';

class BrandProfile extends Component {
  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    const { dispatch } = this.props;
    fetchBrandUser(dispatch);
  }

  render() {
    const { brand } = this.props;
    const { page } = this.props.match.params;

    return (
      <div className={styles.bodyWrapper}>
        <div className={styles.innerWrapper}>
          <section className={styles.leftMenu}>
            <div className={styles.menuOptions}>
              <ul>
                <NavLink to="/brand/profile" className={styles.grey} activeClassName={styles.red} >
                  <li>
                    <SVG src={AccountIcon} />
                    <span>{ brand.name }</span>
                  </li>
                </NavLink>
                <NavLink to="/brand/bookings" className={styles.grey} activeClassName={styles.red} >
                  <li>
                    <SVG src={CalenderIcon} />
                    <span>Bookings</span>
                  </li>
                </NavLink>
                <NavLink to="/brand/messages" className={styles.grey} activeClassName={styles.red} >
                  <li>
                    <SVG src={MessageIcon} />
                    <span>Messages</span>
                  </li>
                </NavLink>
                <NavLink to="/brand/spaces" className={styles.grey} activeClassName={styles.red} >
                  <li>
                    <SVG src={FindSpaceIcon} />
                    <span>Find a Space</span>
                  </li>
                </NavLink>
              </ul>
            </div>
          </section>
          <section className={styles.contentBody}>
            <Page page={page} />
          </section>
        </div>
      </div>
    );
  }
}

BrandProfile.propTypes = {
  brand: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const { brand } = state.auth;
  return {
    brand,
  };
};

// export default BrandProfile;
export default withRouter(connect(mapStateToProps)(BrandProfile));
