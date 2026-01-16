import React from 'react';
import Navbar from '../components/Navbar';
import OurSeoServices from '../components/OurSeoServices';
import SeoTools from '../components/SeoTools';
import SeoPackages from '../components/SeoPackages';
import SeoBannerSection from '../components/SeoBannerSection';
import OurSeoProcess from '../components/OurSeoProcess';
import SeoResultsAchieved from '../components/SeoResultsAchieved';
import SeoFAQs from '../components/SeoFAQs';
import SeoClosingSection from '../components/SeoClosingSection';
import Footer from '../components/Footer';

export default function SeoServiceDetail() {
  return (
    <>
<Navbar/>
<SeoBannerSection/>
<OurSeoServices/>
<SeoTools/>
<SeoPackages/>
<OurSeoProcess/>
<SeoResultsAchieved/>
<SeoFAQs/>
<SeoClosingSection/>
<Footer/>c
    </>
  );
}
