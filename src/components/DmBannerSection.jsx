import React from "react";
import { PiBuildingApartmentFill, PiClipboardTextBold } from "react-icons/pi";
import { FaShoppingCart, FaSearch, FaUsers, FaRocket } from "react-icons/fa";
import { LuTarget } from "react-icons/lu";
import { FaShareNodes } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import grid from "../assets/grid.jpg";

export default function DmBannerSection() {
  const stats = [
    {
      label: "250%+",
      sub: "Traffic Increase",
      color: "bg-[#3B82F6]",
      icon: BsGraphUp,
    },
    {
      label: "30+",
      sub: "Happy Clients",
      color: "bg-[#4ADE80]",
      icon: FaUsers,
    },
    {
      label: "5X",
      sub: "ROI Growth",
      color: "bg-[#FF6800]",
      icon: FaRocket,
    },
  ];

  return (
    <section className="relative bg-[#0fc8ca] min-h-screen lg:min-h-[88vh] w-full flex justify-center lg:px-10 font-sans overflow-hidden">
      {/* INNER CARD */}
      <div className="relative w-full  h-full lg:h-[88vh] overflow-hidden lg:shadow-2xl">
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
          <div className="w-full lg:w-1/2 space-y-2 lg:space-y-4 flex flex-col justify-center">
            <div className="inline-flex self-start items-center gap-2 text-white hover:text-black bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 hover:bg-[#F1F3F4] transition-all cursor-default">
              <PiBuildingApartmentFill size={20} className="text-[#0e9c9d]" />
              <span className="font-medium text-[14px]">Digital Marketing</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] min-h-[120px] md:min-h-auto">
              <Typewriter
                options={{
                  strings: [
                    "Strategic Digital <br/> Marketing Solutions",
                    "Data-Driven <br/> Growth Strategies",
                    "Maximize Your <br/> Online Presence",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h1>

            <p className="text-[#F1F3F4] text-base md:text-[18px] font-normal max-w-xl leading-relaxed">
              Strategically promoting your brand across digital channels to
              increase visibility, engage your audience, and drive conversions.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 pt-2 md:pt-0">
              {[
                { label: "SEO OPTIMIZATION", icon: FaSearch, color: "#3B82F6" },
                { label: "SOCIAL MEDIA", icon: FaShareNodes, color: "#FF6800" },
                { label: "PAID ADVERTISING", icon: LuTarget, color: "#4ADE80" },
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
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gray-200 z-0 origin-center"
                  />
                  <motion.div
                    variants={{
                      initial: { rotate: 0 },
                      hover: { rotate: -35 },
                    }}
                    className="relative z-10"
                  >
                    <tag.icon size={15} style={{ color: tag.color }} />
                  </motion.div>
                  <span className="relative z-10">{tag.label}</span>
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-2 md:gap-4 pt-4">
                        <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#00B8B8] text-[14px] text-[#2B2C34] px-2 md:px-8 py-3.5 rounded-xl font-bold shadow-lg transition-transform active:scale-95 sm:w-auto">
                          <PiClipboardTextBold size={20} /> Get Free Quote
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#4C4480] hover:text-white text-[14px] text-[#4C4480] px-2 md:px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all duration-300 active:scale-95 sm:w-auto">
                          <FaShoppingCart /> Explore Services
                        </button>
                      </div>
                    </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row lg:flex-row items-center justify-center lg:justify-end gap-6">
            {/* Stats Card */}
            <div className="bg-white/20 relative mt-6 md:mt-0 backdrop-blur-xl border border-white/30 p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-2xl w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-white text-xs font-semibold opacity-90 uppercase tracking-wider">
                  Marketing Performance
                </span>
              </div>

              <div className="md:space-y-4 space-y-2">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="group bg-white/10 p-4 rounded-2xl flex items-center gap-4 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-[#F1F3F4]"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-inner transition-all duration-300 ${stat.color} group-hover:bg-[#0FC8CA]`}
                      >
                        <Icon className="text-white text-xl transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl md:text-2xl leading-none group-hover:text-[#0FC8CA] transition-colors">
                          {stat.label}
                        </h4>
                        <p className="text-white/70 text-xs md:text-sm group-hover:text-[#0FC8CA] transition-colors">
                          {stat.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
               <div className="absolute -top-10 right-24 md:top-6 md:-right-6 flex flex-row lg:flex-col gap-3">
              {[
                {
                  icon: () => (
                    <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H2V14ZM8.95 12.55L5.4 9L6.85 7.55L8.95 9.65L13.15 5.45L14.6 6.9L8.95 12.55Z" />
                  ),
                },
                {
                  icon: () => (
                    <path d="M7 16H12.5C12.7833 16 13.0458 15.9292 13.2875 15.7875C13.5292 15.6458 13.7 15.45 13.8 15.2L15.9 10.3C15.9333 10.2167 15.9583 10.1333 15.975 10.05C15.9917 9.96667 16 9.88333 16 9.8V9C16 8.71667 15.9042 8.47917 15.7125 8.2875C15.5208 8.09583 15.2833 8 15 8H10.4L11 4.6C11.0333 4.43333 11.025 4.275 10.975 4.125C10.925 3.975 10.8417 3.84167 10.725 3.725L10 3L5.4 8C5.26667 8.13333 5.16667 8.28333 5.1 8.45C5.03333 8.61667 5 8.8 5 9V14C5 14.55 5.19583 15.0208 5.5875 15.4125C5.97917 15.8042 6.45 16 7 16ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" />
                  ),
                },
                {
                  icon: () => (
                    <path d="M0.25 18L0 15.8L2.85 7.95C3.1 8.18333 3.37083 8.37917 3.6625 8.5375C3.95417 8.69583 4.26667 8.81667 4.6 8.9L1.85 16.45L0.25 18ZM10.75 18L9.15 16.45L6.4 8.9C6.73333 8.81667 7.04583 8.69583 7.3375 8.5375C7.62917 8.37917 7.9 8.18333 8.15 7.95L11 15.8L10.75 18ZM5.5 8C4.66667 8 3.95833 7.70833 3.375 7.125C2.79167 6.54167 2.5 5.83333 2.5 5C2.5 4.35 2.6875 3.77083 3.0625 3.2625C3.4375 2.75417 3.91667 2.4 4.5 2.2V0H6.5V2.2C7.08333 2.4 7.5625 2.75417 7.9375 3.2625C8.3125 3.77083 8.5 4.35 8.5 5C8.5 5.83333 8.20833 6.54167 7.625 7.125C7.04167 7.70833 6.33333 8 5.5 8ZM5.5 6C5.78333 6 6.02083 5.90417 6.2125 5.7125C6.40417 5.52083 6.5 5.28333 6.5 5C6.5 4.71667 6.40417 4.47917 6.2125 4.2875C6.02083 4.09583 5.78333 4 5.5 4C5.21667 4 4.97917 4.09583 4.7875 4.2875C4.59583 4.47917 4.5 4.71667 4.5 5C4.5 5.28333 4.59583 5.52083 4.7875 5.7125C4.97917 5.90417 5.21667 6 5.5 6Z" />
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md animate-bounce border border-white/40 rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-[#0FC8CA] transition-all cursor-pointer active:scale-90"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <item.icon />
                  </svg>
                </div>
              ))}
            </div>
            </div>

            {/* Social & Tool Icons */}
           
          </div>
        </div>
      </div>
    </section>
  );
}
