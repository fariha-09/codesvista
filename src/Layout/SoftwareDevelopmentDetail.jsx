import React from 'react';
import Navbar from '../components/Navbar';
import SoftwareBannerSection from '../components/SoftwareBannerSection';
import OurSoftwareServices from '../components/OurSoftwareServices';
import SoftwareTechnologies from '../components/SoftwareTechnologies';
import OurSoftwareDevelopmentProcess from '../components/OurSoftwareDevelopmentProcess';
import SoftwareDevelopmentFAQs from '../components/SoftwareDevelopmentFAQs';
import SoftwareClosingSection from '../components/SoftwareClosingSection';
import Footer from '../components/Footer';


export default function SoftwareDevelopmentDetail() {
  return (
    <>
      <Navbar/>
      <SoftwareBannerSection/>
      <OurSoftwareServices/>
      <SoftwareTechnologies/>
      <OurSoftwareDevelopmentProcess/>
      <SoftwareDevelopmentFAQs/>
      <SoftwareClosingSection/>
      <Footer/>
    </>
  );
}
