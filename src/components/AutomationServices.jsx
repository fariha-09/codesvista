import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaDatabase,
  FaNetworkWired,
  FaShieldAlt,
  FaLayerGroup,
  FaCommentDots,
  FaHeadset,
  FaCogs,
} from "react-icons/fa";
import grids from "../assets/grids.png"; // Your grid background asset

export default function AutomationServices() {
  const services = [
    {
      title: "Smart Automation Solutions",
      desc: "Reduce manual work and increase productivity with intelligent workflow systems.",
      icon: FaCogs,
      features: [
        "Business Process Automation",
        "Software & Marketing Automation",
        "CRM & ERP Integration",
      ],
    },
    {
      title: "AI & Machine Learning",
      desc: "Data-driven solutions for smart decision making and trend prediction.",
      icon: FaBrain,
      features: [
        "ML Model Development",
        "Predictive Analytics",
        "Recommendation Systems",
      ],
    },
    {
      title: "Data Science & Analysis",
      desc: "Turn raw data into meaningful business insights and visual dashboards.",
      icon: FaDatabase,
      features: [
        "Data Cleaning & Processing",
        "Visualization Dashboards",
        "Forecasting & Strategy",
      ],
    },
    {
      title: "Deep Learning & Research",
      desc: "Advanced neural networks for image, voice, and pattern recognition.",
      icon: FaLayerGroup,
      features: [
        "Neural Network Design",
        "Natural Language Processing",
        "AI Prototyping",
      ],
    },
    {
      title: "Cyber Security Solutions",
      desc: "Enterprise-level security to safeguard your digital assets and user data.",
      icon: FaShieldAlt,
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Compliance Audits",
      ],
    },
    {
      title: "AI Model Training",
      desc: "High-quality data preparation for accurate and high-performance AI models.",
      icon: FaNetworkWired,
      features: [
        "Dataset Labeling",
        "Model Testing",
        "Performance Optimization",
      ],
    },
    {
      title: "Chatbots & AI Assistants",
      desc: "24/7 automated communication for support and lead generation.",
      icon: FaCommentDots,
      features: [
        "WhatsApp & Web Bots",
        "Lead Generation Automation",
        "Customer Support AI",
      ],
    },
    {
      title: "Dialer & Marketing Tools",
      desc: "Powerful communication systems for sales teams and call centers.",
      icon: FaHeadset,
      features: [
        "Auto Dialer Systems",
        "Bulk SMS & Email Tools",
        "WhatsApp API Integration",
      ],
    },
    {
      title: "Robotics & IoT",
      desc: "Intelligent hardware integration for industrial and research applications.",
      icon: FaRobot,
      features: [
        "AI-Powered Robotics",
        "Smart Control Systems",
        "IoT Automation",
      ],
    },
  ];

  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{ backgroundImage: `url(${grids})` }}
    >
      <div className="relative w-full max-w-[1400px] overflow-hidden bg-white/[98%] p-10 md:p-20">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#0E9C9D] font-bold tracking-widest uppercase text-sm"
          >
            Efficiency Redefined
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#2B2C34] text-4xl md:text-6xl font-serif font-bold"
          >
            Intelligent Systems & <br />{" "}
            <span className="text-[#0E9C9D]">Automation</span>
          </motion.h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We design smart solutions that automate repetitive tasks, improve
            workflow efficiency, and reduce operational costs.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#0E9C9D] transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#F1F3F4] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0E9C9D] transition-colors duration-300">
                <service.icon className="text-2xl text-[#0E9C9D] group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#2B2C34] mb-4 group-hover:text-[#0E9C9D] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#4C448080] mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* Feature List */}
              <ul className="space-y-3 border-t border-gray-100 pt-6">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-2 text-sm font-medium text-[#4C4480]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0E9C9D]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
