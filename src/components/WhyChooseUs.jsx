import React from "react";
import grids from "../assets/grids.png";
import {
  FaRocket,
  FaAward,
  FaHeadset,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Rapid Design Delivery",
      desc: "We turn concepts into reality with speed and precision. Using advanced prototyping tools, we reduce wait times so you can launch faster.",
      icon: <FaRocket className="text-[#F1F3F4] text-3xl" />,
      points: [
        "24-48 hour initial concept turnaround",
        "Real-time collaboration via Figma",
        "Agile design sprints",
      ],
    },
    {
      title: "Perfect Quality",
      desc: "Excellence is our standard. We guarantee high-fidelity designs that align perfectly with your brand identity, offering revisions until you are thrilled.",
      icon: <FaAward className="text-[#F1F3F4] text-3xl" />,
      points: [
        "100% satisfaction guarantee",
        "Rigorous visual consistency checks",
        "Unlimited revisions during the design phase",
      ],
    },
    {
      title: "Collaborative Support",
      desc: "We don't just work for you; we work with you. Our team maintains open lines of communication to ensure your vision is captured in every pixel.",
      icon: <FaHeadset className="text-[#F1F3F4] text-3xl" />,
      points: [
        "Direct access to your lead designer",
        "Regular progress video updates",
        "Free maintenance included",
      ],
    },
    {
      title: "Expert Team",
      desc: "Our designers are certified experts in the latest industry standards. We blend artistic talent with user-experience.",
      icon: <FaUsers className="text-[#F1F3F4] text-3xl" />,
      points: [
        "Experts in Adobe XD & Figma",
        "Certified developers",
        "Continuous training",
      ],
    },
    {
      title: "Security First",
      desc: "Enterprise-grade security measures to protect your data and ensure your business operations remain safe.",
      icon: <FaShieldAlt className="text-[#F1F3F4] text-3xl" />,
      points: ["SSL encryption", "Regular security audits", "GDPR compliant"],
    },
    {
      title: "Scalable Solutions",
      desc: "Future-proof solutions that grow with your business. Built for scalability and long-term success.",
      icon: <FaChartLine className="text-[#F1F3F4] text-3xl" />,
      points: [
        "Cloud-ready architecture",
        "Easy upgrades",
        "Performance optimization",
      ],
    },
  ];

  return (
    <section
      className="relative bg-white flex justify-center object-cover "
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      <div className="relative w-full overflow-hidden bg-white/[98%] p-4 md:px-20">
        {/* 2. Header Content */}
        <div className="md:max-w-4xl mx-auto text-center space-y-4 relative z-10 mt-10 md:mt-10 mb-6 ">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text "
            style={{
              textShadow: `
               0 0 38px rgba(0, 206, 209, 0.45),
               0 0 20px rgba(0, 206, 209, 0.25)
             `,
            }}
          >
            Why Choose Codes Vista
          </motion.h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We combine creative vision, technical mastery, and strategic
            thinking to deliver
            <br /> design solutions that elevate your brand.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-2 relative z-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileHover="hover"
              className="relative md:p-8 px-2 py-4 md:rounded-[40px] rounded-xl border border-gray-100 shadow-sm transition-all flex flex-col items-center text-center overflow-hidden bg-[#F8F9FA]"
            >
              <motion.div
                variants={{
                  initial: { scaleX: 0, opacity: 0 },
                  hover: { scaleX: 1, opacity: 1 },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gray-200 z-0 origin-center"
              />

              <div className="relative z-10 flex flex-col items-center w-full">
                <motion.div
                  variants={{
                    hover: { y: -5 },
                  }}
                  className="bg-[#0E9C9D] md:w-16 md:h-16 h-12 w-12 rounded-2xl flex items-center justify-center md:mb-6 shadow-lg shadow-[#0E9C9D]/20"
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-[#4C4480] md:text-2xl text-lg font-bold md:mb-4">
                  {item.title}
                </h3>
                {/* <p className="text-[#4C448080] text-[15px] leading-relaxed mb-6">
                  {item.desc}
                </p> */}

                <div className="w-full md:space-y-3 text-left md:pl-4">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#34D399] text-lg shrink-0" />
                      <span className="text-[#4C448080] text-sm font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
