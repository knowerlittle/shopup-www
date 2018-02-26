import React from 'react';
import PropTypes from 'prop-types';
import Step1 from 'components/OnboardUser/Brand/Step1';
import Footer from 'components/OnboardUser/Brand/Footer';
// import { Link } from 'react-router-dom';

const steps = {
  1: <Step1 />,
};

const OnboardBrand = ({ step }) => (
  <div>
    {steps[step]}
    <Footer />
  </div>
);

OnboardBrand.propTypes = {
  step: PropTypes.string,
};

OnboardBrand.defaultProps = {
  step: '1',
};

export default OnboardBrand;
