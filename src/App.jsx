import React from "react";
import Home from "./Layout/Home";
import OurMissionAndVision from "./Layout/OurMissionAndVision";
import SelectedService from "./Layout/WebdevelopmentDetail";
import AllServices from "./Layout/AllServices";
import Portfolio from "./Layout/Portfolio";
import ContactUs from "./Layout/ContactUs";
import OurBlog from "./Layout/OurBlog";
import { Route, Routes } from "react-router-dom";
import GetFreeQuote from "./components/GetFreeQuote";
import DigitalmarketingDetail from "./Layout/DigitalmarketingDetail";
import GraphicDesignDetail from "./Layout/GraphicDesignDetail";
import SoftwareDevelopmentDetail from "./Layout/SoftwareDevelopmentDetail";
import SeoServiceDetail from "./Layout/SeoServiceDetail";
import ScrollToTop from "./components/ScrollToTop";
import AppDevelopmentDetail from "./Layout/AppDevelopmentDetail";
import AutomationSolutions from "./Layout/AutomationSolutions";
function App() {
  return (
    <>
    <ScrollToTop/> 
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<OurMissionAndVision />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/service-details" element={<SelectedService />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<OurBlog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/getquote" element={<GetFreeQuote />} />
        <Route path="/services/web-development" element={<SelectedService />} />
        <Route path="/services/app-development" element={<AppDevelopmentDetail />} />
        <Route path="/services/digital-marketing" element={<DigitalmarketingDetail />} />
        <Route path="/services/graphics-design" element={<GraphicDesignDetail />} />
        <Route path="/services/software-development" element={<SoftwareDevelopmentDetail />} />
        <Route path="/services/automation-solutions" element={<AutomationSolutions />} />
        <Route path="/services/seo" element={<SeoServiceDetail />} />
      </Routes>
      
    </>
  );
}

export default App;
