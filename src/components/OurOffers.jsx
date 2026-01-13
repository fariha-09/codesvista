import React from "react";
import grids from "../assets/grids.png";
import application from "../assets/application.png";
import code from "../assets/code.png";
import datascience from "../assets/datascience.png";
import layers from "../assets/layers.png";
import machinelearning from "../assets/machinelearning.png";
import seo from "../assets/seo.png";
import uiux from "../assets/uiux.png";
import videoediting from "../assets/videoediting.png";
import webdevelopment from "../assets/webdevelopment.png";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function OurOffers() {
  const services = [
    {
      title: "Web Development",
      img: code,
      description:
        "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Cross Browser",
      ],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    {
      title: "App Development",
      img: application,
      description:
        "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Cross Browser",
      ],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    {
      title: "Web Development",
      img: webdevelopment,
      description:
        "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Cross Browser",
      ],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    {
      title: "Machine Learning",
      img: machinelearning,
      description:
        "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Cross Browser",
      ],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    {
      title: "SEO",
      img: seo,
      description:
        "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Cross Browser",
      ],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    {
      title: "Data Science",
      img: datascience,
      description:
        "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Cross Browser",
      ],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    {
      title: "Graphic Designing",
      img: layers,
      description:
        "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Cross Browser",
      ],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
    {
      title: "UI/UX Design",
      img: uiux,
      description:
        "Crafting intuitive interfaces (UI) and seamless experiences (UX) to ensure digital products are aesthetically pleasing and easy to use.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Cross Browser",
      ],
      techs: ["React.js", "Vue.js", "Node.js", "PHP/Laravel"],
    },
  ];
  return (
    <section
      className="relative bg-white flex justify-center object-cover "
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] p-10 md:p-20">
        {/* 2. Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text "
            style={{
              textShadow: `
                                        0 0 38px rgba(0, 206, 209, 0.45),
                                        0 0 20px rgba(0, 206, 209, 0.25)
                                      `,
            }}
          >
            What we Offer
          </motion.h2>

          <p className="text-[#4C448080] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            comprehensive Technology solution to drive your business Growth and
            digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] overflow-hidden shadow-lg border border-gray-100 flex flex-col w-[473px] h-[635px]"
            >
              {/* Dark Header Part */}
              <div className="bg-[#374151] p-8 flex flex-col items-center text-center text-[#F1F3F4]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <h3 className="text-white text-2xl font-bold">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2 font-light">
                  We Create custom websites and web applications
                </p>
              </div>

              {/* White Body Part */}
              <div className="p-8 space-y-6 flex-grow">
                <p className="text-[#4C4480CC]/80 text-center text-[14px] leading-relaxed">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex text-[#4C4480CC]/80 items-center gap-2 border border-[#4C448099]/60 rounded-[10px] py-2 px-3"
                    >
                      <div className="w-4 h-4 bg-[#4ADE80] rounded-full flex items-center justify-center">
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
                      <span className="text-[14px] text-[#4C4480CC]/80 font-medium">
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
                          idx === 0
                            ? "bg-[#4ADE80]"
                            : idx === 1
                            ? "bg-[#22D3EE]"
                            : idx === 2
                            ? "bg-[#A855F7]"
                            : "bg-[#E11D48]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <hr className="border-[#4C448099]/60 border-1 mt-6" />

                {/* Buttons */}
                <div className="flex gap-4 pt-2">
                  <button className="flex-1 bg-[#AC1B9E] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#9b1487] transition-colors">
                    Learn More{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </button>
                  <button className="flex-1 border border-[#AC1B9E] text-[#4C4480CC]/80 py-3 rounded-xl text-sm font-bold hover:bg-[#B5179E10] transition-colors">
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
