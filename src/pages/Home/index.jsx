import React from 'react';
import Nav from 'components/Nav/index';
import HeroComp from 'components/Hero/index';
import Footer from 'components/Footer/index';

const Home = () => (
  <div>
    <Nav nav="home" />
    <HeroComp />
    <Footer />
  </div>
);

export default Home;
