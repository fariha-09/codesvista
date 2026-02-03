// import React from 'react';
// import { FaPenToSquare } from "react-icons/fa6";
// import { FaEye, FaDownload } from "react-icons/fa";
// import { LuSquareCode } from "react-icons/lu";
// import { MdOutlineLaunch } from "react-icons/md";
// import { motion } from 'framer-motion';


// export default function OurMarketingProcess() {
//   const steps = [
//     {
//       id: "01",
//       title: "Research and Analysis",
//       desc: "We analyze your business, competitors, and target audience to create effective marketing strategies.",
//       icon: (props) => (
//         <svg {...props} viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M8.5 22.6667C7.72083 22.6667 7.05382 22.3892 6.49896 21.8344C5.9441 21.2795 5.66667 20.6125 5.66667 19.8333V6.72917L0 0H26.9167C27.6958 0 28.3628 0.277431 28.9177 0.832292C29.4726 1.38715 29.75 2.05417 29.75 2.83333V19.8333C29.75 20.6125 29.4726 21.2795 28.9177 21.8344C28.3628 22.3892 27.6958 22.6667 26.9167 22.6667H8.5ZM6.09167 2.83333L8.5 5.66667V19.8333H26.9167V2.83333H6.09167ZM17.7083 19.125L19.6917 17.1417L18.1333 15.5833H24.0833V12.75H11.3333L17.7083 19.125ZM11.3333 9.91667H24.0833L17.7083 3.54167L15.725 5.525L17.2833 7.08333H11.3333V9.91667Z" fill="currentColor"/>
//         </svg>
//       ),
//     },
//     {
//       id: "02",
//       title: "Strategy Development",
//       desc: "we develope customized marketing strategies that aligned with your business goals.",
//       icon: ({ className }) => (
//         <svg className={className} viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M14.1667 28.3333C12.2069 28.3333 10.3653 27.9615 8.64167 27.2177C6.91806 26.474 5.41875 25.4646 4.14375 24.1896C2.86875 22.9146 1.85938 21.4153 1.11563 19.6917C0.371875 17.9681 0 16.1264 0 14.1667C0 12.2069 0.371875 10.3653 1.11563 8.64167C1.85938 6.91806 2.86875 5.41875 4.14375 4.14375C5.41875 2.86875 6.91806 1.85938 8.64167 1.11563C10.3653 0.371875 12.2069 0 14.1667 0C15.7014 0 17.1535 0.224306 18.5229 0.672917C19.8924 1.12153 21.1556 1.74722 22.3125 2.55L20.2583 4.63958C19.3611 4.07292 18.4049 3.63021 17.3896 3.31146C16.3743 2.99271 15.3 2.83333 14.1667 2.83333C11.0264 2.83333 8.35243 3.93715 6.14479 6.14479C3.93715 8.35243 2.83333 11.0264 2.83333 14.1667C2.83333 17.3069 3.93715 19.9809 6.14479 22.1885C8.35243 24.3962 11.0264 25.5 14.1667 25.5C14.9222 25.5 15.6542 25.4292 16.3625 25.2875C17.0708 25.1458 17.7556 24.9451 18.4167 24.6854L20.5417 26.8458C19.5736 27.3181 18.5583 27.684 17.4958 27.9438C16.4333 28.2035 15.3236 28.3333 14.1667 28.3333ZM24.0833 25.5V21.25H19.8333V18.4167H24.0833V14.1667H26.9167V18.4167H31.1667V21.25H26.9167V25.5H24.0833ZM12.1833 20.6833L6.1625 14.6625L8.14583 12.6792L12.1833 16.7167L26.35 2.51458L28.3333 4.49792L12.1833 20.6833Z" fill="currentColor"/>
//         </svg>
//       ),
//     },
//     {
//       id: "03",
//       title: "Campaign Launch",
//       desc: "We implement and launch marketing campaigns across various digital channels.",
//       icon: (props) => <LuSquareCode {...props} />,
//     },
//     {
//       id: "04",
//       title: "Monitore & Track",
//       desc: "We monitor campaign performance and track key metrics to ensure optimal results.",
//       icon: ({ className }) => (
//         <svg className={className} viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M19.0187 25.4646L15.0167 21.4625L17 19.4792L19.0187 21.4979L23.5167 17L25.5 18.9833L19.0187 25.4646ZM0 25.5V22.6667H12.75V25.5H0ZM0 19.8333V17H12.75V19.8333H0ZM0 14.1667V11.3333H25.5V14.1667H0ZM0 8.5V5.66667H25.5V8.5H0ZM0 2.83333V0H25.5V2.83333H0Z" fill="currentColor"/>
// </svg>
//  </svg>
//       ),
//     },
//     {
//       id: "05",
//       title: "Optimize and scale",
//       desc: "We continuously optimize campaigns based on data insights and scale successful strategies.",
//       icon: (props) => <MdOutlineLaunch {...props} />,
//     }
//   ];

