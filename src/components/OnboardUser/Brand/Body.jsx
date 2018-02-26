import React from 'react';
import PropTypes from 'prop-types';
import Body1 from 'components/OnboardUser/Brand/Body1';
import { withRouter } from 'react-router-dom';
import Body2 from 'components/OnboardUser/Brand/Body2';

const options = {
  1: <Body1 />,
  2: <Body2 />,
};

const Body = ({ match: { params: { step } } }) => (
  <div>
    {step}
    {options[step]}
  </div>
);

Body.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Body);
