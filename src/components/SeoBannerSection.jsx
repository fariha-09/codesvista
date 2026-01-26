import React from "react";
import { PiClipboardTextBold } from "react-icons/pi";
import {
  FaShoppingCart,
  FaSearch,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";
import grid from "../assets/grid.jpg";
import { IoCodeSharp } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function SeoBannerSection() {
  const stats = [
    {
      label: "300%",
      sub: "Traffic Increase",
      color: "bg-[#4ADE80]",
      icon: BsGraphUp,
    },
    {
      label: "Top 10",
      sub: "Keyword Rankings",
      color: "bg-[#FF6800]",
      icon: FaSearch,
    },
    {
      label: "500+",
      sub: "Content Pieces",
      color: "bg-[#FACC15]",
      icon: FaFileAlt,
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

        {/* THE CONTENT */}
        <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col lg:flex-row justify-between h-full py-2 lg:py-4 gap-12 lg:gap-0">
          
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2 space-y-2 lg:space-y-4 flex flex-col justify-center">
            <div className="inline-flex self-start text-white hover:text-black items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 hover:bg-[#F1F3F4] transition-all cursor-default ">
              <FaSearch size={20} className="text-[#0e9c9d]" />
              <span className="font-medium text-[14px] whitespace-nowrap">
                SEO & Content Writing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] min-h-[90px] md:min-h-auto">
              <Typewriter
                options={{
                  strings: [
                    "Professional SEO & Content Services",
                    "Rank Higher on Google Search",
                    "Drive More Organic Traffic",
                    "Engage Your  Global Audience"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </h1>

            <p className="text-[#F1F3F4] text-base md:text-[18px] font-normal max-w-xl leading-relaxed">
              Elevate your online presence with our expert SEO and content writing services designed to drive traffic, boost rankings, and engage your audience.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 pt-2 md:pt-0">
              {[
                { label: "Higher Rankings", icon: BsGraphUp, color: "#3B82F6" },
                { label: "More Traffic", icon: FaUsers, color: "#FF6800" },
                { label: "Quality Content", icon: FaRegPenToSquare, color: "#4ADE80" }
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
                      hover: { rotate: idx === 2 ? -35 : 0 },
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
                  SEO Performance
                </span>
              </div>

              <div className="space-y-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="group bg-white/10 p-4 rounded-2xl flex items-center gap-4 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-[#F1F3F4]"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-inner transition-all duration-300 ${stat.color} group-hover:bg-[#0FC8CA]`}>
                        <Icon className="text-[#4C4480] text-xl group-hover:text-white transition-colors" />
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
                IoCodeSharp,
                // Custom SVG 1
                () => (
                  <svg width="20" height="20" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22C6.51667 22 4.39583 21.6458 2.6375 20.9375C0.879167 20.2292 0 19.25 0 18C0 17.4667 0.166667 16.9875 0.5 16.5625C0.833333 16.1375 1.3 15.7583 1.9 15.425L3.525 16.875C3.125 17.0083 2.77083 17.1792 2.4625 17.3875C2.15417 17.5958 2 17.8 2 18C2 18.4333 2.675 18.875 4.025 19.325C5.375 19.775 7.03333 20 9 20C10.9667 20 12.625 19.775 13.975 19.325C15.325 18.875 16 18.4333 16 18C16 17.8 15.8458 17.5958 15.5375 17.3875C15.2292 17.1792 14.875 17.0083 14.475 16.875L16.1 15.425C16.7 15.7583 17.1667 16.1375 17.5 16.5625C17.8333 16.9875 18 17.4667 18 18C18 19.25 17.1208 20.2292 15.3625 20.9375C13.6042 21.6458 11.4833 22 9 22ZM9 18C8.63333 18 8.27917 17.9375 7.9375 17.8125C7.59583 17.6875 7.28333 17.5 7 17.25L0.7 11.675C0.483333 11.4917 0.3125 11.2667 0.1875 11C0.0625 10.7333 0 10.4583 0 10.175V8.175C0 7.89167 0.0541667 7.61667 0.1625 7.35C0.270833 7.08333 0.433333 6.85833 0.65 6.675L6.95 0.8C7.23333 0.533333 7.55 0.333333 7.9 0.2C8.25 0.0666667 8.61667 0 9 0C9.38333 0 9.75 0.0666667 10.1 0.2C10.45 0.333333 10.7667 0.533333 11.05 0.8L17.35 6.675C17.5667 6.85833 17.7292 7.08333 17.8375 7.35C17.9458 7.61667 18 7.89167 18 8.175V10.175C18 10.4583 17.9375 10.7333 17.8125 11C17.6875 11.2667 17.5167 11.4917 17.3 11.675L11 17.25C10.7167 17.5 10.4042 17.6875 10.0625 17.8125C9.72083 17.9375 9.36667 18 9 18ZM8.9 13.3C9.13333 13.3 9.35417 13.2625 9.5625 13.1875C9.77083 13.1125 9.96667 12.9917 10.15 12.825L15.7 7.9L9.7 2.25C9.58333 2.16667 9.46667 2.10417 9.35 2.0625C9.23333 2.02083 9.10833 2 8.975 2C8.84167 2 8.71667 2.02083 8.6 2.0625C8.48333 2.10417 8.38333 2.16667 8.3 2.25L2.2 8L7.65 12.825C7.83333 12.9917 8.02917 13.1125 8.2375 13.1875C8.44583 13.2625 8.66667 13.3 8.9 13.3ZM6 9.25C6.35 9.25 6.64583 9.12917 6.8875 8.8875C7.12917 8.64583 7.25 8.35 7.25 8C7.25 7.65 7.12917 7.35417 6.8875 7.1125C6.64583 6.87083 6.35 6.75 6 6.75C5.65 6.75 5.35417 6.87083 5.1125 7.1125C4.87083 7.35417 4.75 7.65 4.75 8C4.75 8.35 4.87083 8.64583 5.1125 8.8875C5.35417 9.12917 5.65 9.25 6 9.25ZM7.25 10.6C7.96667 10.95 8.72083 11.0625 9.5125 10.9375C10.3042 10.8125 11 10.4833 11.6 9.95C12.1667 9.46667 12.5375 8.85833 12.7125 8.125C12.8875 7.39167 12.8 6.7 12.45 6.05L7.25 10.6ZM9 6.25C9.35 6.25 9.64583 6.12917 9.8875 5.8875C10.1292 5.64583 10.25 5.35 10.25 5C10.25 4.65 10.1292 4.35417 9.8875 4.1125C9.64583 3.87083 9.35 3.75 9 3.75C8.65 3.75 8.35417 3.87083 8.1125 4.1125C7.87083 4.35417 7.75 4.65 7.75 5C7.75 5.35 7.87083 5.64583 8.1125 5.8875C8.35417 6.12917 8.65 6.25 9 6.25Z" fill="currentColor"/>
                  </svg>
                ),
                // Custom SVG 2
                () => (
                  <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.25 18L0 15.8L2.85 7.95C3.1 8.18333 3.37083 8.37917 3.6625 8.5375C3.95417 8.69583 4.26667 8.81667 4.6 8.9L1.85 16.45L0.25 18ZM10.75 18L9.15 16.45L6.4 8.9C6.73333 8.81667 7.04583 8.69583 7.3375 8.5375C7.62917 8.37917 7.9 8.18333 8.15 7.95L11 15.8L10.75 18ZM5.5 8C4.66667 8 3.95833 7.70833 3.375 7.125C2.79167 6.54167 2.5 5.83333 2.5 5C2.5 4.35 2.6875 3.77083 3.0625 3.2625C3.4375 2.75417 3.91667 2.4 4.5 2.2V0H6.5V2.2C7.08333 2.4 7.5625 2.75417 7.9375 3.2625C8.3125 3.77083 8.5 4.35 8.5 5C8.5 5.83333 8.20833 6.54167 7.625 7.125C7.04167 7.70833 6.33333 8 5.5 8ZM5.5 6C5.78333 6 6.02083 5.90417 6.2125 5.7125C6.40417 5.52083 6.5 5.28333 6.5 5C6.5 4.71667 6.40417 4.47917 6.2125 4.2875C6.02083 4.09583 5.78333 4 5.5 4C5.21667 4 4.97917 4.09583 4.7875 4.2875C4.59583 4.47917 4.5 4.71667 4.5 5C4.5 5.28333 4.59583 5.52083 4.7875 5.7125C4.97917 5.90417 5.21667 6 5.5 6Z" fill="currentColor" />
                  </svg>
                ),
              ].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md border border-white/40 animate-bounce rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-[#0FC8CA] transition-all cursor-pointer active:scale-90"
                >
                  <Icon size={idx === 0 ? 20 : 18} />
                </div>
              ))}
            </div>
            </div>

            {/* Vertical Tool Icons */}
           
          </div>
        </div>
      </div>
    </section>
  );
}