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
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineCode, HiOutlineCog, HiOutlineColorSwatch, HiOutlineDeviceMobile, HiOutlineSearch } from "react-icons/hi";
import { HiOutlineMegaphone } from "react-icons/hi2";

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
      image: HiOutlineCode,
      tags: ["Responsive Design", "Seo Optimized"],
    },
    {
      title: "App Development",
      slug: "app-development",
      desc: "We build modern, cross-platform apps — Flutter and React Native, custom-designed, fast, user-friendly, with dashboards for full control and management.",
      image: HiOutlineDeviceMobile,
      tags: ["IOS(iphone)", "Android"],
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      desc: "We deliver digital marketing solutions — strategy, SEO, social media, and campaigns designed to multiply sales and grow your business.",
      image: HiOutlineMegaphone,
      tags: ["Social Media", "PPC Campaigns"],
    },
    {
      title: "Graphics Design",
      slug: "graphics-design",
      desc: "We create custom graphic designs logos, branding, company profiles, menus, stationery, and posts, tailored to client needs.",
      image: HiOutlineColorSwatch,
      tags: ["Visual Design", "Brand Identity"],
    },
    {
      title: "Software Development",
      slug: "software-development",
      desc: "We create custom software and automation — chatbots, POS, CRM, and business tools to save time and boost growth.",
      image: HiOutlineCog,
      tags: ["Responsive Design", "Custom Solutions"],
    },

    {
      title: "SEO",
      slug: "seo",
      desc: "We provide comprehensive SEO services — technical, on-page, and off-page strategies designed to boost organic traffic and business growth.",
      image: HiOutlineSearch,
      tags: ["On-Page SEO", "Off-Page SEO"],
    },
  ];

  const visibleServices = services.slice(0, 6);
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
  };

  const overlayVariants = {
    initial: { scaleX: 0, opacity: 0 },
    hover: { scaleX: 1, opacity: 1 },
  };

  return (
    <section
      className="relative bg-white flex justify-center object-cover w-[95%] mx-auto"
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
            Smart digital solutions from automation and AI to websites,
            branding, and marketing built to save time and accelerate your
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 relative z-10">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="
    relative md:p-8 px- py-4
    md:rounded-[40px] rounded-xl
    border border-cyan-300/40
    bg-[#F8F9FA]
    flex flex-col items-center text-center
    overflow-hidden
    transition-all duration-300
    hover:-translate-y-2
    hover:shadow-[0_25px_60px_rgba(0,175,193,0.35)]
  "
            >
              {/* Hover Overlay (SAME AS WhyChooseUs) */}
              <motion.div
                variants={overlayVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="
    absolute inset-0 z-0 origin-center
    bg-gradient-to-br
    from-[#0FC8CA]/20
    via-white/60
    to-[#AC1B9E]/20
    backdrop-blur-[2px]
  "
              />

              <div className="relative z-10 flex flex-col items-center h-full w-full">
                {/* Icon / Image Wrapper (same feel as WhyChooseUs) */}
                <motion.div
                  variants={{ hover: { y: -6, rotate: 3 } }}
                  className="
    bg-[#0FC8CA]
    md:w-18 md:h-18 w-14 h-14
    rounded-2xl
    flex items-center justify-center
    mb-4
    shadow-xl shadow-[#0FC8CA]/30
    ring-1 ring-white/40
  "
                >
                  <service.image className="text-white md:text-4xl text-3xl font-bold" />
                </motion.div>

                {/* Title */}
                <h3
                  className="
  text-[#2E2A5F]
  md:text-2xl
  font-bold
  tracking-tight
  mb-2
"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
  text-[#4C4480]/70
  text-sm
  leading-relaxed
  mb-4
  hidden md:block
"
                >
                  {service.desc}
                </p>

                {/* Tags (converted to points style like WhyChooseUs) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 px-1 place-items-start ml-7 mb-6">
                  {service.tags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#34D399] text-base shrink-0" />
                      <span className="text-[#4C4480]/70 text-sm font-medium">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  variants={{
                    initial: {
                      backgroundColor: "#",
                      color: "#0FC8CA",
                      borderColor: "#0FC8CA",
                    },
                    
                  }}
                  transition={{ duration: 0.35 }}
                  className="border-2 px-8 py-2 rounded-xl text-sm font-bold"
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:mt-16 my-5 flex justify-center relative z-10">
          <Link
            to="/services"
            className="px-4 md:px-8 py-3 md:py-4 rounded-full bg-[#AC1B9E] border-2 font-bold text-white text-lg transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
