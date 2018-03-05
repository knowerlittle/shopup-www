import React from 'react';
import Profile from 'components/Profile/index';
import Nav from 'components/Nav/index';

const BrandProfile = () => (
  <div>
    <Nav nav="profile" />
    <Profile profile="brand" />
  </div>
);

export default BrandProfile;
