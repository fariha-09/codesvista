import React from "react";
import { motion } from "framer-motion";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiPandas,
  SiNumpy,
  SiFirebase,
  SiAmazonwebservices,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";

export default function AutomationTools() {
  const aiFrameworks = [
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "OpenAI API", icon: SiOpenai, color: "#412991" },
  ];

  const dataCloudTools = [
    { name: "Pandas / NumPy", icon: SiPandas, color: "#150458" },
    { name: "AWS Sagemaker", icon: SiAmazonwebservices, color: "#232F3E" },
    { name: "Firebase AI", icon: SiFirebase, color: "#FFCA28" },
    { name: "NLP Libraries", icon: FaRobot, color: "#0FC8CA" },
  ];

  const ToolItem = ({ name, icon: Icon, color }) => (
    <div className="flex items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 group">
      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-4 shadow-inner">
        <Icon
          style={{ color: color }}
          className="text-xl group-hover:scale-110 transition-transform"
        />
      </div>
      <span className="text-[#1A2B4E] font-semibold text-sm md:text-base">
        {name}
      </span>
    </div>
  );

  return (
    <section className="bg-white py-24 px-6 md:px-20 flex justify-center">
      <div className="w-full max-w-[1400px]">
        {/* Main Title Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight"
            style={{
              textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
            }}
          >
            Our AI Technology Stack
          </motion.h2>

          <div className="w-20 h-1 bg-[#0FC8CA] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We leverage cutting-edge frameworks and cloud technologies to build
            high-performance automation systems.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Column 1: AI & Machine Learning */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0FC8CA] font-serif">
                Intelligence Frameworks
              </h3>
              <p className="text-[#4C448080] leading-relaxed text-sm md:text-base">
                We utilize industry-leading ML libraries to design neural
                networks and predictive models tailored to your specific
                business datasets.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiFrameworks.map((tool, idx) => (
                <ToolItem key={idx} {...tool} />
              ))}
            </div>
          </div>

          {/* Column 2: Data & Cloud Infrastructure */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0FC8CA] font-serif">
                Data & Infrastructure
              </h3>
              <p className="text-[#4C448080] leading-relaxed text-sm md:text-base">
                Robust data processing and cloud-native services ensure your AI
                solutions are scalable, secure, and ready for real-world
                deployment.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dataCloudTools.map((tool, idx) => (
                <ToolItem key={idx} {...tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
