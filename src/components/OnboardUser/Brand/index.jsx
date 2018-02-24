import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const OnboardBrand = ({ step }) => (
  <div>
    STEP: { step }
    Brand Onboarding Component
  </div>
);

OnboardBrand.propTypes = {
  step: PropTypes.string,
};

OnboardBrand.defaultProps = {
  step: '1',
};

export default OnboardBrand;
