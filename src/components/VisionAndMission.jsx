import React from 'react';
import { Target } from 'lucide-react';
import { BsCheckCircleFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import grids from "../assets/grids.png";
import { motion } from 'framer-motion'; 

export default function VisionAndMission() {
  const missionCardStyle = {
    background: `radial-gradient(circle at top center, #10B9810D 5%, #10B98100 0%), 
                 radial-gradient(circle at bottom right, #3B82F61A 10%, #3B82F600 0%),
                 rgba(255, 255, 255, 0.03)`
  };

  const visionCardStyle = {
    background: `radial-gradient(circle at top center, #9333EA1A 10%, #9333EA00 0%), 
                 radial-gradient(circle at bottom right, #3B82F61A 10%, #3B82F600 0%),
                 rgba(255, 255, 255, 0.03)`
  };

  // Animation variants for the white expansion effect
  const overlayVariants = {
    initial: { scale: 0, opacity: 0 },
    hover: { scale: 1.5, opacity: 1 },
    
  };

  const contentVariants = {
    initial: { color: "inherit" },
    hover: { color: "#000000" } 
  };

  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{ backgroundImage: `url(${grids})` }}
    >
      <div className="relative w-full overflow-hidden bg-white/[98%] px-4 py-14 md:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 md:mt-16 mb-6">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight"
            style={{
              textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
            }}
          >
            Our Mission <span className="italic font-serif">&</span> Vision
          </motion.h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Driving digital transformation through innovation, expertise, and unwavering commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div 
            initial="initial"
            whileHover="hover"
             whileTap="hover" 
            style={missionCardStyle}
            className="group border border-black/10 rounded-[40px] p-4 md:p-14 flex flex-col items-center text-center relative overflow-hidden cursor-default"
          >
            {/* The Animated Background Layer */}
            <motion.div
              variants={overlayVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              onTap={{ y: 0, opacity: 1 }}
              style={{ originX: 1, originY: 0 }} 
              className="absolute inset-0 bg-[#0FC8CA] text-white z-0 pointer-events-none"
            />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 bg-[#10B981] group-hover:bg-white">
                <Target size={38} className="text-white group-hover:text-[#0FC8CA]" />
              </div>
              
              {/* <h2 className="text-3xl font-serif font-semibold md:mb-6 mb-2 transition-colors duration-300 group-hover:text-white"> */}
              <motion.h2
  variants={{
    initial: { color: "#000" },
    hover: { color: "#fff" }
  }}
  className="text-3xl font-serif font-semibold md:mb-6 mb-2 transition-colors duration-300 group-hover:text-white"
>
 Our Mission
          
</motion.h2>
               
          
              <p className="text-[#4C448080]/50 text-[17px] leading-relaxed mb-2 md:mb-10 transition-colors duration-300 group-hover:text-white">
                To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth.
              </p>
              
              <div className="w-full space-y-3">
                {['Build long-term partnerships', 'Deliver exceptional value to our clients', 'Faster innovation and creativity'].map((item) => (
                  <div key={item} className="flex items-center gap-4 bg-black/5 p-4 rounded-2xl border border-black/10 transition-all duration-300 group-hover:text-white">
                    <BsCheckCircleFill size={20} className="text-[#10B981] group-hover:text-white" />
                    <span className="text-[#4C448080]/50 group-hover:text-white text-sm font-medium transition-colors duration-300 ">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial="initial"
            whileHover="hover"
             whileTap="hover" 
            style={visionCardStyle}
            className="group border border-black/10 rounded-[40px] p-4 md:p-14 flex flex-col items-center text-center relative overflow-hidden cursor-default"
          >
            {/* The Animated Background Layer */}
            <motion.div
              variants={overlayVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ originX: 1, originY: 0 }}
              className="absolute inset-0 bg-[#0FC8CA]  z-0 pointer-events-none"
            />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-[#EC4899] group-hover:bg-white  rounded-2xl flex items-center justify-center  mb-4 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <FaEye size={40} className="text-white group-hover:text-[#0FC8CA]" />
              </div>
              
             
                  <motion.h2
  variants={{
    initial: { color: "#000" },
    hover: { color: "#fff" }
  }}
  className="text-3xl font-serif font-semibold md:mb-6 mb-2 transition-colors duration-300 group-hover:text-white"
>
                Our Vision</motion.h2>
           
              <p className="text-[#4C448080]/50 group-hover:text-white text-[17px] leading-relaxed mb-2 md:mb-10 transition-colors duration-300 ">
                To be the leading software house that transforms how businesses leverage technology, creating a future where digital innovation drives global progress.
              </p>

              <div className="w-full space-y-4">
                {['Shape digital future', 'Lead industry innovation', 'Expand global reach'].map((item) => (
                  <div key={item} className="flex items-center gap-4 bg-black/5 p-4 rounded-2xl border border-black/10 transition-all duration-300 group-hover:bg-black/10">
                    <BsCheckCircleFill size={20} className="text-[#10B981] group-hover:text-white" />
                    <span className="text-[#4C448080]/50 group-hover:text-white text-sm font-medium transition-colors duration-300 ">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}