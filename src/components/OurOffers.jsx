import React from "react";
import grids from "../assets/grids.png";
import application from "../assets/application.png";
import code from "../assets/code.png";
import datascience from "../assets/datascience.png";
import layers from "../assets/layers.png";
import machinelearning from "../assets/machinelearning.png";
import seo from "../assets/seo.png";
import uiux from "../assets/uiux.png";
// import videoediting from "../assets/videoediting.png";
// import webdevelopment from "../assets/webdevelopment.png";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OurOffers() {
  const services = [
    {
      title: "Web Development",
      img: code,
      slug: "web-development",
      description:
        "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross Browser"],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    {
      title: "App Development",
      img: application,
      slug: "app-development",
      description:
        "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross Browser"],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    {
      title: "Automation Solutions",
      slug: "automation-solutions",
      description: "Implementing intelligent automation systems to streamline business processes, enhance productivity, and reduce operational costs.",
      img: machinelearning,
      features: ["Machine Learning", "Data Analysis", "Fast Loading", "Cross Browser"],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    {
      title: "SEO",
      img: seo,
      slug: "seo",
      description:
        "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross Browser"],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    // {
    //   title: "Data Science",
    //   img: datascience,
    //   slug: "data-science",
    //   description:
    //     "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
    //   features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross Browser"],
    //   techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    // },
    {
      title: "Graphic Designing",
      img: layers,
      slug: "graphics-design",
      description:
        "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross Browser"],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    {
      title: "UI/UX Design",
      img: uiux,
      slug: "ui-ux-design",
      description:
        "Crafting intuitive interfaces (UI) and seamless experiences (UX) to ensure digital products are aesthetically pleasing and easy to use.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross Browser"],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
  ];

  return (
    <section
      className="relative bg-white flex justify-center bg-repeat"
      style={{
        backgroundImage: `url(${grids})`,
        backgroundSize: 'contain'
      }}
    >
      <div className="relative w-full max-w-[1400px] overflow-hidden bg-white/[98%] p-6 md:p-20">
        
        {/* Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-12 md:mb-16">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight"
            style={{
              textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
            }}
          >
            What we Offer
          </motion.h2>

          <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive Technology solutions to drive your business Growth and
            digital transformation
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center px-2 md:px-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] overflow-hidden shadow-lg border border-gray-100 flex flex-col w-full max-w-[473px] min-h-[600px]"
            >
              {/* Dark Header Part */}
              <div className="bg-[#374151] p-6 md:p-8 flex flex-col items-center text-center text-[#F1F3F4]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-14 h-14 md:w-16 md:h-16 mb-4 object-contain"
                />
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm mt-2 font-light">
                  We Create custom websites and web applications
                </p>
              </div>

              {/* White Body Part */}
              <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col justify-between">
                <p className="text-[#4C4480CC]/80 text-center text-[14px] leading-relaxed">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex text-[#4C4480CC]/80 items-center gap-2 border border-[#4C448099]/60 rounded-[10px] py-2 px-3"
                    >
                      <div className="shrink-0 w-4 h-4 bg-[#4ADE80] rounded-full flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-[13px] md:text-[14px] text-[#4C4480CC]/80 font-medium truncate">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="space-y-2">
                  <p className="text-[14px] font-semibold text-[#4C4480CC]/80">
                    Technology:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.techs.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] text-[#F1F3F4] px-3 py-2 rounded-[18px] font-bold ${
                          idx === 0 ? "bg-[#4ADE80]" : 
                          idx === 1 ? "bg-[#22D3EE]" : 
                          idx === 2 ? "bg-[#A855F7]" : "bg-[#E11D48]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <hr className="border-[#4C448099]/60 border-1 mb-6" />

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="flex-1 bg-[#AC1B9E] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#9b1487] transition-colors"
                    >
                      Learn More <FaArrowRight />
                    </Link>
                    <button className="flex-1 border border-[#AC1B9E] text-[#4C4480CC]/80 py-3 rounded-xl text-sm font-bold hover:bg-[#B5179E10] transition-colors">
                      Get Free Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}