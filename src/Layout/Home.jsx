import Clients from "../components/Clients"
import ClosingSection from "../components/ClosingSection"
import FAQS from "../components/FAQS"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import OurDesignPortfolio from "../components/OurDesignPortfolio"
import OurTechnology from "../components/OurTechnology"
import OurWork from "../components/OurWork"
import OurWorkProcess from "../components/OurWorkProcess"
import Services from "../components/Services"
import Stats from "../components/Stats"
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <Services/>
     <OurWork/>
     <Stats/>
     <WhyChooseUs/>
     <OurTechnology/>
     <OurWorkProcess/>
     <Clients/>
     {/* <OurDesignPortfolio/>
     <FAQS/> */}
     <ClosingSection/>
     <Footer/>
    </>
  );
}
