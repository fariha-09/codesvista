
import { FaPenToSquare } from "react-icons/fa6";
import { FaEye, FaDownload,FaPencilRuler,FaCode,FaRocket } from "react-icons/fa";
import { LuSquareCode } from "react-icons/lu";
import { MdOutlineLaunch } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function OurSoftwareDevelopmentProcess() {
  const steps = [
    {
      id: "01",
      title: "Requirements Gathering",
      desc: "We discuss your requirements, goals, and vision for the website.",
      icon: FaRegFileLines,
    },
    {
      id: "02",
      title: "System Architecture",
      desc: "We create wireframes and designs that align with your brand identity.",
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
      title: "Developmet",
      desc: "Our developers build your website using the latest technologies.",
      icon: (props) => <FaCode {...props} />,
    },
    {
      id: "05",
      title: "Testing & QA",
      desc: "We rigorously test the website to ensure functionality, performance, and security.",
      icon: (props) => <MdOutlineLaunch {...props} />,
    },
    {
      id: "06",
      title: "Deployment & Support",
      desc: "Our developers build your website using the latest technologies.",
      icon:  (props) => <FaRocket {...props} />,
    }
  ];

  return (
    <section className="bg-[#2B2C34] py-20 px-6">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#F1F3F4] text-4xl md:text-6xl font-serif font-bold">
            Our Development Process
          </h2>
          <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto">
            Our proven 6-step process ensures quality delivery and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {steps.map((step, index) => {
            // FIX: Identify the component here, inside the map
            const StepIcon = step.icon;

            return (
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
                                     {StepIcon({ className: "w-10 h-10" })  }
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
            );
          })}
        </div>
      </div>
    </section>
  );
}



