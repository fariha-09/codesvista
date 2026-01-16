import React from "react";
import { PiBuildingApartmentFill, PiClipboardTextBold } from "react-icons/pi";
import {
  FaShoppingCart,
  FaTags,
  FaPencilRuler,
  FaLightbulb,
  FaUsers,
  FaGlobeAsia,
  FaHeadset,
} from "react-icons/fa";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import grid from "../assets/grid.jpg";
import { BsClockHistory, BsCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function MissionBannerSection() {
  const stats = [
    {
      label: "2009",
      sub: "Founded",
      color: "bg-[#3B82F6]",
      icon: FaMagnifyingGlassChart,
    },
    { label: "25+", sub: "Team Members", color: "bg-[#4ADE80]", icon: FaUsers },
    {
      label: "15+",
      sub: "Countries Served",
      color: "bg-[#FACC15]",
      icon: FaGlobeAsia,
    },
  ];

  return (
    <section className="relative bg-[#0fc8ca] min-h-[88vh] w-full flex justify-center lg:px-10 font-sans">
      {/* 2. INNER CARD - Changed min-h-screen to h-[85vh] or h-full to prevent bottom overflow */}
      <div className="relative w-full max-w-[1500px] h-full lg:h-[88vh] overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src={grid}
            alt="grid overlay"
            className="w-full h-full object-cover opacity-[5%] mix-blend-overlay"
          />
        </div>

        {/* 3. THE CONTENT */}
        <div className="container mx-auto px-10 relative z-10 flex flex-col lg:flex-row justify-between h-full lg:py-4">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2 space-y-3 pt-10 ">
            <div className="inline-flex items-center gap-2 text-white hover:text-black bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 hover:bg-[#F1F3F4] ">
              <PiBuildingApartmentFill size={20} className="text-[#0e9c9d]" />
              <span className=" font-medium text-[14px] hove">
                
                About Our Company
              </span>
            </div>

            {/* Heading Fix: Adjusted leading and size */}
            <h1 className="text-5xl md:text-6xl font-serif pt-8 font-bold text-white leading-[1.1]">
             <Typewriter
                options={{
                  strings: ["Empowering Businesses", "Innovative Solutions", "About Codes Vista"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </h1>

            <p className="text-[#F1F3F4] text-[18px] pt-8 font-normal max-w-xl leading-relaxed">
              We are passionate about empowering businesses with innovative
              technology solutions that drive growth, efficiency, and success in
              <br />
              the digital age.
            </p>

            <div className="flex flex-wrap gap-8 pt-6">
              {/* Tags ... */}
              <motion.span
                initial="initial"
                whileHover="hover"
                className="relative flex items-center gap-2 bg-white px-4 py-3 rounded-lg text-[12px] font-bold text-[#4C4480] cursor-pointer overflow-hidden shadow-sm"
              >
                <motion.div
                  variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gray-200 z-0 origin-center"
                />

                <motion.div
                  variants={{
                    initial: { rotate: -35 },
                    hover: { rotate: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <FaTags size={15} className="text-[#3B82F6]" />
                </motion.div>

                <span className="relative z-10"> Expert Team</span>
              </motion.span>
              <motion.span
                initial="initial"
                whileHover="hover"
                className="relative flex items-center gap-2 bg-white px-4 py-3 rounded-lg text-[12px] font-bold text-[#4C4480] cursor-pointer overflow-hidden shadow-sm"
              >
                <motion.div
                  variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gray-200 z-0 origin-center"
                />

                <motion.div
                  variants={{
                    initial: { rotate: -35 },
                    hover: { rotate: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <FaPencilRuler size={15} className="text-[#FF6800]" />
                </motion.div>

                <span className="relative z-10"> Innovation First</span>
              </motion.span>

              <motion.span
                initial="initial"
                whileHover="hover"
                className="relative flex items-center gap-2 bg-white px-4 py-3 rounded-lg text-[12px] font-bold text-[#4C4480] cursor-pointer overflow-hidden shadow-sm"
              >
                <motion.div
                  variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gray-200 z-0 origin-center"
                />

                <motion.div
                  variants={{
                    initial: { rotate: -35 },
                    hover: { rotate: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <FaLightbulb size={15} className="text-[#4ADE80]" />{" "}
                </motion.div>

                <span className="relative z-10"> Quality Guaranteed</span>
              </motion.span>
            </div>

            <div className="flex flex-wrap gap-6">
              {/* Buttons ... */}
              <button className="flex items-center gap-2 bg-[#0FC8CA] hover:bg-[#00B8B8] text-[14px] text-[#2B2C34] px-8 py-3 rounded-xl font-bold shadow-lg transition-transform active:scale-95">
                <PiClipboardTextBold size={20} /> Get Free Quote
              </button>
              <button
                              className="flex items-center gap-2 bg-white hover:bg-[#4C4480] hover:text-white  text-[14px] text-[#4C4480] px-8 py-3 rounded-xl font-bold shadow-lg transition-all  duration-300 ease-in-out
               active:scale-95"
                            >
                              <FaShoppingCart /> Explore Services
                            </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Removed pt-18, replaced with auto-centering */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end gap-5 mt-18">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-[40px] shadow-2xl w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-white text-sm font-semibold opacity-90">
                  Contact Info
                </span>
              </div>

              <div className="space-y-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="group bg-white/10 p-4 rounded-2xl flex items-center gap-4
                   border border-white/10 backdrop-blur-sm
                   transition-all duration-300 hover:bg-[#F1F3F4]"
                    >
                       <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-inner
                      transition-all duration-300
                      ${stat.color} group-hover:bg-green-600`}
                      >
                        <Icon className="text-[#4C4480] text-xl transition-colors duration-300" />
                      </div>
                      <div>
                        <h4
                          className="text-white font-bold text-2xl leading-none
                       transition-colors duration-300 ease-in-out
                       group-hover:text-green-600"
                        >
                          {stat.label}
                        </h4>
                        <p
                          className="text-white/70 text-sm transition-colors transit duration-300
                       group-hover:text-green-600/80"
                        >
                          {stat.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[FaHeadset, BsClockHistory, BsCheckCircleFill].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/40 rounded-lg flex items-center justify-center text-white shadow-lg hover:bg-[#0FC8CA] transition-all cursor-pointer"
                  >
                    <Icon size={18} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
