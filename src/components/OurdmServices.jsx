    import React from 'react';
    import grids from "../assets/grids.png";
    import { motion } from "framer-motion";
    import { FaSearch } from 'react-icons/fa';
    import { FaMobileScreen } from "react-icons/fa6";
    import { TbTargetArrow } from "react-icons/tb";
    import { TbWriting } from "react-icons/tb";
    import { MdAttachEmail } from "react-icons/md";
    import { SiGoogleanalytics } from "react-icons/si";


    export default function OurdmServices() {
        const offers = [
        {
            title: "Search Engine Optimization (SEO)",
            desc: "Improve your website's visibility on search engines to attract more organic traffic.",
            icon: FaSearch,
        },
        {
            title: "Social Media Marketing",
            desc: "Build your brand presence and engage with your audience on popular social media platforms.",
            icon: FaMobileScreen,
        },
        {
            title: "Pay-Per-Click (PPC) Advertising",
            desc: "Drive targeted traffic to your website through effective paid advertising campaigns.",
            icon: TbTargetArrow,
        },
        {
            title: "Content Marketing",
            desc: "Engage your audience with high-quality, relevant content that drives conversions.",
            icon: TbWriting,
        },
        {
            title: "Email Marketing",
            desc: "Nurture leads and build customer loyalty with personalized email campaigns.",
            icon: MdAttachEmail,
        },
        {
            title: "Analytics & Reporting",
            desc: "Track and measure the performance of your digital marketing efforts with detailed analytics.",
            icon: SiGoogleanalytics,
        },
        ];
        
    return (
    <section
        className="relative bg-white flex justify-center object-cover"
        style={{ backgroundImage: `url(${grids})` }}
        >
        <div className="relative w-full max-w-[1400px] overflow-hidden bg-white/[98%] px-4 py-16  md:p-20">
            <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 md:mb-16 mb-4">
            <motion.h2
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
                style={{
                textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
                }}
            >
                Our Digital Marketing Services
            </motion.h2>
            <div className="w-20 h-1 bg-[#0FC8CA] mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital marketing solutions to grow your online presence.
            </p>
            
            </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-3 relative z-10">
          {offers.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={index}
                initial="initial"
                whileHover="hover"
                className="relative bg-white md:p-10 py-4 px-2 rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-center text-center overflow-hidden border border-white group cursor-pointer"
              >
                {/* Background Expansion Effect */}
                <motion.div
                  variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="absolute inset-0 bg-[#0FC8CA]/5 z-0 origin-center"
                />

                {/* Floating Icon Container */}
                <div className="relative z-10 md:w-20 md:h-20 w-16 h-16 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center md:mb-8 mb-3 transition-transform duration-300 group-hover:-translate-y-2">
                  <IconComponent className="md:text-4xl text-xl text-[#0FC8CA]" />
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="text-[#0E9C9D] font-bold text-[18px] md:text-[22px] md:mb-4 group-hover:text-[#4C4480] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280] text-[16px] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        </div>
        </section>
    );
    }


  