//   return (
//     <section className="bg-[#2B2C34] md:py-20 py-10 md:px-6 px-2">
//       <div className="max-w-6xl mx-auto md:px-12">
        
//         <div className="text-center md:mb-16 mb-10 space-y-4">
//           <h2 className="text-[#F1F3F4] text-4xl md:text-6xl font-serif font-bold">
//             Our Marketing Process
//           </h2>
//           <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto">
//             Our proven 5-step process to maximize your digital marketing ROI
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10">
//           {steps.map((step, index) => {
//             const StepIcon = step.icon;

//             return (
//            <motion.div
//                    key={index}
//                    initial="initial"
//                    whileHover="hover"
//                    className="relative cursor-default md:p-8 py-4 px-2 bg-white/30 md:rounded-[40px] rounded-xl flex flex-col items-center text-center overflow-hidden"
//                  >
//                    <motion.div
//                      variants={{
//                        initial: { 
//                          scale: 0, 
//                          opacity: 30,
//                          backgroundColor: "#F1F1F1" 
//                        },
//                        hover: { 
//                          scale: 1, 
//                          opacity: 1,
//                        }
//                      }}
//                      transition={{ duration: 0.8, ease: "easeOut" }}
//                      style={{ originX: 1, originY: 0 }} 
//                      className="absolute inset-0 z-0 md:rounded-[40px] rounded-xl"
//                    />
             
//                    <div className="relative z-10 flex flex-col items-center w-full">
                     
//                      <motion.div 
//                        variants={{
//                          initial: { color: "#FFFFFF", borderColor: "#0E9C9D" },
//                          hover: { color: "#0E9C9D", borderColor: "#0E9C9D" }
//                        }}
//                        className="absolute md:-top-3 tp-0 md:-right-2 right-0 border rounded-full w-9 h-9 flex items-center justify-center font-bold text-xs transition-colors duration-300"
//                      >
//                        {step.id}
//                      </motion.div>
             
//                      <motion.div
//                       variants={{
//                          initial: { color: "#0E9C9D", backgroundColor: "#F1F3F4" },
//                          hover: { color: "#F1F3F4", backgroundColor: "#0E9C9D" }
//                        }}
//                       className=" md:w-20 md:h-20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
//                        {StepIcon({ className: "w-10 h-10" })  }
//                      </motion.div>
             
//                      <motion.h3 
//                        variants={{
//                          initial: { color: "#FFFFFF" },
//                          hover: { color: "#0E9C9D" }
//                        }}
//                        className="md:text-2xl text-xl font-bold mb-3 transition-colors duration-300"
//                      >
//                        {step.title}
//                      </motion.h3>
             
//                      <motion.p 
//                        variants={{
//                          initial: { color: "rgba(241, 243, 244, 0.7)" },
//                          hover: { color: "#0E9C9D" } 
//                        }}
//                        className="text-[14px] leading-relaxed font-medium px-2 transition-colors duration-300"
//                      >
//                        {step.desc}
//                      </motion.p>
//                    </div>
             
//                    <div className="absolute inset-0 border border-white/20 rounded-[40px] pointer-events-none" />
//                  </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';
import { FaPenToSquare } from "react-icons/fa6";
import { FaEye, FaDownload } from "react-icons/fa";
import { LuSquareCode } from "react-icons/lu";
import { MdOutlineLaunch } from "react-icons/md";
import { motion } from 'framer-motion';

