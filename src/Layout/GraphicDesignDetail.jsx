import React from 'react';
import Navbar from '../components/Navbar';
import GraphicBannerSection from '../components/GraphicBannerSection';
import OurDesignServices from '../components/OurDesignServices';
import DesignTools from '../components/DesignTools';
import GraphicDesignPackages from '../components/GraphicDesignPackages';
import OurWorkProcess from '../components/OurWorkProcess';
import OurDesignPortfolio from '../components/OurDesignPortfolio';
import FAQS from '../components/FAQS';
import Footer from '../components/Footer';
import ClosingSection from '../components/ClosingSection';

export default function GraphicDesignDetail() {
  return (
    <>
      <Navbar/>
      <GraphicBannerSection/>
      <OurDesignServices/>
      <DesignTools/>
      <GraphicDesignPackages/>
      <OurWorkProcess/>
      <OurDesignPortfolio/>
      <FAQS/>
    <ClosingSection/>
      <Footer/>
    </>
  );
}
