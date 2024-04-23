import React from 'react';
import { Container } from 'reactstrap';
import HeroSection from '../../components/Ui/HeroSection';

import LiveAuction from '../../components/Ui/Live Auction/LiveAuction';
import SellerSection from '../../components/Ui/Seller-Section/SellerSection';
import TrendingSection from '../../components/Ui/Trending-Section/TrendingSection';
import StepSection from '../../components/Ui/Step Section/StepSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <TrendingSection />
      <StepSection />
    </>
  )
}

export default Home;