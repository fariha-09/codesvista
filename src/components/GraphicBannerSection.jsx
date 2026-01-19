import React from "react";
import { PiClipboardTextBold } from "react-icons/pi";
import {
  FaShoppingCart,
  FaPaintBrush,
  FaPenNib,
  FaTags,
  FaLightbulb,
  FaUsers,
  FaPalette,
} from "react-icons/fa";
import { MdOutlineBrush } from "react-icons/md";
import { RiAwardFill, RiPencilFill } from "react-icons/ri";
import { SlPencil } from "react-icons/sl";
import grid from "../assets/grid.jpg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function GraphicBannerSection() {
  const stats = [
    {
      label: "800+",
      sub: "Designs Created",
      color: "bg-cyan-400",
      icon: MdOutlineBrush,
    },
    {
      label: "3k+",
      sub: "Happy Clients Worldwide",
      color: "bg-blue-500",
      icon: FaUsers,
    },
    {
      label: "15+",
      sub: "Years of Experience",
      color: "bg-pink-500",
      icon: RiAwardFill,
    },
  ];

  return (
    <section className="relative bg-[#0fc8ca] min-h-screen lg:min-h-[88vh] w-full flex justify-center lg:px-10 font-sans overflow-hidden">
      {/* INNER CARD */}
      <div className="relative w-full max-w-[1500px] h-full lg:h-[88vh] overflow-hidden lg:shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src={grid}
            alt="grid overlay"
            className="w-full h-full object-cover opacity-[5%] mix-blend-overlay"
          />
        </div>

        {/* CONTENT CONTAINER */}
        <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col lg:flex-row justify-between h-full py-12 lg:py-4 gap-12 lg:gap-0">
          
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-4 flex flex-col justify-center">
            <div className="inline-flex self-start items-center gap-2 text-white hover:text-black bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 hover:bg-[#F1F3F4] transition-all cursor-default">
              <FaPaintBrush size={18} className="text-[#0e9c9d]" />
              <span className="font-medium text-[14px]">Graphic Design</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] min-h-[120px] md:min-h-auto">
              <Typewriter
                options={{
                  strings: [
                    "Creative Graphic Design Solutions",
                    "Impactful Visual Brand Identity",
                    "Innovative Digital Artistry"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </h1>

            <p className="text-[#F1F3F4] text-base md:text-[18px] font-normal max-w-xl leading-relaxed">
              Elevate your brand with our innovative graphic design services
              that captivate and inspire. We blend artistic creativity with
              strategic thinking to craft visual identities that tell your
              unique story.
            </p>

            {/* Feature Tags - Adapted from your Hero style */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "BRAND IDENTITY", icon: FaTags, color: "#3B82F6" },
                { label: "CREATIVE DESIGN", icon: FaPalette, color: "#FF6800" },
                { label: "ARTISTIC VISION", icon: SlPencil, color: "#4ADE80" }
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
                  <span className="relative z-10 uppercase">{tag.label}</span>
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                         <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#00B8B8] text-[14px] text-[#2B2C34] px-8 py-3.5 rounded-xl font-bold shadow-lg transition-transform active:scale-95 w-full sm:w-auto">
                           <PiClipboardTextBold size={20} /> Get Free Quote
                         </button>
                         <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#4C4480] hover:text-white text-[14px] text-[#4C4480] px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all duration-300 active:scale-95 w-full sm:w-auto">
                           <FaShoppingCart /> Explore Services
                         </button>
                       </div>
                     </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row lg:flex-row items-center justify-center lg:justify-end gap-6">
            
            {/* Portfolio Stats Card */}
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-2xl w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-white text-xs font-semibold opacity-90 uppercase tracking-wider">
                  Design Portfolio
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
            </div>

            {/* Vertical Tool Icons - Becomes horizontal on small screens */}
            <div className="flex flex-row lg:flex-col gap-3">
              {[FaPenNib, FaPaintBrush, RiPencilFill].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md border border-white/40 rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-[#0FC8CA] transition-all cursor-pointer active:scale-90"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}