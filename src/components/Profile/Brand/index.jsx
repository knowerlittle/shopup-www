import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBrandUser } from 'action/auth';
import Page from 'components/Profile/Brand/Pages';
import Nav from 'components/Profile/Brand/Nav';
import styles from 'components/Profile/index.css';

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
            <Nav brandName={brand.name} />
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
