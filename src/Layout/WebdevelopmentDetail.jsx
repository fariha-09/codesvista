import React from "react";
import Navbar from "../components/Navbar";
import ServicesBannerSection from "../components/DevelopmentBannerSection";
import WhatWeOffers from "../components/WhatWeOffers";
import TechnologiesWeUse from "../components/TechnologiesWeUse";
import WebdevelopmentPackages from "../components/WebdevelopmentPackages";
import OurDevelopmentProcess from "../components/OurDevelopmentProcess";
import FAQS from "../components/FAQS";
import Footer from "../components/Footer";

export default function SelectedService() {
  return (
    <>
      <Navbar />
      <ServicesBannerSection />
      <WhatWeOffers />
      <TechnologiesWeUse/>
      <WebdevelopmentPackages/>
      <OurDevelopmentProcess/>
      <FAQS/>
      <Footer/>
    </>
  );
}
