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
    <section className="relative bg-[#0fc8ca] min-h-screen lg:min-h-[88vh] w-full flex justify-center lg:px-10 font-sans overflow-hidden">
      {/* INNER CARD */}
      <div className="relative w-full h-full lg:h-[88vh] overflow-hidden lg:shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src={grid}
            alt="grid overlay"
            className="w-full h-full object-cover opacity-[5%] mix-blend-overlay"
          />
        </div>

        {/* CONTENT CONTAINER */}
        <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col lg:flex-row justify-between h-full py-2 lg:py-4 gap-12 lg:gap-0">
          
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2 space-y-2 flex flex-col justify-center">
            <div className="inline-flex self-start items-center gap-2 text-white hover:text-black bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 hover:bg-[#F1F3F4] transition-all">
              <PiBuildingApartmentFill size={20} className="text-[#0e9c9d]" />
              <span className="font-medium text-[14px]">About Our Company</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] min-h-[60px] md:min-h-auto">
              <Typewriter
                options={{
                  strings: ["Empowering Businesses", "Innovative Solutions", "About Codes Vista"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay:85,
                }}
              />
            </h1>

            <p className="text-[#F1F3F4] text-base md:text-[18px] font-normal max-w-xl leading-relaxed ">
              We are passionate about empowering businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 pt-2 md:pt-0">
              {[
                { label: "Expert Team", icon: FaTags, color: "#3B82F6" },
                { label: "Innovation First", icon: FaPencilRuler, color: "#FF6800" },
                { label: "Quality Guaranteed", icon: FaLightbulb, color: "#4ADE80" }
              ].map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial="initial"
                  whileHover="hover"
                  className="relative flex items-center gap-2 bg-white px-4 py-2.5 lg:py-3 rounded-lg text-[10px] md:text-[12px] font-bold text-[#4C4480] cursor-pointer overflow-hidden shadow-sm"
                >
                  <motion.div
                    variants={{
                      initial: { scaleX: 0, opacity: 0 },
                      hover: { scaleX: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gray-200 z-0 origin-center"
                  />
                  <motion.div variants={{ initial: { rotate: -35 }, hover: { rotate: 0 } }} className="relative z-10">
                    <tag.icon size={14} style={{ color: tag.color }} />
                  </motion.div>
                  <span className="relative z-10">{tag.label}</span>
                </motion.span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 md:gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#00B8B8] text-[14px] text-[#2B2C34] px-2 md:px-8 py-35 rounded-xl font-bold shadow-lg transition-transform active:scale-95  sm:w-auto">
                <PiClipboardTextBold size={20} /> Get Free Quote
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#4C4480] hover:text-white text-[14px] text-[#4C4480] px-2 md:px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all duration-300 active:scale-95 sm:w-auto">
                <FaShoppingCart /> Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-6">
            
            {/* Stats Card */}
            <div className="bg-white/20 relative mt-6 md:mt-0  backdrop-blur-xl border border-white/30 p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-2xl w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-white text-xs font-semibold opacity-90 uppercase tracking-widest">Company Bio</span>
              </div>

              <div className="md:space-y-4 space-y-2">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="group bg-white/10 p-4 rounded-2xl flex items-center gap-4 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-[#F1F3F4]"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-inner transition-all duration-300 ${stat.color} group-hover:bg-[#0FC8CA]`}>
                        <Icon className="text-[#4C4480] text-xl transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl md:text-2xl leading-none transition-colors group-hover:text-[#0FC8CA]">
                          {stat.label}
                        </h4>
                        <p className="text-white/70 text-xs md:text-sm group-hover:text-[#0FC8CA]/80">
                          {stat.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
               <div className="absolute -top-10 right-24 md:top-6 md:-right-6 flex flex-row lg:flex-col gap-3">
              {[FaHeadset, BsClockHistory, BsCheckCircleFill].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md animate-bounce border border-white/40 rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-[#0FC8CA] transition-all cursor-pointer active:scale-90"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
            </div>

            {/* Vertical Support Icons */}
           
          </div>

        </div>
      </div>
    </section>
  );
}