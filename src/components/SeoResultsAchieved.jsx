import React from 'react';
import { motion } from "framer-motion";
import { FaChartLine, FaSearchPlus, FaUsers, FaRegClock } from 'react-icons/fa';

export default function SeoResultsAchieved() {
  const results = [
    {
      value: "300%",
      label: "Average Traffic Increase",
      desc: "Organic search traffic growth across all client campaigns",
      icon: <FaChartLine />,
    },
    {
      value: "85%",
      label: "Keywords in Top 10",
      desc: "Target keywords ranking in the first page of search results",
      icon: <FaSearchPlus />,
    },
    {
      value: "250%",
      label: "Lead Generation Growth",
      desc: "Significant increase in qualified leads from organic search",
      icon: <FaUsers />,
    },
    {
      value: "3-6",
      label: "Months to See Results",
      desc: "Typical timeframe for measurable SEO improvements",
      icon: <FaRegClock />,
    },
  ];

  return (
    <section className="bg-white md:py-24 py-10 px-4 md:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center md:mb-20 mb-10 space-y-4">
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
            SEO Results We've Achieved
          </motion.h2>
          <div className="w-16 h-1 bg-[#0FC8CA] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Real results from our SEO campaigns for various clients
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-2">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileHover="hover"
              className="relative bg-white md:rounded-[32px] rounded-xl md:p-10 px-3 py-5 flex flex-col items-center text-center shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden group"
            >
              {/* Middle to Sides Background Hover Layer */}
              <motion.div
                variants={{
                  initial: { scaleX: 0, opacity: 0 },
                  hover: { scaleX: 1, opacity: 1 },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#0E9C9D]/5 z-0 origin-center"
              />

              {/* Icon Container with Gradient Border Effect */}
              <div className="relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br from-[#4C4480] to-[#0E9C9D] flex items-center justify-center text-[#0E9C9D] text-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-[#1A2B4E] text-4xl font-bold mb-2 tracking-tight">
                  {item.value}
                  {item.label.includes("Months") ? "" : ""}
                </h3>
                <p className="text-[#0E9C9D] font-bold text-lg mb-4 leading-tight px-2">
                  {item.label}
                </p>
                <div className="w-10 h-[2px] bg-gray-200 mx-auto mb-4 group-hover:bg-[#0E9C9D] transition-colors"></div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#4C4480] to-[#0E9C9D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}