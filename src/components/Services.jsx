import React, { useState } from "react";
import application from "../assets/application.png";
import code from "../assets/code.png";
import datascience from "../assets/datascience.png";
import layers from "../assets/layers.png";
import machinelearning from "../assets/machinelearning.png";
import seo from "../assets/seo.png";
import uiux from "../assets/uiux.png";
import videoediting from "../assets/videoediting.png";
import webdevelopment from "../assets/webdevelopment.png";
import grids from "../assets/grids.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export default function Services() {

  const [activeCard, setActiveCard] = useState(null);

const handleTap = (index) => {
  setActiveCard(index);
  setTimeout(() => setActiveCard(null), 600);
};
  const services = [
    {
      title: "Web Development",
      slug: "web-development",
      desc: "We build fast, responsive, user-friendly websites — custom-coded or CMS-powered, optimized for speed, performance, and growth with dashboards for full control and management.",
      image: code,
      tags: ["Responsive Design", "Seo Optimized"],
    },
    {
      title: "App Development",
      slug: "app-development",
      desc: "We build modern, cross-platform apps — Flutter and React Native, custom-designed, fast, user-friendly, with dashboards for full control and management.",
      image: application,
      tags: ["iOS", "Android"],
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      desc: "We deliver digital marketing solutions — strategy, SEO, social media, and campaigns designed to multiply sales and grow your business.",
      image: application,
      tags: ["Social Media", "PPC Campaigns"],
    },
    {
      title: "Graphics Design",
      slug: "graphics-design",
      desc: "We create custom graphic designs logos, branding, company profiles, menus, stationery, and posts, tailored to client needs.",
      image: webdevelopment,
      tags: ["Visual Design", "Brand Identity"],
    },
    {
      title: "Software Development",
      slug: "software-development",
      desc: "We create custom software and automation — chatbots, POS, CRM, and business tools to save time and boost growth.",
      image: layers,
      tags: ["Responsive Design", "Custom Solutions"],
    },

    {
      title: "SEO",
      slug: "seo",
      desc: "We provide comprehensive SEO services — technical, on-page, and off-page strategies designed to boost organic traffic and business growth.",
      image: seo,
      tags: ["On-Page SEO", "Off-Page SEO"],
    },
    {
      title: "Automation Solutions",
      slug: "automation-solutions",
      desc: "Implementing intelligent automation systems to streamline business processes, enhance productivity, and reduce operational costs.",
      image: machinelearning,
      tags: ["Machine Learning", "Data Analysis"],
    },

    {
      title: "E-commerce Solutions",
      slug: "ecommerce-solutions",
      desc: "Developing robust e-commerce platforms that provide seamless shopping experiences, secure transactions, and efficient inventory management.",
      image: application,
      tags: ["Multi-platform", "Secure Transactions"],
    },
    {
      title: "Software Development",
      slug: "software-development",
      desc: "Engineering custom, scalable software solutions to streamline your operations, solve complex challenges, and improve efficiency.",
      image: layers,
      tags: ["Responsive Design", "Custom Solutions"],
    },

    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      desc: "We create Figma designs and interactive prototypes — understanding client requirements to deliver precise, user-friendly, and high-quality designs.",
      image: uiux,
      tags: ["UI Design", "UX Design"],
    },
    {
      title: "Video Editing",
      slug: "video-editing",
      desc: "Expert video production — animated, AI, humanized, and 3D videos, fully customized to meet client requirements.",
      image: videoediting,
      tags: ["PRO QUALITY", "CREATIVE"],
    },
  ];

  const visibleServices = services.slice(0, 6);

  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{ backgroundImage: `url(${grids})` }}
    >
      <div className="relative w-full overflow-hidden bg-white/[98%] px-4 pt-2 md:p-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 my-6">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
            style={{
              textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
            }}
          >
            Our Services
          </motion.h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
           Smart digital solutions — from automation and AI to websites, branding, and marketing — built to save time and accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 relative z-10">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate={activeCard === index ? "hover" : "initial"}
              whileHover="hover"
              whileTap="hover"
              onTap={() => handleTap(index)}
              className="relative bg-[#F8F9FA] border border-[#4C4480] rounded-[30px] py-2 px-3 flex flex-col items-center text-center shadow-sm hover:shadow-md group overflow-hidden transition-all duration-300"
            >
              {/* 1. Expansion Circle */}
              <motion.div
                variants={{
                  initial: { scale: 0, opacity: 0 },
                  hover: { scale: 1.8, opacity: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-gray-200 rounded-full origin-center pointer-events-none z-0"
              />

              <div className="relative z-10 flex flex-col items-center h-full">
                <div className="w-14 h-14 mb-2 md:w-20 md:h-20 md:mb-6 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain  transition-transform duration-300"
                  />
                </div>

                {/* 2. Title with Color Change */}
                <motion.h3
                  variants={{
                    initial: { color: "#4C4480" },
                    hover: { color: "#AC1B9E" },
                  }}
                  className="md:text-xl font-bold md:mb-4"
                >
                  {service.title}
                </motion.h3>

                <p className="text-[#4C448099]/60 text-[18px] max-w-100 font-medium leading-relaxed md:mb-6 mb-3 hidden md:flex">
                  {service.desc}
                </p>
          
{/* Mobile Tags with Bullets / Desktop Tags as Badges */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-center md:gap-2 md:mb-8 mb-4 w-full px-2">
  {service.tags.map((tag, tIdx) => (
    <div
      key={tIdx}
      className="flex items-center text-xs md:text-[14px] font-semibold"
    >
      <span className="md:hidden mr-2 text-[#AC1B9E] text-lg">•</span>
      
      <motion.span
        variants={{
          initial: { 
            backgroundColor: "transparent", 
            color: "#4C4480" 
          },
          hover: { 
            backgroundColor: window.innerWidth >= 768 ? "#4C4480" : "transparent", 
            color: window.innerWidth >= 768 ? "#FFFFFF" : "black-600" 
          },
        }}
        // Tailwind classes: bg-transparent on mobile, gray on desktop
        className="md:bg-[#F3F4F6] bg-transparent md:px-3 md:py-2 md:rounded-full px-0 py-0 transition-colors duration-400"
      >
        {tag}
      </motion.span>
    </div>
  ))}
</div>
                <Link to={`/services/${service.slug}`} className="mt-auto">
                  <motion.button
                    variants={{
                      initial: {
                        backgroundColor: "rgba(172, 27, 158, 0)",
                        color: "#4C4480",
                        borderColor: "#AC1B9E",
                      },
                      hover: {
                        backgroundColor: "#AC1B9E",
                        color: "#FFFFFF",
                        borderColor: "#AC1B9E",
                      },
                    }}
                    transition={{ duration: 0.4 }}
                    className="mt-auto border-2 px-8 py-2 rounded-xl text-sm font-bold"
                  >
                    Read More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:mt-16 mt-8 flex justify-center relative z-10">
          <Link
            to="/services"
            className="px-8 py-4 rounded-full bg-[#AC1B9E] border-2 font-bold text-white text-lg transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

