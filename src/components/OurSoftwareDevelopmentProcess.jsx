import React, { useState } from "react";
import { FaPencilRuler, FaCode, FaRocket, FaCheckDouble } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function OurSoftwareDevelopmentProcess() {
  // Track active card for mobile/touch devices
  const [activeCard, setActiveCard] = useState(null);

  const steps = [
    {
      id: "01",
      title: "Requirements Gathering",
      desc: "We analyze your business needs to define clear functional and technical requirements.",
      icon: FaRegFileLines,
    },
    {
      id: "02",
      title: "System Architecture",
      desc: "We design robust, scalable structures to ensure your software handles growth seamlessly.",
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1667 28.3333C12.2069 28.3333 10.3653 27.9615 8.64167 27.2177C6.91806 26.474 5.41875 25.4646 4.14375 24.1896C2.86875 22.9146 1.85938 21.4153 1.11563 19.6917C0.371875 17.9681 0 16.1264 0 14.1667C0 12.2069 0.371875 10.3653 1.11563 8.64167C1.85938 6.91806 2.86875 5.41875 4.14375 4.14375C5.41875 2.86875 6.91806 1.85938 8.64167 1.11563C10.3653 0.371875 12.2069 0 14.1667 0C15.7014 0 17.1535 0.224306 18.5229 0.672917C19.8924 1.12153 21.1556 1.74722 22.3125 2.55L20.2583 4.63958C19.3611 4.07292 18.4049 3.63021 17.3896 3.31146C16.3743 2.99271 15.3 2.83333 14.1667 2.83333C11.0264 2.83333 8.35243 3.93715 6.14479 6.14479C3.93715 8.35243 2.83333 11.0264 2.83333 14.1667C2.83333 17.3069 3.93715 19.9809 6.14479 22.1885C8.35243 24.3962 11.0264 25.5 14.1667 25.5C14.9222 25.5 15.6542 25.4292 16.3625 25.2875C17.0708 25.1458 17.7556 24.9451 18.4167 24.6854L20.5417 26.8458C19.5736 27.3181 18.5583 27.684 17.4958 27.9438C16.4333 28.2035 15.3236 28.3333 14.1667 28.3333ZM24.0833 25.5V21.25H19.8333V18.4167H24.0833V14.1667H26.9167V18.4167H31.1667V21.25H26.9167V25.5H24.0833ZM12.1833 20.6833L6.1625 14.6625L8.14583 12.6792L12.1833 16.7167L26.35 2.51458L28.3333 4.49792L12.1833 20.6833Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: "03",
      title: "UI/UX Design",
      desc: "We design intuitive user interfaces and engaging user experiences.",
      icon: (props) => <FaPencilRuler {...props} />,
    },
    {
      id: "04",
      title: "Development",
      desc: "Our developers build your software using clean code and modern frameworks.",
      icon: (props) => <FaCode {...props} />,
    },
    {
      id: "05",
      title: "Testing & QA",
      desc: "We rigorously test to ensure functionality, high performance, and total security.",
      icon: (props) => <FaCheckDouble {...props} />, // Changed to a testing-relevant icon
    },
    {
      id: "06",
      title: "Deployment",
      desc: "We launch your software to production and provide ongoing technical support.",
      icon: (props) => <FaRocket {...props} />,
    }
  ];

  return (
    <section className="bg-[#2B2C34] md:py-20 py-10 md:px-6 px-4">
      <div className="max-w-6xl mx-auto md:px-12">
        <div className="text-center md:mb-16 mb-8 space-y-4">
          <h2 className="text-[#F1F3F4] text-4xl md:text-6xl font-serif font-bold">
            Our Development Process
          </h2>
          <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto">
            Our proven 6-step lifecycle ensures quality delivery and technical excellence
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
                whileTap="hover" // Triggers animation on mobile tap
                onClick={() => setActiveCard(isSelected ? null : index)} // Toggles the state
                className="relative cursor-pointer md:p-8 py-6 px-3 bg-white/10 md:rounded-[40px] rounded-2xl flex flex-col items-center text-center overflow-hidden border border-white/5"
              >
                {/* Expandable background animation */}
                <motion.div
                  variants={{
                    initial: { scale: 0, opacity: 0, backgroundColor: "#F1F1F1" },
                    hover: { scale: 2.5, opacity: 1, backgroundColor: "#F1F1F1" }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ originX: 1, originY: 0 }}
                  className="absolute inset-0 z-0 pointer-events-none"
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  {/* Step ID Bubble */}
                  <motion.div 
                    variants={{
                      initial: { color: "#FFFFFF", borderColor: "rgba(14, 156, 157, 0.5)" },
                      hover: { color: "#0E9C9D", borderColor: "#0E9C9D" }
                    }}
                    className="absolute md:-top-3 -top-2 md:-right-2 -right-1 border rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-[10px] md:text-xs transition-colors duration-300"
                  >
                    {step.id}
                  </motion.div>

                  {/* Icon Container */}
                  <motion.div
                    variants={{
                      initial: { color: "#0E9C9D", backgroundColor: "#F1F3F4" },
                      hover: { color: "#F1F3F4", backgroundColor: "#0E9C9D" }
                    }}
                    className="w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                  >
                    <StepIcon className="w-7 h-7 md:w-10 md:h-10" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    variants={{
                      initial: { color: "#FFFFFF" },
                      hover: { color: "#0E9C9D" }
                    }}
                    className="md:text-2xl text-lg font-bold mb-2 transition-colors duration-300"
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    variants={{
                      initial: { color: "rgba(241, 243, 244, 0.7)" },
                      hover: { color: "#333333" } 
                    }}
                    className="md:text-[14px] text-[12px] leading-relaxed font-medium px-2 transition-colors duration-300"
                  >
                    {step.desc}
                  </motion.p>
                </div>

                {/* Constant Border */}
                <div className="absolute inset-0 border border-white/10 md:rounded-[40px] rounded-2xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}