export default function OurMarketingProcess() {
  const [activeCard, setActiveCard] = useState(null);

  const handleTap = (index) => {
    setActiveCard(index);
    setTimeout(() => setActiveCard(null), 700); // matches animation duration
  };

  const steps = [
    {
      id: "01",
      title: "Research and Analysis",
      desc: "We analyze your business, competitors, and target audience to create effective marketing strategies.",
      icon: (props) => (
        <svg {...props} viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 22.6667C7.72083 22.6667 7.05382 22.3892 6.49896 21.8344C5.9441 21.2795 5.66667 20.6125 5.66667 19.8333V6.72917L0 0H26.9167C27.6958 0 28.3628 0.277431 28.9177 0.832292C29.4726 1.38715 29.75 2.05417 29.75 2.83333V19.8333C29.75 20.6125 29.4726 21.2795 28.9177 21.8344C28.3628 22.3892 27.6958 22.6667 26.9167 22.6667H8.5ZM6.09167 2.83333L8.5 5.66667V19.8333H26.9167V2.83333H6.09167ZM17.7083 19.125L19.6917 17.1417L18.1333 15.5833H24.0833V12.75H11.3333L17.7083 19.125ZM11.3333 9.91667H24.0833L17.7083 3.54167L15.725 5.525L17.2833 7.08333H11.3333V9.91667Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: "02",
      title: "Strategy Development",
      desc: "We develop customized marketing strategies that align with your business goals.",
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1667 28.3333C12.2069 28.3333 10.3653 27.9615 8.64167 27.2177C6.91806 26.474 5.41875 25.4646 4.14375 24.1896C2.86875 22.9146 1.85938 21.4153 1.11563 19.6917C0.371875 17.9681 0 16.1264 0 14.1667C0 12.2069 0.371875 10.3653 1.11563 8.64167C1.85938 6.91806 2.86875 5.41875 4.14375 4.14375C5.41875 2.86875 6.91806 1.85938 8.64167 1.11563C10.3653 0.371875 12.2069 0 14.1667 0C15.7014 0 17.1535 0.224306 18.5229 0.672917C19.8924 1.12153 21.1556 1.74722 22.3125 2.55L20.2583 4.63958C19.3611 4.07292 18.4049 3.63021 17.3896 3.31146C16.3743 2.99271 15.3 2.83333 14.1667 2.83333C11.0264 2.83333 8.35243 3.93715 6.14479 6.14479C3.93715 8.35243 2.83333 11.0264 2.83333 14.1667C2.83333 17.3069 3.93715 19.9809 6.14479 22.1885C8.35243 24.3962 11.0264 25.5 14.1667 25.5C14.9222 25.5 15.6542 25.4292 16.3625 25.2875C17.0708 25.1458 17.7556 24.9451 18.4167 24.6854L20.5417 26.8458C19.5736 27.3181 18.5583 27.684 17.4958 27.9438C16.4333 28.2035 15.3236 28.3333 14.1667 28.3333ZM24.0833 25.5V21.25H19.8333V18.4167H24.0833V14.1667H26.9167V18.4167H31.1667V21.25H26.9167V25.5H24.0833ZM12.1833 20.6833L6.1625 14.6625L8.14583 12.6792L12.1833 16.7167L26.35 2.51458L28.3333 4.49792L12.1833 20.6833Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: "03",
      title: "Campaign Launch",
      desc: "We implement and launch marketing campaigns across various digital channels.",
      icon: (props) => <LuSquareCode {...props} />,
    },
    {
      id: "04",
      title: "Monitor & Track",
      desc: "We monitor campaign performance and track key metrics to ensure optimal results.",
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.0187 25.4646L15.0167 21.4625L17 19.4792L19.0187 21.4979L23.5167 17L25.5 18.9833L19.0187 25.4646ZM0 25.5V22.6667H12.75V25.5H0ZM0 19.8333V17H12.75V19.8333H0ZM0 14.1667V11.3333H25.5V14.1667H0ZM0 8.5V5.66667H25.5V8.5H0ZM0 2.83333V0H25.5V2.83333H0Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: "05",
      title: "Optimize and Scale",
      desc: "We continuously optimize campaigns based on data insights and scale successful strategies.",
      icon: (props) => <MdOutlineLaunch {...props} />,
    }
  ];

  return (
    <section className="bg-[#2B2C34] md:py-20 py-10 md:px-6 px-2">
      <div className="max-w-6xl mx-auto md:px-12">
        {/* Header */}
        <div className="text-center md:mb-16 mb-10 space-y-4">
          <h2 className="text-[#F1F3F4] text-4xl md:text-6xl font-serif font-bold">
            Our Marketing Process
          </h2>
          <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto">
            Our proven 5-step process to maximize your digital marketing ROI
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10">
          {steps.map((step, index) => {
            const StepIcon = step.icon;

            return (
              <motion.div
                key={index}
                initial="initial"
                animate={activeCard === index ? "hover" : "initial"} // mobile tap support
                whileHover="hover" // desktop hover
                whileTap="hover" // mobile tap triggers hover variant
                onTap={() => handleTap(index)}
                className="relative cursor-default md:p-8 py-4 px-2 bg-white/30 md:rounded-[40px] rounded-xl flex flex-col items-center text-center overflow-hidden"
              >
                <motion.div
                  variants={{
                    initial: { scale: 0, opacity: 0.3, backgroundColor: "#F1F1F1" },
                    hover: { scale: 1, opacity: 1, backgroundColor: "#F1F1F1" },
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ originX: 1, originY: 0 }}
                  className="absolute inset-0 z-0 md:rounded-[40px] rounded-xl"
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  <motion.div 
                    variants={{
                      initial: { color: "#FFFFFF", borderColor: "#0E9C9D" },
                      hover: { color: "#0E9C9D", borderColor: "#0E9C9D" }
                    }}
                    className="absolute md:-top-3 top-0 md:-right-2 right-0 border rounded-full w-9 h-9 flex items-center justify-center font-bold text-xs transition-colors duration-300"
                  >
                    {step.id}
                  </motion.div>

                  <motion.div
                    variants={{
                      initial: { color: "#0E9C9D", backgroundColor: "#F1F3F4" },
                      hover: { color: "#F1F3F4", backgroundColor: "#0E9C9D" }
                    }}
                    className="md:w-20 md:h-20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                  >
                    {StepIcon({ className: "w-10 h-10" })}
                  </motion.div>

                  <motion.h3 
                    variants={{
                      initial: { color: "#FFFFFF" },
                      hover: { color: "#0E9C9D" }
                    }}
                    className="md:text-2xl text-xl font-bold mb-3 transition-colors duration-300"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

