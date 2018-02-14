import React from 'react';
import Nav from 'components/Nav/index';
import Hero from 'components/Hero/index';
import Footer from 'components/Footer/index';

const Home = () => (
  <div className="Home">
    <Nav nav="home" />
    <Hero />
    <Footer />
  </div>
);

export default Home;
