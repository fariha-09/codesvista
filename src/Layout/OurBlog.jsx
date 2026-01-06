import React from 'react';
import Navbar from '../components/Navbar';
import BlogBannerSection from '../components/BlogBannerSection';
import ExploreByCategory from '../components/ExploreByCategory';
import FeaturedArticles from '../components/FeaturedArticles';
import RecentArticles from '../components/RecentArticles';
import Footer from '../components/Footer';

export default function OurBlog() {
  return (
    <>
    <Navbar/>
    <BlogBannerSection/>
    <ExploreByCategory/>    
      <FeaturedArticles/> 
      < RecentArticles/>
      <Footer/>
    </>
  );
}
