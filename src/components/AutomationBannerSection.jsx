import React from "react";
import { PiClipboardTextBold } from "react-icons/pi";
import {
  FaRobot,
  FaBrain,
  FaShieldAlt,
  FaChartLine,
  FaClock,
} from "react-icons/fa";
import grid from "../assets/grid.jpg";
import { IoHardwareChipSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { LuCpu } from "react-icons/lu";
import { FaMicrochip, FaDatabase } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

export default function AutomationBannerSection() {
  const stats = [
    {
      label: "40%",
      sub: "Cost Reduction",
      color: "bg-[#4ADE80]",
      icon: FaChartLine,
    },
    {
      label: "15+",
      sub: "AI Models Trained",
      color: "bg-[#FF6800]",
      icon: FaBrain,
    },
    {
      label: "24/7",
      sub: "Smart Automation",
      color: "bg-[#FACC15]",
      icon: FaClock,
    },
  ];

  return (
    <section className="relative bg-[#0fc8ca] min-h-screen lg:min-h-[88vh] w-full flex justify-center lg:px-10 font-sans overflow-hidden">
      <div className="relative w-full max-w-[1500px] h-full lg:h-[88vh] overflow-hidden lg:shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src={grid}
            alt="grid overlay"
            className="w-full h-full object-cover opacity-[5%] mix-blend-overlay"
          />
        </div>

        <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col lg:flex-row justify-between h-full py-12 lg:py-4 gap-10 lg:gap-0">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
            <div className="inline-flex self-start text-white hover:text-black items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 hover:bg-[#F1F3F4] transition-all cursor-default w-fit">
              <LuCpu size={20} className="text-[#0e9c9d]" />
              <span className="font-medium text-[14px] whitespace-nowrap">
                Next-Gen Automation & AI
              </span>
            </div>

            {/* min-h adjusted for mobile text wrapping */}
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight min-h-[100px] md:min-h-[120px]">
              <Typewriter
                options={{
                  strings: [
                    "Intelligent Automation Systems",
                    "AI & Machine Learning",
                    "Predictive Data Analytics",
                    "Smart Robotic Solutions",
                    "Cyber Security Engineering",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </h1>
            
            <p className="text-[#F1F3F4] text-base md:text-[18px] font-normal max-w-lg leading-relaxed">
              Designing intelligent automation and AI-driven systems that reduce manual work, save time, and turn your data into actionable business growth.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { label: "Business Automation", icon: FaRobot, color: "#3B82F6" }, // Replaced missing MdSettingsSuggest with FaRobot for safety
                { label: "Deep Learning", icon: FaBrain, color: "#FF6800" },
                { label: "Data Science", icon: FaDatabase, color: "#4ADE80" },
              ].map((tag, index) => (
                <motion.span
                  key={index}
                  initial="initial"
                  whileHover="hover"
                  className="relative flex items-center gap-2 bg-white px-4 py-3 rounded-lg text-[10px] md:text-[12px] font-bold text-[#4C4480] cursor-pointer overflow-hidden shadow-sm"
                >
                  <motion.div
                    variants={{
                      initial: { scaleX: 0, opacity: 0 },
                      hover: { scaleX: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gray-200 z-0 origin-center"
                  />
                  <tag.icon size={15} className="relative z-10" style={{ color: tag.color }} />
                  <span className="relative z-10">{tag.label}</span>
                </motion.span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#00B8B8] text-[14px] text-[#2B2C34] border border-white/20 px-8 py-3.5 rounded-xl font-bold shadow-lg transition-transform active:scale-95 w-full sm:w-auto">
                <PiClipboardTextBold size={20} /> Request AI Audit
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#4C4480] hover:text-white text-[14px] text-[#4C4480] px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all duration-300 active:scale-95 w-full sm:w-auto">
                <FaRobot /> View Solutions
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-6">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-2xl w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-white text-xs font-semibold opacity-90 uppercase tracking-wider">
                  System Intelligence
                </span>
              </div>

              <div className="space-y-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="group bg-white/10 p-4 rounded-2xl flex items-center gap-4 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-inner transition-all duration-300 ${stat.color} group-hover:bg-[#0FC8CA]`}>
                        <Icon className="text-[#4C4480] text-xl group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl md:text-2xl leading-none group-hover:text-[#0FC8CA]">
                          {stat.label}
                        </h4>
                        <p className="text-white/70 text-xs md:text-sm group-hover:text-[#0FC8CA] ">
                          {stat.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Side Icons - Hidden on small mobile, visible on tablet and desktop */}
            <div className="flex flex-row lg:flex-col gap-3">
              {[IoHardwareChipSharp, FaMicrochip, FaShieldAlt].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md border border-white/40 rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-[#0FC8CA] transition-all cursor-pointer active:scale-90"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}