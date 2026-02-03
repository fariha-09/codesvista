import React, { useEffect } from "react";
import { PiBuildingApartmentFill, PiClipboardTextBold } from "react-icons/pi";
import {
  FaShoppingCart,
  FaTags,
  FaPencilRuler,
  FaLightbulb,
  FaUsers,
    FaInstagram,
    FaTiktok,
    FaYoutube,
    FaFacebook,
} from "react-icons/fa";
import grid from "../assets/grid.jpg";
import { IoCodeSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn } from "react-icons/fa6";
const marqueeItems = [
    "Free Consultation",
    "Free Demo",
    "Free Site Audit",
    "Free Consultation",
    "Free Demo",
    "Free Site Audit",
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/p/Codes-Vista-61554340860410/",
      color: "hover:bg-[#1877F2]",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/codes_vista/?hl=en",
      color: "hover:bg-[#E4405F]",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/codestechvista/?originalSubdomain=pk",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@codes_techvista5052",
      color: "hover:bg-[#000000]",
    },
    { icon: FaYoutube, href: "#", color: "hover:bg-[#FF0000]" },
  ];

export default function ServicesBannerSection() {
  const stats = [
    {
      label: "8",
      sub: "Core Service",
      color: "bg-[#4ADE80]",
      // Note: Storing as a component function (capitalized)
      Icon: () => (
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 19.5V11.5H8V19.5H0ZM2 17.5H6V13.5H2V17.5ZM3.5 9L9 0L14.5 9H3.5ZM7.05 7H10.95L9 3.85L7.05 7ZM19.575 21.95L16.925 19.3C16.575 19.5333 16.1958 19.7083 15.7875 19.825C15.3792 19.9417 14.95 20 14.5 20C13.25 20 12.1875 19.5625 11.3125 18.6875C10.4375 17.8125 10 16.75 10 15.5C10 14.25 10.4375 13.1875 11.3125 12.3125C12.1875 11.4375 13.25 11 14.5 11C15.75 11 16.8125 11.4375 17.6875 12.3125C18.5625 13.1875 19 14.25 19 15.5C19 15.9333 18.9417 16.3542 18.825 16.7625C18.7083 17.1708 18.5417 17.55 18.325 17.9L20.975 20.55L19.575 21.95ZM14.5 18C15.2 18 15.7917 17.7583 16.275 17.275C16.7583 16.7917 17 16.2 17 15.5C17 14.8 16.7583 14.2083 16.275 13.725C15.7917 13.2417 15.2 13 14.5 13C13.8 13 13.2083 13.2417 12.725 13.725C12.2417 14.2083 12 14.8 12 15.5C12 16.2 12.2417 16.7917 12.725 17.275C13.2083 17.7583 13.8 18 14.5 18Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: "24/7",
      sub: "Support",
      color: "bg-[#FF6800]",
      Icon: () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20L16 16H6C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V13H15C15.55 13 16.0208 12.8042 16.4125 12.4125C16.8042 12.0208 17 11.55 17 11V4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V20ZM2 10.175L3.175 9H13V2H2V10.175ZM0 15V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H13C13.55 0 14.0208 0.195833 14.4125 0.5875C14.8042 0.979167 15 1.45 15 2V9C15 9.55 14.8042 10.0208 14.4125 10.4125C14.0208 10.8042 13.55 11 13 11H4L0 15Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: "100%",
      sub: "Satisfaction",
      color: "bg-[#FACC15]",
      Icon: () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15.5C11.1333 15.5 12.1625 15.1792 13.0875 14.5375C14.0125 13.8958 14.6833 13.05 15.1 12H4.9C5.31667 13.05 5.9875 13.8958 6.9125 14.5375C7.8375 15.1792 8.86667 15.5 10 15.5ZM5.8 9L6.9 7.95L7.95 9L9 7.95L6.9 5.8L4.75 7.95L5.8 9ZM12.05 9L13.1 7.95L14.2 9L15.25 7.95L13.1 5.8L11 7.95L12.05 9ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="currentColor"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-[#0fc8ca] min-h-screen lg:min-h-[88vh] w-full flex flex-col font-sans overflow-hidden">
          {/* TOP BAR */}
          <div className="w-full bg-white/10 backdrop-blur-md border-b border-white/20 py-3 px-6 md:px-16 relative z-30 flex items-center justify-between overflow-hidden">
            {/* MARQUEE SECTION - Takes full width on mobile */}
            <div className="flex-1 overflow-hidden md:mr-8">
              <motion.div
                className="flex whitespace-nowrap gap-35"
                animate={{ x: [0, -2000] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              >
                {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
                  (text, idx) => (
                    <div key={idx} className="flex items-center gap-6">
                      <span className="text-white text-sm font-bold uppercase tracking-widest">
                        {text}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    </div>
                  ),
                )}
              </motion.div>
            </div>
    
            <div className="hidden md:flex items-center gap-3 md:gap-4 relative z-40 pl-8 border-l border-white/20">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white transition-all duration-300 bg-white/5 ${social.color} hover:shadow-lg`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          {/* INNER CARD */}
          <div className="relative w-full max-w-[1500px] h-full lg:h-[88vh] flex-1 overflow-hidden lg:shadow-2xl mx-auto pt-3">
            {" "}
            <div className="absolute inset-0 z-0">
              <img
                src={grid}
                alt="grid overlay"
                className="w-full h-full object-cover opacity-[5%] mix-blend-overlay"
              />
            </div>
            {/* CONTENT CONTAINER */}
            <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col lg:flex-row justify-between h-full py-2 lg:py-4 gap-10 lg:gap-0">
              {/* LEFT COLUMN */}
              <div className="w-full lg:w-1/2 space-y-2 lg:space-y-4 flex flex-col justify-center">
                <div className="inline-flex self-start items-center gap-2 text-white hover:text-black bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 hover:bg-[#F1F3F4] transition-all cursor-default">
              <PiBuildingApartmentFill size={20} className="text-white" />
              <span className="font-medium text-[14px]">Our Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] min-h-[80px] md:min-h-auto">
              <Typewriter
                options={{
                  strings: [
                    "Complete Technology  Solutions",
                    "Creative Design Agency",
                    "Digital Transformation"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                }}
              />
            </h1>

            <p className="text-[#F1F3F4] text-base md:text-[18px] font-normal max-w-xl leading-relaxed">
              From concept to deployment, we provide end-to-end technology services that drive business growth and digital transformation.
            </p>

            {/* Feature Tags */}
            {/* <div className="flex flex-wrap gap-3 pt-2 md:pt-0">
              {[
                { label: "BRAND IDENTITY", icon: FaTags, color: "#3B82F6" },
                { label: "CREATIVE DESIGN", icon: FaLightbulb, color: "#4ADE80" },
                { label: "PROFESSIONAL QUALITY", icon: FaPencilRuler, color: "#FF6800" },
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
                    className="absolute inset-0 bg-gray-200 z-0"
                  />
                  <motion.div variants={{ initial: { rotate: -35 }, hover: { rotate: 0 } }} className="relative z-10">
                    <tag.icon size={15} style={{ color: tag.color }} />
                  </motion.div>
                  <span className="relative z-10">{tag.label}</span>
                </motion.span>
              ))}
            </div> */}

           {/* CTA Buttons */}
                      <div className="flex gap-2 md:gap-4 pt-4 justify-center md:justify-normal">
                        <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#00B8B8] text-[14px] text-[#2B2C34] px-2 md:px-8 py-3.5 rounded-xl font-bold shadow-lg transition-transform active:scale-95 sm:w-auto">
                          <PiClipboardTextBold size={20} /> Get Free Quote
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#4C4480] hover:text-white text-[14px] text-[#4C4480] px-2 md:px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all duration-300 active:scale-95 sm:w-auto">
                          <FaShoppingCart /> Explore Services
                        </button>
                      </div>
                    </div>

          {/* RIGHT COLUMN: CARD & BOUNCING ICONS */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-6 relative">
            
            {/* Stats Card */}
            <div className="bg-white/20 relative z-10 backdrop-blur-xl border border-white/30 p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-2xl w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                </div>
                <span className="text-white text-xs font-semibold opacity-90 uppercase tracking-wider">
                  Design Portfolio
                </span>
              </div>

              <div className="md:space-y-4 space-y-2 ">
                {stats.map((stat, i) => (
                  <div key={i} className="group bg-white/10 p-4 rounded-2xl flex items-center gap-4 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-[#F1F3F4]">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-inner transition-all duration-300 ${stat.color} group-hover:bg-[#0FC8CA] text-[#4C4480]`}>
                      <stat.Icon />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl md:text-2xl leading-none group-hover:text-[#0FC8CA] transition-colors">{stat.label}</h4>
                      <p className="text-white/80 text-xs md:text-sm group-hover:text-[#0FC8CA] transition-colors">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bouncing Side Icons - Positioned absolute relative to the Right Column container */}
            {/* <div className="absolute -top-10 right-24 md:top-10 md:-right-6 flex flex-row lg:flex-col gap-3 z-10">
              {[IoCodeSharp, FaLightbulb, FaPencilRuler].map((SideIcon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 animate-bounce backdrop-blur-md border border-white/40 rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-[#0FC8CA] transition-all cursor-pointer active:scale-90"
                >
                  <SideIcon size={20} />
                </div>
              ))}
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}