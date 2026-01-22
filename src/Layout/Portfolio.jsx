import React from "react";
import PortfolioBannerSection from "../components/PortfolioBannerSection";
import PortfolioStats from "../components/PortfolioStats";
import OurLatestWork from "../components/OurLatestWork";
import ProjectStats from "../components/ProjectStats";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Clients from "../components/Clients";

export default function Portfolio() {
  return (
    <>
    <Navbar/> 
      <PortfolioBannerSection />
      <PortfolioStats />
      <OurLatestWork />
      <ProjectStats />
      <Clients />
      <Footer />
    </>
  );
}
