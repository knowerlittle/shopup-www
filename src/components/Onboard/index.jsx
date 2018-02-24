import React from 'react';
import OnboardBrand from 'components/Onboard/Brand/index';
import OnboardSpace from 'components/Onboard/Space/index';
import PropTypes from 'prop-types';

const options = {
  brand: <OnboardBrand />,
  space: <OnboardSpace />,
};

const Onboard = ({ journey }) => options[journey];

Onboard.propTypes = {
  journey: PropTypes.string.isRequired,
};

export default Onboard;

