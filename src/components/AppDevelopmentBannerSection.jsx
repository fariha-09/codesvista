import React from "react";
import { PiBuildingApartmentFill, PiClipboardTextBold } from "react-icons/pi";
import { FaShoppingCart, FaMobileAlt, FaCode, FaRocket, FaCodeBranch, FaStar, FaUsers,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebook } from "react-icons/fa";
import grid from "../assets/grid.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";

export default function AppDevelopmentBannerSection() {
  const stats = [
    {
      label: "50+",
      sub: "Apps Developed",
      color: "bg-[#3B82F6]",
      icon: FaMobileAlt, 
    },
    {
      label: "2-Week",
      sub: "Sprint Cycles",
      color: "bg-[#4ADE80]",
      icon: FaCodeBranch,
    },
    {
      label: "4.9/5",
      sub: "App Store Rating",
      color: "bg-[#FF6800]",
      icon: FaStar,
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
            <PiBuildingApartmentFill size={20} className="text-white group-hover:text-[#0e9c9d]" />
            <span className="text-white font-medium text-[14px] whitespace-nowrap group-hover:text-black">
              App Development
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-[1.1] min-h-[120px] md:min-h-[150px]">
            <Typewriter
              options={{
                strings: [
                  "Professional App Development Services",
                  "Custom iOS & Android Solutions",
                  "Cross-Platform Mobile Experiences",
                  "Scalable Enterprise App Solutions",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h1>

          <p className="text-[#F1F3F4] text-[18px] font-normal max-w-xl leading-relaxed">
            Empower your business with high-performance mobile applications built for iOS and Android using cutting-edge frameworks.
          </p>

          {/* <div className="flex flex-wrap gap-3 pt-2 md:pt-0">
            {[
              { label: "MOBILE FIRST", icon: FaMobileAlt, color: "#3B82F6" },
              { label: "SCALABLE CODE", icon: FaCode, color: "#FF6800" },
              { label: "HIGH PERFORMANCE", icon: FaRocket, color: "#4ADE80" },
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
                    initial: { rotate: -35 },
                    hover: { rotate: 0 },
                  }}
                  className="relative z-10"
                >
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

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end md:mt-12 lg:mt-0">
          <div className="bg-white/20 relative mt-6 md:mt-0 backdrop-blur-xl border border-white/30 p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-white text-sm font-semibold opacity-90">Design Portfolio</span>
            </div>

            <div className="md:space-y-4 space-y-2">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="group bg-white/10 p-4 rounded-2xl flex items-center gap-4 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-[#F1F3F4]"
                  >
                    <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center shadow-inner transition-all duration-300 group-hover:bg-[#0FC8CA]`}>
                      <Icon className="text-white text-xl transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl md:text-2xl leading-none group-hover:text-[#0FC8CA] transition-colors">
                        {stat.label}
                      </h4>
                      <p className="text-white text-xs md:text-sm group-hover:text-[#0FC8CA] transition-colors">{stat.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating Icons */}
            {/* <div className="absolute -top-10 right-24 md:top-6 md:-right-6 flex flex-row lg:flex-col gap-3">
              {[FaCode, FaMobileAlt, FaRocket].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 animate-bounce backdrop-blur-md border border-white/40 rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-[#0FC8CA] transition-all cursor-pointer active:scale-90"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}