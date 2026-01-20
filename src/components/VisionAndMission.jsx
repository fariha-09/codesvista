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
  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{ backgroundImage: `url(${grids})` }}
    >
      <div className="relative w-full max-w-[1400px] overflow-hidden bg-white/[98%] px-4 py-10 md:p-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 md:mb-16 mb-6">
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
             Our Mission <span className="italic font-serif">&</span> Vision
          </motion.h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
           Driving digital transformation through innovation, expertise, and unwavering commitment to excellence
          </p>
        </div>
        

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div 
            style={missionCardStyle}
            className="border border-black/10 rounded-[40px] p-4 md:p-14 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-8 bg-[#10B981]">
              <Target size={38} className="text-white" />
            </div>
            
            <h2 className="text-3xl font-serif font-semibold md:mb-6 mb-2">Our Mission</h2>
              <p className="text-[#4C448080]/50 text-[17px] leading-relaxed mb-2 md:mb-10">
                To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth.
              </p>
              
              <div className="w-full space-y-3">
              {['Build long-term partnerships', 'Deliver exceptional value to our clients', 'Faster innovation and creativity'].map((item) => (
                <div key={item} className="flex items-center gap-4 bg-black/5 p-4 rounded-2xl border border-black/10 group hover:bg-white/[0.05] transition-all">
                    <BsCheckCircleFill size={20} className="text-[#10B981]" />
                    <span className="text-[#4C448080]/50 text-sm font-medium">{item}</span>
                  </div>
              ))}
            </div>
          </div>
          {/* Vision Card */}
          <div 
            style={visionCardStyle}
            className="border border-black/10 rounded-[40px] p-4 md:p-14 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div
            
            className="w-20 h-20 bg-[#EC4899] rounded-2xl flex items-center justify-center d:mb-8 mb-4 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <FaEye size={40} className="text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold md:mb-6 mb-2">Our Vision</h2>
              <p className="text-[#4C448080]/50 text-[17px] leading-relaxed mb-2 md:mb-10 ">
                To be the leading software house that transforms how businesses leverage technology, creating a future where digital innovation drives global progress.
              </p>

              <div className="w-full space-y-4">
                {['Shape digital future', 'Lead industry innovation', 'Expand global reach'].map((item) => (
                   <div key={item} className="flex items-center gap-4 bg-black/5 p-4 rounded-2xl border border-black/10 group hover:bg-white/[0.05] transition-all">
                    <BsCheckCircleFill size={20} className="text-[#10B981]" />
                    <span className="text-[#4C448080]/50 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}