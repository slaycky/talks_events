import React from 'react';
import Header from 'components/contexts/home/header';
import Speakers from 'components/contexts/home/speakers';
import Footer from 'components/contexts/home/footer';
import { data } from 'constants/data';

const Home = () => (
  <>
    <Header />
    <Speakers data={data} />
    <Footer />
  </>
);

export default Home;
