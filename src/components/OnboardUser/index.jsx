import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OnboardBrand from 'components/OnboardUser/Brand/index';
import OnboardSpace from 'components/OnboardUser/Space/index';
import * as actions from 'action/signup';

const options = {
  brand: step => <OnboardBrand step={step} />,
  space: step => <OnboardSpace step={step} />,
};

class OnboardUser extends Component {
  componentDidMount() {
    console.log('mount');
    this.fetchData();
  }

  fetchData() {
    const { journey } = this.props.match.params;
    const { dispatch } = this.props;
    actions.setSignupJourney(journey)(dispatch);
    actions.fetchSignupData(dispatch);
  }

  render() {
    const { journey, step } = this.props.match.params;
    return (options[journey](step));
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
