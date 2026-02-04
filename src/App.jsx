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
import { FaWhatsapp } from "react-icons/fa";
function App() {
  return (
    <>
      <ScrollToTop />
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
        <Route
          path="/services/app-development"
          element={<AppDevelopmentDetail />}
        />
        <Route
          path="/services/digital-marketing"
          element={<DigitalmarketingDetail />}
        />
        <Route
          path="/services/graphics-design"
          element={<GraphicDesignDetail />}
        />
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopmentDetail />}
        />
        <Route
          path="/services/automation-solutions"
          element={<AutomationSolutions />}
        />
        <Route path="/services/seo" element={<SeoServiceDetail />} />
      </Routes>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923465987369" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50 transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
}

export default App;
