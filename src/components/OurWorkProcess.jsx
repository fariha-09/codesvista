import React from 'react';
import { IoIosChatbubbles } from "react-icons/io";
import { FaLightbulb,FaPalette,FaPenToSquare } from "react-icons/fa6";
import { FaEye,FaDownload } from "react-icons/fa";





export default function OurWorkProcess() {
  const steps = [
    {
      id: "01",
      title: "Brief Research",
      desc: "We understand your business, target audience, and design preferences.",
      icon: <IoIosChatbubbles size={32} className="text-[#0E9C9D]" />,
    },
    {
      id: "02",
      title: "Concept Development",
      desc: "We brainstorm and create initial design concepts based on your requirements.",
      icon: <FaLightbulb size={32} className="text-[#0E9C9D]" />,
    },
    {
      id: "03",
      title: "Design Creation",
      desc: "Our designers create the initial designs using professional tools.",
      icon: <FaPalette size={32} className="text-[#0E9C9D]" />,
    },
    {
      id: "04",
      title: "Review & Feedback",
      desc: "We review the designs and provide feedback for improvements.",
      icon: <FaEye size={32} className="text-[#0E9C9D]" />,
    },
    {
      id: "05",
      title: "Revisions",
      desc: "We refine the designs based on your feedback until you're satisfied.",
      icon: <FaPenToSquare size={32} className="text-[#0E9C9D]" />,
    },
    {
      id: "06",
      title: "Final Delivery",
      desc: "We deliver all final files in the required formats for immediate use.",
      icon: <FaDownload size={32} className="text-[#0E9C9D]" />,
    }
  ];

  return (
    <section className="bg-[#0E9C9D] py-20 px-6">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#F1F3F4] text-4xl md:text-6xl font-serif font-bold">
            Our Work Process
          </h2>
          <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto">
            Our creative process ensures we deliver designs that exceed your expectations.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 

              className="relative bg-[#F1F3F44D] border border-white/20 p-8 rounded-[40px] flex flex-col items-center text-center transition-all duration-300 hover:bg-[#F1F3F466]"
            >
              {/* Step Number Badge */}
              <div className="absolute top-5 right-7 border border-white/40 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-xs">
                {step.id}
              </div>

              {/* Icon Container (White Box) */}
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                 {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-white text-2xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-[#F1F3F4CC]/80 text-[14px] leading-relaxed font-medium px-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}