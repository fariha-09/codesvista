import {
  FaSearch,
  FaDatabase,
  FaBrain,
  FaShieldAlt,
  FaRobot,
  FaVial,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AutomationProcess() {
  const steps = [
    {
      id: "01",
      title: "Workflow Discovery",
      desc: "Identifying repetitive tasks and manual bottlenecks to design your custom automation roadmap.",
      icon: (props) => <FaSearch {...props} />,
    },
    {
      id: "02",
      title: "Data Preparation",
      desc: "Dataset collection, cleaning, and labeling to create high-quality training data for AI models.",
      icon: (props) => <FaDatabase {...props} />,
    },
    {
      id: "03",
      title: "AI & ML Engineering",
      desc: "Building custom Machine Learning models and neural networks for predictive analytics.",
      icon: (props) => <FaBrain {...props} />,
    },
    {
      id: "04",
      title: "System Integration",
      desc: "Connecting AI agents with your CRM, ERP, and marketing tools for seamless operation.",
      icon: (props) => <FaChartLine {...props} />,
    },
    {
      id: "05",
      title: "Cyber Security",
      desc: "Implementing secure access control and vulnerability testing to protect your automated assets.",
      icon: (props) => <FaShieldAlt {...props} />,
    },
    {
      id: "06",
      title: "Robotic Hardware",
      desc: "Integrating IoT and intelligent hardware systems for physical automation and research.",
      icon: (props) => <FaRobot {...props} />,
    },
    {
      id: "07",
      title: "Testing & Validation",
      desc: "Rigorous stress-testing of AI accuracy and automation speed to ensure 100% reliability.",
      icon: (props) => <FaVial {...props} />,
    },
    {
      id: "08",
      title: "Deployment & Scale",
      desc: "Launching your smart systems and monitoring performance for long-term business growth.",
      icon: (props) => <FaRocket {...props} />,
    },
  ];

  return (
    <section className="bg-[#2B2C34] md:py-20 py-10 md:px-6 px-2">
      <div className="max-w-6xl mx-auto md:px-12">
        <div className="text-center md:mb-16 mb-10 space-y-4">
          <h2 className="text-[#F1F3F4] text-4xl md:text-6xl font-serif font-bold">
            Our <span className="text-[#0E9C9D]">Automation</span> Lifecycle
          </h2>
          <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            A strategic 8-step process to transform manual operations into
            intelligent, autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10">
          {steps.map((step, index) => {
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
                      backgroundColor: "#F1F1F1",
                    },
                    hover: {
                      scale: 1,
                      opacity: 1,
                    },
                  }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  style={{ originX: 1, originY: 0 }}
                  className="absolute inset-0 z-0 md:rounded-[40px] rounded-xl"
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  <motion.div
                    variants={{
                      initial: { color: "#FFFFFF", borderColor: "#0E9C9D" },
                      hover: { color: "#0E9C9D", borderColor: "#0E9C9D" },
                    }}
                    className="absolute md:-top-3 md:-right-2 top-0 right-0 border rounded-full w-9 h-9 flex items-center justify-center font-bold text-xs transition-colors duration-300"
                  >
                    {step.id}
                  </motion.div>

                  <motion.div
                    variants={{
                      initial: { color: "#0E9C9D", backgroundColor: "#F1F3F4" },
                      hover: { color: "#F1F3F4", backgroundColor: "#0E9C9D" },
                    }}
                    className=" md:w-20 md:h-20 h-16 w-16 rounded-2xl flex items-center justify-center md:mb-6 mb-1 shadow-sm"
                  >
                    {StepIcon({ className: "md:w-10 md:h-10 w-6 h-6" })}
                  </motion.div>

                  <motion.h3
                    variants={{
                      initial: { color: "#FFFFFF" },
                      hover: { color: "#0E9C9D" },
                    }}
                    className="md:text-2xl text-xl font-bold md:mb-3 mb-2 transition-colors duration-300"
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    variants={{
                      initial: { color: "#FFFFFF" },
                      hover: { color: "#0E9C9D" },
                    }}
                    className="md:text-[14px] text-[12px] leading-relaxed font-medium md:px-2 transition-colors duration-300"
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
