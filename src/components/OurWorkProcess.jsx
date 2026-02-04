import React, { useState } from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { FaLightbulb, FaPalette, FaPenToSquare } from "react-icons/fa6";
import { FaEye, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function OurWorkProcess() {
  const [activeCard, setActiveCard] = useState(null);

  const handleTap = (index) => {
    setActiveCard(index);
    setTimeout(() => setActiveCard(null), 700); // matches animation duration
  };

  const steps = [
    {
      id: "01",
      title: "Brief Research",
      desc: "We understand your business, target audience, and design preferences.",
      icon: <IoIosChatbubbles size={32} />,
    },
    {
      id: "02",
      title: "Concept Development",
      desc: "We brainstorm and create initial design concepts based on your requirements.",
      icon: <FaLightbulb size={32} />,
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
      icon: <FaEye size={32} />,
    },
    {
      id: "05",
      title: "Revisions",
      desc: "We refine the designs based on your feedback until you're satisfied.",
      icon: <FaPenToSquare size={32} />,
    },
    {
      id: "06",
      title: "Final Delivery",
      desc: "We deliver all final files in the required formats for immediate use.",
      icon: <FaDownload size={32} />,
    },
  ];

  return (
    <section className="bg-[#0E9C9D] md:py-20 py-10 px-3 md:px-6 font-serif">
      <div className="md:max-w-6xl mx-auto md:px-12">
        {/* Header */}
        <div className="text-center md:mb-16 mb-4 space-y-4">
          <h2 className="text-[#F1F3F4] text-4xl md:text-6xl font-serif font-bold">
            Our Work Process
          </h2>
          <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto">
            Our creative process ensures we deliver designs that exceed your expectations.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate={activeCard === index ? "hover" : "initial"} // Mobile tap support
              whileHover="hover" // Desktop hover
              whileTap="hover" // Mobile tap triggers hover variant
              onTap={() => handleTap(index)}
              className="relative cursor-default md:p-8 py-4 px-2 bg-white/30 rounded-xl md:rounded-[40px] flex flex-col items-center text-center overflow-hidden"
            >
              {/* Background overlay */}
              <motion.div
                variants={{
                  initial: { scale: 0, opacity: 0.3, backgroundColor: "#F1F1F1" },
                  hover: { scale: 1, opacity: 1, backgroundColor: "#F1F1F1" },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ originX: 1, originY: 0 }}
                className="absolute inset-0 z-0 rounded-xl md:rounded-[40px]"
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center w-full">
                <motion.div
                  variants={{
                    initial: { color: "#FFFFFF", borderColor: "#0E9C9D" },
                    hover: { color: "#0E9C9D", borderColor: "#0E9C9D" },
                  }}
                  className="absolute md:-top-3 top-0 md:-right-2 right-0 border rounded-full w-9 h-9 flex items-center justify-center font-bold text-xs transition-colors duration-300"
                >
                  {step.id}
                </motion.div>

                <motion.div
                  variants={{
                    initial: { color: "#0E9C9D", backgroundColor: "#F1F3F4" },
                    hover: { color: "#F1F3F4", backgroundColor: "#0E9C9D" },
                  }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                >
                  {step.icon}
                </motion.div>

                <motion.h3
                  variants={{
                    initial: { color: "#FFFFFF" },
                    hover: { color: "#0E9C9D" },
                  }}
                  className="md:text-2xl text-xl font-bold mb-3 transition-colors duration-300"
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  variants={{
                    initial: { color: "rgba(241, 243, 244, 0.7)" },
                    hover: { color: "#0E9C9D" },
                  }}
                  className="md:text-[14px] text-[12px] leading-relaxed font-medium px-2 transition-colors duration-300"
                >
                  {step.desc}
                </motion.p>
              </div>

              <div className="absolute inset-0 border border-white/20 md:rounded-[40px] rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// import React from "react";
// import { IoIosChatbubbles } from "react-icons/io";
// import { FaLightbulb, FaPalette, FaPenToSquare } from "react-icons/fa6";
// import { FaEye, FaDownload } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function OurWorkProcess() {
//   const steps = [
//     {
//       id: "01",
//       title: "Brief Research",
//       desc: "We understand your business, target audience, and design preferences.",
//       icon: <IoIosChatbubbles size={32} />,
//     },
//     {
//       id: "02",
//       title: "Concept Development",
//       desc: "We brainstorm and create initial design concepts based on your requirements.",
//       icon: <FaLightbulb size={32} />,
//     },
//     {
//       id: "03",
//       title: "Design Creation",
//       desc: "Our designers create the initial designs using professional tools.",
//       icon: <FaPalette size={32} />,
//     },
//     {
//       id: "04",
//       title: "Review & Feedback",
//       desc: "We review the designs and provide feedback for improvements.",
//       icon: <FaEye size={32} />,
//     },
//     {
//       id: "05",
//       title: "Revisions",
//       desc: "We refine the designs based on your feedback until you're satisfied.",
//       icon: <FaPenToSquare size={32} />,
//     },
//     {
//       id: "06",
//       title: "Final Delivery",
//       desc: "We deliver all final files in the required formats for immediate use.",
//       icon: <FaDownload size={32} />,
//     },
//   ];

//   return (
//     <section className="bg-[#0E9C9D] md:py-20 py-10 px-3 md:px-6 font-serif">
//       <div className="md:max-w-6xl mx-auto md:px-12">
//         {/* Header Section */}
//         <div className="text-center md:mb-16 mb-4 space-y-4">
//           <h2 className="text-[#F1F3F4] text-4xl md:text-6xl font-serif font-bold">
//             Our Work Process
//           </h2>
//           <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto">
//             Our creative process ensures we deliver designs that exceed your
//             expectations.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial="initial"
//               whileHover="hover"
//               className="relative cursor-default md:p-8 py-4 px-2 bg-white/30 rounded-xl md:rounded-[40px] flex flex-col items-center text-center overflow-hidden"
//             >
//               <motion.div
//                 variants={{
//                   initial: {
//                     scale: 0,
//                     opacity: 30,
//                     backgroundColor: "#F1F1F1",
//                   },
//                   hover: {
//                     scale: 1,
//                     opacity: 1,
//                   },
//                 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 style={{ originX: 1, originY: 0 }}
//                 className="absolute inset-0 z-0 rounded-xl md:rounded-[40px]"
//               />

//               <div className="relative z-10 flex flex-col items-center w-full">
//                 <motion.div
//                   variants={{
//                     initial: { color: "#FFFFFF", borderColor: "#0E9C9D" },
//                     hover: { color: "#0E9C9D", borderColor: "#0E9C9D" },
//                   }}
//                   className="absolute md:-top-3 top-0 md:-right-2 right-0 border rounded-full w-9 h-9 flex items-center justify-center font-bold text-xs transition-colors duration-300"
//                 >
//                   {step.id}
//                 </motion.div>

//                 <motion.div
//                   variants={{
//                     initial: { color: "#0E9C9D", backgroundColor: "#F1F3F4" },
//                     hover: { color: "#F1F3F4", backgroundColor: "#0E9C9D" },
//                   }}
//                   className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
//                 >
//                   {step.icon}
//                 </motion.div>

//                 <motion.h3
//                   variants={{
//                     initial: { color: "#FFFFFF" },
//                     hover: { color: "#0E9C9D" },
//                   }}
//                   className="md:text-2xl text-xl font-bold mb-3 transition-colors duration-300"
//                 >
//                   {step.title}
//                 </motion.h3>

//                 <motion.p
//                   variants={{
//                     initial: { color: "rgba(241, 243, 244, 0.7)" },
//                     hover: { color: "#0E9C9D" },
//                   }}
//                   className="md:text-[14px] text-[12px] leading-relaxed font-medium px-2 transition-colors duration-300"
//                 >
//                   {step.desc}
//                 </motion.p>
//               </div>

//               <div className="absolute inset-0 border border-white/20 rounded-[40px] pointer-events-none" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
