import React from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { FaLightbulb, FaPalette, FaPenToSquare } from "react-icons/fa6";
import { FaEye, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function OurWorkProcess() {
  const steps = [
    {
      id: "01",
      title: "Brief Research",
      desc: "We understand your business, target audience, and design preferences.",
      icon: <IoIosChatbubbles size={32}  />,
    },
    {
      id: "02",
      title: "Concept Development",
      desc: "We brainstorm and create initial design concepts based on your requirements.",
      icon: <FaLightbulb size={32}  />,
    },
    {
      id: "03",
      title: "Design Creation",
      desc: "Our designers create the initial designs using professional tools.",
      icon: <FaPalette size={32} />,
    },
    {
      id: "04",
      title: "Review & Feedback",
      desc: "We review the designs and provide feedback for improvements.",
      icon: <FaEye size={32}  />,
    },
    {
      id: "05",
      title: "Revisions",
      desc: "We refine the designs based on your feedback until you're satisfied.",
      icon: <FaPenToSquare size={32}  />,
    },
    {
      id: "06",
      title: "Final Delivery",
      desc: "We deliver all final files in the required formats for immediate use.",
      icon: <FaDownload size={32}  />,
    },
  ];

  return (
    <section className="bg-[#0E9C9D] py-20 px-6 font-serif">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#F1F3F4] text-4xl md:text-6xl font-serif font-bold">
            Our Work Process
          </h2>
          <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto">
            Our creative process ensures we deliver designs that exceed your
            expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
  {steps.map((step, index) => (
    <motion.div
      key={index}
      initial="initial"
      whileHover="hover"
      className="relative cursor-default p-8 bg-white/30 rounded-[40px] flex flex-col items-center text-center overflow-hidden"
    >
      <motion.div
        variants={{
          initial: { 
            scale: 0, 
            opacity: 30,
            backgroundColor: "#F1F1F1" 
          },
          hover: { 
            scale: 1, 
            opacity: 1,
          }
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ originX: 1, originY: 0 }} 
        className="absolute inset-0 z-0 rounded-[40px]"
      />

      <div className="relative z-10 flex flex-col items-center w-full">
        
        <motion.div 
          variants={{
            initial: { color: "#FFFFFF", borderColor: "#0E9C9D" },
            hover: { color: "#0E9C9D", borderColor: "#0E9C9D" }
          }}
          className="absolute -top-3 -right-2 border rounded-full w-9 h-9 flex items-center justify-center font-bold text-xs transition-colors duration-300"
        >
          {step.id}
        </motion.div>

        <motion.div
         variants={{
            initial: { color: "#0E9C9D", backgroundColor: "#F1F3F4" },
            hover: { color: "#F1F3F4", backgroundColor: "#0E9C9D" }
          }}
         className=" w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          {step.icon}
        </motion.div>

        <motion.h3 
          variants={{
            initial: { color: "#FFFFFF" },
            hover: { color: "#0E9C9D" }
          }}
          className="text-2xl font-bold mb-3 transition-colors duration-300"
        >
          {step.title}
        </motion.h3>

        <motion.p 
          variants={{
            initial: { color: "rgba(241, 243, 244, 0.7)" },
            hover: { color: "#0E9C9D" } 
          }}
          className="text-[14px] leading-relaxed font-medium px-2 transition-colors duration-300"
        >
          {step.desc}
        </motion.p>
      </div>

      <div className="absolute inset-0 border border-white/20 rounded-[40px] pointer-events-none" />
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}
