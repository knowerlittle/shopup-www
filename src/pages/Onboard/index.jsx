import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav/index';
import Onboard from 'components/Onboard/index';


const OnboardUser = ({ match: { params: { journey } } }) => (
  <div>
    <Nav nav="signup" />
    Onboarding Page {journey}
    <Onboard journey={journey} />
  </div>
);

OnboardUser.propTypes = {
  match: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

OnboardUser.defaultProps = {
  match: '',
};

export default OnboardUser;
