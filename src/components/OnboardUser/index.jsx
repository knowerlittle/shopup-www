import React from 'react';
import PropTypes from 'prop-types';
import OnboardBrand from 'components/OnboardUser/Brand/index';
import OnboardSpace from 'components/OnboardUser/Space/index';
import { withRouter } from 'react-router-dom';

const options = {
  brand: step => <OnboardBrand step={step} />,
  space: step => <OnboardSpace step={step} />,
};

const OnboardUser = ({ match: { params: { journey, step } } }) => (options[journey](step));

OnboardUser.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      journey: PropTypes.node,
      step: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default withRouter(OnboardUser);
