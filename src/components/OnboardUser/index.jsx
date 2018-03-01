import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OnboardBrand from 'components/OnboardUser/Brand/index';
import OnboardSpace from 'components/OnboardUser/Space/index';
import { withRouter } from 'react-router-dom';
// import fetchSignupInfo from 'api/signup';
import { connect } from 'react-redux';
import fetchSignupData from 'action/signup';

const options = {
  brand: step => <OnboardBrand step={step} />,
  space: step => <OnboardSpace step={step} />,
};

class OnboardUser extends Component {
  componentDidMount() {
    console.log('hi');
    fetchSignupData(this.props.dispatch);
  }

  render() {
    return (options[this.props.match.params.journey](this.props.match.params.step));
  }
}

OnboardUser.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      journey: PropTypes.node,
      step: PropTypes.node,
    }).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect()(OnboardUser));
