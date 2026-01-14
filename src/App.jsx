import React from "react";
import Home from "./Layout/Home";
import OurMissionAndVision from "./Layout/OurMissionAndVision";
import SelectedService from "./Layout/SelectedService";
import AllServices from "./Layout/AllServices";
import Portfolio from "./Layout/Portfolio";
import ContactUs from "./Layout/ContactUs";
import OurBlog from "./Layout/OurBlog";
import { Route,Routes } from "react-router-dom";
import GetFreeQuote from "./components/GetFreeQuote";
function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<OurMissionAndVision />} />
    <Route path="/services" element={<AllServices />} />
        <Route path="/service-details" element={<SelectedService />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<OurBlog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/getquote" element={<GetFreeQuote />} />
        <Route path="/selectedservice" element={<SelectedService />} /> 
    </Routes>
    {/* <Home/> */}
    {/* <OurMissionAndVision/> */}
    {/* <SelectedService/> */}
    {/* <AllServices/> */}
    {/* <Portfolio/> */}
    {/* <ContactUs/> */}
    {/* <OurBlog/>  */}
    </>
  )
}

export default App
