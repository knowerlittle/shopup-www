import React from 'react';
import PropTypes from 'prop-types';
import OnboardBrand from 'components/OnboardUser/Brand/index';
import OnboardSpace from 'components/OnboardUser/Space/index';

const options = {
  brand: step => <OnboardBrand step={step} />,
  space: step => <OnboardSpace step={step} />,
};

const OnboardUser = ({ journey, step }) => (options[journey](step));

OnboardUser.propTypes = {
  journey: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
};

export default OnboardUser;
