import React from 'react';
import Nav from 'components/Nav/index';
import MissionComp from 'components/Mission/index';
import Footer from 'components/Footer/index';

const MissionPage = () => (
  <div className="Mission">
    <Nav nav="home" />
    <MissionComp />
    <Footer />
  </div>
);

export default MissionPage;
