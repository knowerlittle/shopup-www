import React from 'react';
import Nav from 'components/Nav/index';
import OnboardUser from 'components/OnboardUser/index';

const Onboard = () => (
  <div className="main">
    <Nav nav="signup" />
    <OnboardUser />
  </div>
);

export default Onboard;
