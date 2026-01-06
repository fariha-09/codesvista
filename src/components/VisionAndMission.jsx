import React from 'react';
import { Target } from 'lucide-react';
import { BsCheckCircleFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";



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
    <div className="min-h-screen w-full bg-[#060411] text-white py-24 px-4 font-sans selection:bg-purple-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
            Our Mission <span className="italic font-serif">&</span> Vision
          </h1>
          <p className="text-[#F1F3F480]/50 text-[16px] md:text-base max-w-2xl mx-auto  ">
            Driving digital transformation through innovation, expertise, and unwavering commitment to excellence
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div 
            style={missionCardStyle}
            className="border border-white/10 rounded-[40px] p-10 md:p-14 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-[#10B981]">
              <Target size={38} className="text-white" />
            </div>
            
            <h2 className="text-3xl font-serif font-semibold mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-10 text-lg">
                To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth.
              </p>
              
              <div className="w-full space-y-3">
              {['Build long-term partnerships', 'Deliver exceptional value to our clients', 'Faster innovation and creativity'].map((item) => (
                <div key={item} className="flex items-center gap-4 bg-white/[0.03] p-5 rounded-2xl border border-white/5 group hover:bg-white/[0.05] transition-all">
                    <BsCheckCircleFill size={20} className="text-[#10B981]" />
                    <span className="text-gray-200 text-sm font-medium">{item}</span>
                  </div>
              ))}
            </div>
          </div>
          {/* Vision Card */}
          <div 
            style={visionCardStyle}
            className="border border-white/10 rounded-[40px] p-10 md:p-14 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <FaEye size={40} className="text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed mb-10 text-lg">
                To be the leading software house that transforms how businesses leverage technology, creating a future where digital innovation drives global progress.
              </p>

              <div className="w-full space-y-4">
                {['Shape digital future', 'Lead industry innovation', 'Expand global reach'].map((item) => (
                  <div key={item} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                    <BsCheckCircleFill size={20} className="text-[#10B981]" />
                    <span className="text-gray-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}