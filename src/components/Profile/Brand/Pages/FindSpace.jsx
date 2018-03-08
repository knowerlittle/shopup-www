import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'action/space';

import SpaceList from 'components/Profile/Brand/SpaceList';
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
    const { allSpaces } = this.props;
    return (
      <div className={styles.spaceWrapper}>
        { allSpaces ? allSpaces.map(space => (
          <SpaceList space={space} key={space['_id']} /> // eslint-disable-line dot-notation
        )) : ''}
      </div>
    );
  }
}

FindSpace.propTypes = {
  dispatch: PropTypes.func.isRequired,
  allSpaces: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state) => {
  const { space: { all: allSpaces } } = state;
  return {
    allSpaces,
  };
};

export default connect(mapStateToProps)(FindSpace);
