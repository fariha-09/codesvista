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
    <section className="bg-[#2B2C34] md:py-20 py-8 md:px-6">
      <div className="md:max-w-6xl mx-auto px-1 md:px-12">
        
        <div className="text-center md:mb-16 mb-2 space-y-4">
          <h2 className="text-[#F1F3F4] text-2xl md:text-6xl font-serif font-bold">
            Our Development Process
          </h2>
          <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto">
            A specialized 9-step lifecycle for building high-performance Flutter applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10">
          {steps.map((step, index) => {
            // FIX: Identify the component here, inside the map
            const StepIcon = step.icon;

            return (
             <motion.div
                   key={index}
                   initial="initial"
                   whileHover="hover"
                   className="relative cursor-default md:p-8 p-4 bg-white/30 rounded-[40px] flex flex-col items-center text-center overflow-hidden"
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
                      className=" md:w-20 md:h-20 w-12 h-12  rounded-2xl flex items-center justify-center md:mb-6 shadow-sm">
                       {StepIcon({ className: "md:w-10 md:h-10 w-6 h-6" })  }
                     </motion.div>
             
                     <motion.h3 
                       variants={{
                         initial: { color: "#FFFFFF" },
                         hover: { color: "#0E9C9D" }
                       }}
                       className="md:text-2xl text-lg font-bold md:mb-3 mb-1 transition-colors duration-300"
                     >
                       {step.title}
                     </motion.h3>
             
                     <motion.p 
                       variants={{
                         initial: { color: "rgba(241, 243, 244, 0.7)" },
                         hover: { color: "#0E9C9D" } 
                       }}
                       className="md:text-[14px] text-[12px] leading-relaxed font-medium px-2 transition-colors duration-300"
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

