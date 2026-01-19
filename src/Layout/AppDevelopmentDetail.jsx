import React from 'react';
import Navbar from '../components/Navbar';
import AppDevelopmentBannerSection from '../components/AppDevelopmentBannerSection';
import FlutterWhatWeOffer from '../components/FlutterWhatWeOffer';
import AppTechnologies from '../components/AppTechnologies';
import AppDevelopmentProcess from '../components/AppDevelopmentProcess';
import AppFAQs from '../components/AppFAQs';
import Footer from '../components/Footer';

export default function AppDevelopmentDetail() {
  return (
    <>
      <Navbar/>
      <AppDevelopmentBannerSection/>
      <FlutterWhatWeOffer/>
      <AppTechnologies/>
      <AppDevelopmentProcess/>
      <AppFAQs/>
      <Footer/>
    </>

  );
}
