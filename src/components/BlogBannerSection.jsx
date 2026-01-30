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
  FaLinkedinIn,
} from "react-icons/fa";
import grid from "../assets/grid.jpg";
import {
  MdAlternateEmail,
  MdOutlineLocalPhone,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function BlogBannerSection() {
  const stats = [
    {
      label: "Email",
      sub: "info@codesvista.com",
      color: "bg-[#4ADE80]",
      icon: MdAlternateEmail,
    },
    {
      label: "Phone",
      sub: "+92-34-65987369",
      color: "bg-[#FF6800]",
      icon: MdOutlineLocalPhone,
    },
    {
      label: "8-14",
      sub: "Days Delivery",
      color: "bg-[#FACC15]",
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M0 20V18H2V15C2 13.9833 2.2375 13.0292 2.7125 12.1375C3.1875 11.2458 3.85 10.5333 4.7 10C3.85 9.46667 3.1875 8.75417 2.7125 7.8625C2.2375 6.97083 2 6.01667 2 5V2H0V0H16V2H14V5C14 5.8 13.85 6.56667 13.55 7.3C13.25 8.03333 12.825 8.675 12.275 9.225C11.6417 9.39167 11.05 9.63333 10.5 9.95C9.95 10.2667 9.45 10.6583 9 11.125C8.83333 11.0917 8.67083 11.0625 8.5125 11.0375C8.35417 11.0125 8.18333 11 8 11C6.9 11 5.95833 11.3917 5.175 12.175C4.39167 12.9583 4 13.9 4 15V18H7.3C7.41667 18.3667 7.55417 18.7167 7.7125 19.05C7.87083 19.3833 8.05833 19.7 8.275 20H0ZM8 9C9.1 9 10.0417 8.60833 10.825 7.825C11.6083 7.04167 12 6.1 12 5V2H4V5C4 6.1 4.39167 7.04167 5.175 7.825C5.95833 8.60833 6.9 9 8 9ZM14 21C12.6167 21 11.4375 20.5125 10.4625 19.5375C9.4875 18.5625 9 17.3833 9 16C9 14.6167 9.4875 13.4375 10.4625 12.4625C11.4375 11.4875 12.6167 11 14 11C15.3833 11 16.5625 11.4875 17.5375 12.4625C18.5125 13.4375 19 14.6167 19 16C19 17.3833 18.5125 18.5625 17.5375 19.5375C16.5625 20.5125 15.3833 21 14 21ZM13.3 18.25L16.85 14.7L16.1 13.95L13.3 16.75L11.9 15.35L11.15 16.1L13.3 18.25Z"
            fill="#4C4480"
          />
        </svg>
      ),
    },
  ];

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
              <PiBuildingApartmentFill size={20} className="text-[#0e9c9d]" />
              <span className="font-medium text-[14px] whitespace-nowrap">
                Our Blog
              </span>
            </div>

            {/* Responsive Heading with min-height to prevent layout shift */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight min-h-[100px] sm:min-h-[140px]">
              <Typewriter
                options={{
                  strings: [
                    "Latest Insights & Updates",
                    "Expert Tech Solutions",
                    "Digital Growth Strategies",
                    "Web Design Trends",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h1>

            <p className="text-[#F1F3F4] text-base md:text-[18px] font-normal max-w-xl leading-relaxed">
              Stay ahead with our expert insights on technology trends, web
              development, digital marketing, and industry best practices.
            </p>

            {/* Feature Tags */}
            {/* <div className="flex flex-wrap gap-3 pt-2 md:pt-0" >
              {[
                { label: "24/7 Support", icon: FaTags, color: "#3B82F6" },
                {
                  label: "Free Consultation",
                  icon: FaPencilRuler,
                  color: "#FF6800",
                },
                {
                  label: "Quick Response",
                  icon: FaLightbulb,
                  color: "#4ADE80",
                },
              ].map((item, idx) => (
                <motion.span
                  key={idx}
                  initial="initial"
                  whileHover="hover"
                  className="relative flex items-center gap-2 bg-white px-4 py-3 rounded-lg text-[12px] font-bold text-[#4C4480] cursor-pointer overflow-hidden shadow-sm"
                >
                  <motion.div
                    variants={{
                      initial: { scaleX: 0, opacity: 0 },
                      hover: { scaleX: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gray-200 z-0 origin-center"
                  />
                  <motion.div
                    variants={{
                      initial: { rotate: -35 },
                      hover: { rotate: 0 },
                    }}
                    className="relative z-10"
                  >
                    <item.icon size={15} style={{ color: item.color }} />
                  </motion.div>
                  <span className="relative z-10">{item.label}</span>
                </motion.span>
              ))}
            </div> */}

            {/* Buttons */}
            <div className="flex gap-2 md:gap-4 pt-4 justify-center md:justify-normal">
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#00B8B8] text-[14px] text-[#2B2C34] px-2 md:px-8 py-3.5 rounded-xl font-bold shadow-lg transition-transform active:scale-95 sm:w-auto">
                <PiClipboardTextBold size={20} /> Get Free Quote
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#4C4480] hover:text-white text-[14px] text-[#4C4480] px-2 md:px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all duration-300 active:scale-95 sm:w-auto">
                <FaShoppingCart /> Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-6">
            {/* Contact Card */}
            <div className="bg-white/20 relative mt-6 md:mt-0  backdrop-blur-xl border border-white/30 p-6 sm:p-8 rounded-[30px] sm:rounded-[40px] shadow-2xl w-full max-w-md">
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

              <div className="md:space-y-4 space-y-2">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="group bg-white/10 p-4 rounded-2xl flex items-center gap-4 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-[#F1F3F4]"
                    >
                      <div
                        className={`w-12 h-12 shrink-0 rounded-lg flex items-center justify-center shadow-inner transition-all duration-300 ${stat.color} group-hover:bg-[#0FC8CA]`}
                      >
                        <Icon className="text-[#4C4480] text-xl transition-colors duration-300" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white font-bold text-lg sm:text-2xl leading-none transition-colors duration-300 group-hover:text-[#0FC8CA] truncate">
                          {stat.label}
                        </h4>
                        <p className="text-white/70 text-xs sm:text-sm group-hover:text-[#0FC8CA] truncate">
                          {stat.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
               {/* <div className="absolute -top-10 right-24 md:top-6 md:-right-6 flex flex-row lg:flex-col gap-3">
              {[
                MdOutlineSupportAgent,
                BsClockHistory,
                () => (
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
                    <path
                      d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.0833 0 12.1083 0.158333 13.075 0.475C14.0417 0.791667 14.9333 1.23333 15.75 1.8L14.3 3.275C13.6667 2.875 12.9917 2.5625 12.275 2.3375C11.5583 2.1125 10.8 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 12.2167 2.77917 14.1042 4.3375 15.6625C5.89583 17.2208 7.78333 18 10 18C10.5333 18 11.05 17.95 11.55 17.85C12.05 17.75 12.5333 17.6083 13 17.425L14.5 18.95C13.8167 19.2833 13.1 19.5417 12.35 19.725C11.6 19.9083 10.8167 20 10 20ZM17 18V15H14V13H17V10H19V13H22V15H19V18H17ZM8.6 14.6L4.35 10.35L5.75 8.95L8.6 11.8L18.6 1.775L20 3.175L8.6 14.6Z"
                      fill="#F1F3F4"
                    />
                  </svg>
                ),
              ].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/40 animate-bounce rounded-lg flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-[#0FC8CA] transition-all cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div> */}
            </div>

            {/* Vertical Social/Utility Icons */}
           
          </div>
        </div>
      </div>
    </section>
  );
}
