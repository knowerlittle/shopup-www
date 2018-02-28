import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OnboardBrand from 'components/OnboardUser/Brand/index';
import OnboardSpace from 'components/OnboardUser/Space/index';
import { withRouter } from 'react-router-dom';
import fetchSignupInfo from 'api/signup';

const options = {
  brand: step => <OnboardBrand step={step} />,
  space: step => <OnboardSpace step={step} />,
};

class OnboardUser extends Component {
  componentDidMount() {
    fetchSignupInfo().then(({ categories, demographics }) => {
      console.log('c', categories);
      console.log('d', demographics);
    });
  }

  render() {
    return (options[this.props.match.params.journey](this.props.match.params.step));
  }
}

// const OnboardUser = ({ match: { params: { journey, step } } }) => ;

OnboardUser.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      journey: PropTypes.node,
      step: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default withRouter(OnboardUser);
