import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const OnboardSpace = ({ step }) => (
  <div>
    STEP: { step }
    Space Onboarding Component
  </div>
);

OnboardSpace.propTypes = {
  step: PropTypes.string,
};

OnboardSpace.defaultProps = {
  step: '1',
};

export default OnboardSpace;
