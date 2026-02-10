import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MissionBannerSection from '../components/MissionBannerSection';
import VisionAndMission from '../components/VisionAndMission';
import OurStory from '../components/OurStory';
import OurMission from '../components/OurMission';
import OurTeam from '../components/OurTeam';
import Footer from '../components/Footer';
import OurCEO from '../components/OurCEO';

export default function OurMissionAndVision() {
  return (
    <>
      <Navbar/>
      <MissionBannerSection/>
      <VisionAndMission/>
      <OurStory/>
      <OurMission/>
      <OurCEO/>
      {/* <OurTeam/> */}
      <Footer/>
      {/* <HeroSection/> */}
    </>
  );
}
