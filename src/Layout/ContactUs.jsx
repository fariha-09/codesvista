import React from "react";
import ContactBannerSection from "../components/ContactBannerSection";
import StartConversaction from "../components/StartConversaction";
import ProjectStats from "../components/ProjectStats";
import GetInTouch from "../components/GetInTouch";
import GetFreeQuote from "../components/GetFreeQuote";
import FAQS from "../components/FAQS";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactUs() {
  return (
    <>
    <Navbar/>
      <ContactBannerSection />
      <StartConversaction />
      <ProjectStats />
      <GetInTouch/>
      <GetFreeQuote/>
      <FAQS/>
      <Footer/>
    </>
  );
}
