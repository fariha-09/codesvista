import React from 'react';
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaTrophy, FaHeart } from 'react-icons/fa';
import grids from "../assets/grids.png";

export default function ResultsWeAchieve() {
    const stats = [
    {
      value: "250%",
      label: "Increase in Website Traffic",
      icon: FaChartLine,
    },
    {
      value: "5X",
      label: "Return on Investment",
      icon: FaUsers,
    },
    {
      value: "400%",
      label: "Growth in Conversions",
      icon: FaTrophy,
    },
    {
      value: "95%",
      label: "Customer Satisfaction",
      icon: FaHeart,
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
                       Real Results We've Achieved
                    </motion.h2>
           
         
          <div className="w-16 h-1 bg-[#0FC8CA] mx-auto"></div>
          <p className="text-[#4C448080] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            See the measurable impact our digital marketing services have had on our clients
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[30px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center group"
              >
                {/* Icon Container (The "Small Box" Look) */}
                <div className="w-16 h-16 bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.06)] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <Icon className="text-2xl text-[#E53E3E]" /> {/* Icon color adjusted to match image theme */}
                </div>

                {/* Data Value */}
                <h3 className="text-[#AC1B9E] text-4xl font-extrabold mb-2">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="text-[#AC1B9E] font-medium text-sm">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
