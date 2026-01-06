import React from "react";
import PortfolioBannerSection from "../components/PortfolioBannerSection";
import PortfolioStats from "../components/PortfolioStats";
import OurLatestWork from "../components/OurLatestWork";
import ProjectStats from "../components/ProjectStats";
import WhatOurClientsSay from "../components/WhatOurClientsSay";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Portfolio() {
  return (
    <>
    <Navbar/> 
      <PortfolioBannerSection />
      <PortfolioStats />
      <OurLatestWork />
      <ProjectStats />
      <WhatOurClientsSay />
      <Footer />
    </>
  );
}
