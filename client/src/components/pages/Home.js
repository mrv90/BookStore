import React from 'react';
import MainBanner from '../contents/MainBanner';
import SixServices from '../contents/SixServices';
import Wireframing from '../contents/Wireframing';
import SimilarTemplates from '../contents/SimilarTemplates';
import RecentPosts from '../contents/RecentPosts';
import HireUs from '../contents/HireUs';
import style from './pages.module.css';

const Home = () => {
  return (
    <div id={style.home}>
      <MainBanner />
      <SixServices />
      <Wireframing />
      <SimilarTemplates />
      <RecentPosts />
      <HireUs />
    </div>
  );
};

export default Home;
