import React from 'react';
import PropTypes from 'prop-types';
import Profile from 'components/Profile/Brand/Pages/Profile';
import Bookings from 'components/Profile/Brand/Pages/Bookings';
import Messages from 'components/Profile/Brand/Pages/Messages';
import FindSpace from 'components/Profile/Brand/Pages/FindSpace';

const options = {
  profile: <Profile />,
  bookings: <Bookings />,
  messages: <Messages />,
  spaces: <FindSpace />,
};

const Page = ({ page }) => options[page];

Page.propTypes = {
  page: PropTypes.string,
};

Page.defaultProps = {
  page: 'profile',
};

export default Page;
