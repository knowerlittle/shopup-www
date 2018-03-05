import React from 'react';
import Profile from 'components/Profile/index';
import Nav from 'components/Nav/index';
import Footer from 'components/Footer/index';

const BrandProfile = () => (
  <div>
    <Nav nav="profile" />
    <Profile profile="brand" />
    <Footer />
  </div>
);

export default BrandProfile;
