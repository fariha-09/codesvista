import React from "react";
import grids from "../assets/grids.png";
import { FaUsers, FaStar, FaHandshake } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function OurMission() {
  const missionData = [
    {
      title: "Integrity",
      desc: "We maintain the highest ethical standards in all our business relationships and deliver on our promises.",
      Icon: FaHandshake,
    },
    {
      title: "Innovation",
      desc: "We constantly explore new technologies and creative solutions to solve complex business challenges.",
      Icon: FaLightbulb,
    },
    {
      title: "Collaboration",
      desc: "We believe in the power of teamwork and foster strong partnerships with our clients and team members.",
      Icon: FaUsers,
    },
    {
      title: "Excellence",
      desc: "We strive for excellence in every project, ensuring the highest quality standards and client satisfaction.",
      Icon: FaStar,
    },
  ];

  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      <div className="relative w-full overflow-hidden bg-white/[98%] px-4 pt-16  md:p-10 lg:p-20 ">
        {/* 2. Header Content */}
        <div className="max-w-4xl mx-auto text-center space-x-2 md:space-y-4 relative z-10 mb-6 md:mb-16">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
            style={{
              textShadow: `
                0 0 38px rgba(0, 206, 209, 0.45),
                0 0 20px rgba(0, 206, 209, 0.25)
              `,
            }}
          >
            Our Mission
          </motion.h2>

          <p className="text-gray-600 text-base md:text-lg lg:text-[16px] max-w-3xl mx-auto leading-relaxed px-4">
            Driving digital transformation through innovation, expertise, and
            unwavering commitment to excellence
          </p>
        </div>

        {/* 3. Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 mb-10">
          {missionData.map((item, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileHover="hover"
              whileTap="hover" // Added whileTap to ensure the same hover effect triggers on mobile touch
              className="relative p-2 md:p-10 rounded-[20px] shadow-sm flex flex-col items-center text-center border border-gray-50 overflow-hidden cursor-default bg-[#F1F3F480]/50"
            >
              {/* Middle to Sides Background Layer */}
              <motion.div
                variants={{
                  initial: { scaleX: 0, opacity: 0 },
                  hover: { scaleX: 1, opacity: 1 }
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#0FC8CA]/10 z-0 origin-center "
              />

              {/* Content Wrapped in relative z-10 so it stays above the hover bg */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 bg-[#437EF7] rounded-[12px] flex items-center justify-center md:mb-6 mb-2 text-white shadow-xl">
                  <item.Icon size={28} />
                </div>
                <h3 className="text-[#4C4480] font-bold text-[22px] md:text-[24px] md:mb-3 mb-1">
                  {item.title}
                </h3>
                <p className="text-[#4C448080]/70 text-[14px] md:text-[17px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}