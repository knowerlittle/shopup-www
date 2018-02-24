import React from 'react';
import Nav from 'components/Nav/index';
import PropTypes from 'prop-types';
import OnboardUser from 'components/OnboardUser/index';

const Onboard = ({ match: { params: { journey, step } } }) => (
  <div className="main">
    <Nav nav="signup" />
    Onboarding Page
    {journey}
    {step}
    <OnboardUser
      journey={journey}
      step={step}
    />
  </div>
);

Onboard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      journey: PropTypes.node,
      step: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default Onboard;
