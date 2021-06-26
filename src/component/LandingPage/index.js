import React from 'react';
import FreeTrial from './freeTrial/FreeTrial';
import OneStystem from './oneSystem/OneStystem';
import DataSafe from './datasafe/DataSafe';
import FeaturedPacks from './featuredPack/FeaturedPacks';
import WhyYog from './whyYog/WhyYog';
import PricingModel from './pricingModel/PricingModel';
import Institution from './institutions/Institution';
import GetDemo from './getDemo/GetDemo';
import DownloadApp from './donwloadApp/DownloadApp';
import HaveDoubt from './havedoubt/HaveDoubt';
import Footer from './footer/Footer';
import Header from './header/Header';

function LandingPage(props) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <FreeTrial />
      <OneStystem />
      <DataSafe />
      <FeaturedPacks />
      <WhyYog />
      <PricingModel />
      <Institution />
      <GetDemo />
      <DownloadApp />
      <HaveDoubt />
      <Footer />
    </div>
  );
}

export default LandingPage;
