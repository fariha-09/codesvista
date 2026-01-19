import React from 'react';
import Navbar from '../components/Navbar';
import AutomationBannerSection from '../components/AutomationBannerSection';
import AutomationServices from '../components/AutomationServices';
import AutomationTools from '../components/AutomationTools';
import AutomationProcess from '../components/AutomationProcess';
import AutomationFAQs from '../components/AutomationFAQs';
import Footer from '../components/Footer';

export default function AutomationSolutions() {
  return (
    <>
      <Navbar/>
      <AutomationBannerSection/>
    <AutomationServices/>
    <AutomationTools/>
    <AutomationProcess/>
    <AutomationFAQs/>
    <Footer/>
    </>
  );
}
