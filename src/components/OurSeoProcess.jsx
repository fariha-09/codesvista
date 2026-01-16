import React from "react";
import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaBullseye, 
  FaKey, 
  FaTools, 
  FaEdit, 
  FaChartLine 
} from "react-icons/fa";

export default function OurSeoProcess() {
  const steps = [
    {
      id: "01",
      title: "SEO Audit",
      desc: "Comprehensive analysis of your website's current SEO performance and technical issues.",
      icon: <FaSearch size={32} />,
    },
    {
      id: "02",
      title: "Strategy Development",
      desc: "Create a customized SEO strategy based on your business goals and competition.",
      icon: <FaBullseye size={32} />,
    },
    {
      id: "03",
      title: "Keyword Research",
      desc: "Identify the best keywords to target for maximum traffic and high-intent conversions.",
      icon: <FaKey size={32} />,
    },
    {
      id: "04",
      title: "On-Page Optimization",
      desc: "Optimize your website's content, structure, meta tags, and technical elements.",
      icon: <FaTools size={32} />,
    },
    {
      id: "05",
      title: "Content Creation",
      desc: "Create high-quality, SEO-optimized content that ranks well and converts visitors.",
      icon: <FaEdit size={32} />,
    },
    {
      id: "06",
      title: "Monitor & Improve",
      desc: "Continuous monitoring and optimization to maintain and improve search rankings.",
      icon: <FaChartLine size={32} />,
    },
  ];

  return (
    <section className="bg-white py-24 px-6 font-serif">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
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
            Our SEO Process
         </motion.h2>
          <div className="w-16 h-1 bg-[#0FC8CA] mx-auto rounded-full"></div>
          <p className="text-[#4C448080]   text-lg md:text-xl max-w-3xl mx-auto">
            Our proven SEO methodology that delivers sustainable results and growth.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileHover="hover"
              className="relative cursor-default p-10 bg-gray-50/50 rounded-[40px] flex flex-col items-center text-center overflow-hidden border border-gray-100"
            >
              {/* Animation Layer: Expands from top-right corner */}
              <motion.div
                variants={{
                  initial: { 
                    scale: 0, 
                    opacity: 0,
                    backgroundColor: "#0E9C9D" 
                  },
                  hover: { 
                    scale: 0.99, 
                    opacity: 1,
                  }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ originX: 1, originY: 0 }} 
                className="absolute inset-0 z-0 rounded-[40px]"
              />

              <div className="relative z-10 flex flex-col items-center w-full">
                
                {/* Step ID Bubble */}
                <motion.div 
                  variants={{
                    initial: { color: "#1A2B4E", borderColor: "#1A2B4E" },
                    hover: { color: "#FFFFFF", borderColor: "#FFFFFF" }
                  }}
                  className="absolute -top-4 -right-2 border rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm transition-colors duration-300"
                >
                  {step.id}
                </motion.div>

                {/* Icon Box */}
                <motion.div
                  variants={{
                    initial: { color: "#FFFFFF", backgroundColor: "#0E9C9D" },
                    hover: { color: "#0FC8CA", backgroundColor: "#FFFFFF" }
                  }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm"
                >
                  {step.icon}
                </motion.div>

                {/* Title */}
                <motion.h3 
                  variants={{
                    initial: { color: "#1A2B4E" },
                    hover: { color: "#FFFFFF" }
                  }}
                  className="text-2xl font-bold mb-4 transition-colors duration-300"
                >
                  {step.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  variants={{
                    initial: { color: "#6B7280" }, 
                    hover: { color: "rgba(255, 255, 255, 0.9)" } 
                  }}
                  className="text-[15px] leading-relaxed font-medium px-2 transition-colors duration-300"
                >
                  {step.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}