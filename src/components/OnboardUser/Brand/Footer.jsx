import React from 'react';
import PropTypes from 'prop-types';
import IntroFooter from 'components/OnboardUser/IntroFooter';
import ProgressFooter from 'components/OnboardUser/Brand/ProgressFooter';
import { withRouter } from 'react-router-dom';

const introTitle = 'Itinerary builder';
const introExplainer = 'Save, organize, and share all details here';

function options(step) {
  switch (step) {
    case '1':
      return <IntroFooter title={introTitle} explainer={introExplainer} />;
    default:
      return <ProgressFooter />;
  }
}

const Footer = ({ match: { params: { step } } }) => options(step);

Footer.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Footer);
