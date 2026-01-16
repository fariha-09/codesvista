import React from 'react';
import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaKey, 
  FaPenNib, 
  FaLink, 
  FaMapMarkerAlt, 
  FaChartLine 
} from 'react-icons/fa';
import grids from "../assets/grids.png"; 

export default function OurSeoServices() {
  const seoServices = [
    {
      title: "Technical SEO",
      desc: "Website optimization, speed improvements, and technical fixes for better search performance.",
      icon: FaSearch,
    },
    {
      title: "Keyword Research",
      desc: "In-depth keyword analysis to target the right terms for your business and audience.",
      icon: FaKey,
    },
    {
      title: "Content Writing",
      desc: "High-quality, SEO-optimized content that engages readers and ranks well in search.",
      icon: FaPenNib,
    },
    {
      title: "Link Building",
      desc: "Quality backlink acquisition from authoritative websites to boost your domain authority.",
      icon: FaLink,
    },
    {
      title: "Local SEO",
      desc: "Local search optimization to help your business appear in local search results.",
      icon: FaMapMarkerAlt,
    },
    {
      title: "SEO Analytics",
      desc: "Detailed reporting and analytics to track your SEO performance and ROI.",
      icon: FaChartLine,
    },
  ];

  return (
   <section
            className="relative bg-white flex justify-center object-cover"
            style={{ backgroundImage: `url(${grids})` }}
          >
            <div className="relative w-full max-w-[1400px] overflow-hidden bg-white/[98%] p-10 md:p-20">
              <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
          <motion.h2 
           initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
                      style={{
                        textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
                      }}
                    >
            Our SEO & Content Services
          </motion.h2>
          <div className="w-16 h-1 bg-[#0FC8CA] mx-auto rounded-full"></div>
          <p className="text-[#4C448080] text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive SEO and content solutions to improve your online visibility
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {seoServices.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial="initial"
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-[40px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-white flex flex-col items-center text-center group transition-all duration-300 overflow-hidden"
              >
                {/* Middle to Sides Background Hover Layer */}
                <motion.div
                  variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[#4C4480]/5 z-0 origin-center"
                />

                {/* Icon Container - Double Shadow Style */}
                <div className="relative z-10 w-24 h-24 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex items-center justify-center mb-8 transition-transform duration-300 group-hover:-translate-y-2">
                  <Icon className="text-3xl text-[#0FC8CA] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-[#0FC8CA] text-2xl font-bold mb-4 tracking-tight group-hover:text-[#4C4480] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#4C448080] text-[15px] leading-relaxed max-w-[280px]">
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