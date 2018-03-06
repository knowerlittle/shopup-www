import React from 'react';
import PropTypes from 'prop-types';
import IntroFooter from 'components/OnboardUser/IntroFooter';
import ProgressFooter from 'components/OnboardUser/Brand/ProgressFooter';
import { withRouter } from 'react-router-dom';

function options(step) {
  switch (step) {
    case '1':
      return <IntroFooter />;
    case 'signin':
      return <IntroFooter hideButton />;
    default:
      return <ProgressFooter />;
  }
}

const Footer = ({ match: { params: { step } } }) => options(step);

Footer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      step: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default withRouter(Footer);
