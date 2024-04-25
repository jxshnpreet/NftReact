import React from 'react';
import HeroSection from '../../components/Ui/HeroSection';

import LiveAuction from '../../components/Ui/Live Auction/LiveAuction';
import SellerSection from '../../components/Ui/Seller-Section/SellerSection';
import TrendingSection from '../../components/Ui/Trending-Section/TrendingSection';
import StepSection from '../../components/Ui/Step Section/StepSection';
import TopCollection from '../../components/Ui/Top Collection/TopCollection';
import CollectionList from '../../components/Ui/Collection List/CollectionList';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TopCollection />
      <CollectionList />
      <LiveAuction />
      <StepSection />
      <SellerSection />
      <TrendingSection />
    </>
  )
}

export default Home;