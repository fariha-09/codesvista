import React from 'react';
import Navbar from '../components/Navbar';
import ServicesBannerSection from '../components/ServicesBannerSection';
import OurOffers from '../components/OurOffers';
import OurWorkProcess from '../components/OurWorkProcess';
import FAQS from '../components/FAQS';
import Footer from '../components/Footer';

export default function AllServices() {
  return (
    <>
    <Navbar/>
    <ServicesBannerSection/>
    <OurOffers/>
      <OurWorkProcess/>
      <FAQS/>
      <Footer/>
    </>
  );
}
