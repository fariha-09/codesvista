import React, { useState } from "react";
import { 
  FaClipboardList, 
  FaBezierCurve, 
  FaCode, 
  FaChartPie, 
  FaCreditCard, 
  FaMicrochip, 
  FaVial, 
  FaRocket, 
  FaTools 
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AppDevelopmentProcess() {
  // Track active card for mobile/touch devices
  const [activeCard, setActiveCard] = useState(null);

  const steps = [
    {
      id: "01",
      title: "Analysis & Planning",
      desc: "Technical analysis and Flutter architecture planning based on your goals.",
      icon: (props) => <FaClipboardList {...props} />,
    },
    {
      id: "02",
      title: "Flutter-Ready UI/UX",
      desc: "Interactive prototypes and UI designs optimized for smooth animations.",
      icon: (props) => <FaBezierCurve {...props} />,
    },
    {
      id: "03",
      title: "App Development",
      desc: "Building with a single codebase for Android & iOS using clean architecture.",
      icon: (props) => <FaCode {...props} />,
    },
    {
      id: "04",
      title: "Admin & CMS",
      desc: "Centralized dashboards for user management and real-time data sync.",
      icon: (props) => <FaChartPie {...props} />,
    },
    {
      id: "05",
      title: "Payment Integration",
      desc: "Secure Stripe, PayPal, and local gateway (JazzCash/EasyPaisa) setup.",
      icon: (props) => <FaCreditCard {...props} />,
    },
    {
      id: "06",
      title: "Advanced Features",
      desc: "Integrating Push Notifications, GPS, Real-time chat, and AI/ML APIs.",
      icon: (props) => <FaMicrochip {...props} />,
    },
    {
      id: "07",
      title: "Testing & QA",
      desc: "Functional and security testing across multiple devices and screen sizes.",
      icon: (props) => <FaVial {...props} />,
    },
    {
      id: "08",
      title: "Deployment",
      desc: "Store compliance and publishing to Google Play & Apple App Store.",
      icon: (props) => <FaRocket {...props} />,
    },
    {
      id: "09",
      title: "Support & Maintenance",
      desc: "Flutter version upgrades, bug fixes, and long-term performance monitoring.",
      icon: (props) => <FaTools {...props} />,
    },
  ];

  return (
    <section className="bg-[#2B2C34] md:py-20 py-12 md:px-6 px-4">
      <div className="max-w-6xl mx-auto md:px-12">
        
        <div className="text-center md:mb-16 mb-8 space-y-4">
          <h2 className="text-[#F1F3F4] text-3xl md:text-6xl font-serif font-bold">
            Our Development Process
          </h2>
          <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            A specialized 9-step lifecycle for building high-performance Flutter applications.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isSelected = activeCard === index;

            return (
              <motion.div
                key={index}
                initial="initial"
                animate={isSelected ? "hover" : "initial"}
                whileHover="hover"
                whileTap="hover" // Visual feedback on touch
                onClick={() => setActiveCard(isSelected ? null : index)} // Mobile toggle
                className="relative cursor-pointer md:p-8 py-6 px-3 bg-white/10 rounded-[30px] md:rounded-[40px] flex flex-col items-center text-center overflow-hidden border border-white/5"
              >
                {/* Expanding hover background */}
                <motion.div
                  variants={{
                    initial: { 
                      scale: 0, 
                      opacity: 0,
                      backgroundColor: "#F1F1F1" 
                    },
                    hover: { 
                      scale: 2.5, 
                      opacity: 1,
                    }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ originX: 1, originY: 0 }} 
                  className="absolute inset-0 z-0 pointer-events-none"
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  
                  {/* Step ID Bubble */}
                  <motion.div 
                    variants={{
                      initial: { color: "#FFFFFF", borderColor: "rgba(14, 156, 157, 0.4)" },
                      hover: { color: "#0E9C9D", borderColor: "#0E9C9D" }
                    }}
                    className="absolute md:-top-3 -top-2 md:-right-2 -right-1 border rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-[10px] md:text-xs transition-colors duration-300"
                  >
                    {step.id}
                  </motion.div>

                  {/* Icon Box */}
                  <motion.div
                    variants={{
                      initial: { color: "#0E9C9D", backgroundColor: "#F1F3F4" },
                      hover: { color: "#F1F3F4", backgroundColor: "#0E9C9D" }
                    }}
                    className="md:w-20 md:h-20 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-sm"
                  >
                    <StepIcon className="md:w-10 md:h-10 w-6 h-6" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    variants={{
                      initial: { color: "#FFFFFF" },
                      hover: { color: "#0E9C9D" }
                    }}
                    className="md:text-2xl text-base font-bold mb-2 transition-colors duration-300"
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    variants={{
                      initial: { color: "rgba(241, 243, 244, 0.7)" },
                      hover: { color: "#333333" } 
                    }}
                    className="md:text-[14px] text-[11px] leading-relaxed font-medium px-1 md:px-2 transition-colors duration-300"
                  >
                    {step.desc}
                  </motion.p>
                </div>

                {/* Constant Thin Border */}
                <div className="absolute inset-0 border border-white/10 rounded-[30px] md:rounded-[40px] pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}