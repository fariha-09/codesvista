import React from 'react';
import Navbar from '../components/Navbar';
import DmBannerSection from '../components/DmBannerSection';
import OurdmServices from '../components/OurdmServices';
import MarketingPrices from '../components/MarketingPrices';
import OurMarketingProcess from '../components/OurMarketingProcess';
import ResultsWeAchieve from '../components/ResultsWeAchieve';
import MarketingFAQs from '../components/MarketingFAQs';
import MarketingClosingSection from '../components/MarketingClosingSection';
import Footer from "../components/Footer"

export default function DigitalmarketingDetail() {
  return (
    <>
    <Navbar/>
    <DmBannerSection/>
      <OurdmServices/>
      <MarketingPrices/>
      <OurMarketingProcess/>
      <ResultsWeAchieve/>
      <MarketingFAQs/>
      <MarketingClosingSection/>
      <Footer/>
    </>
  );
}
