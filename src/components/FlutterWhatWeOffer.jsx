import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaPaintBrush,
  FaCode,
  FaCreditCard,
  FaRocket,
} from "react-icons/fa";
import { FiLayout } from "react-icons/fi";

import grids from "../assets/grids.png";

const offers = [
  {
    title: "Cross-Platform Development",
    desc: "High-performance iOS and Android apps built with a single Flutter codebase for faster delivery.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Flutter-Ready UI/UX",
    desc: "Modern, interactive designs optimized for Flutter widgets and buttery-smooth animations.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Secure Backend & APIs",
    desc: "Robust backend integration with Firebase or Node.js, ensuring secure data and real-time sync.",
    icon: <FaCode />,
  },
  {
    title: "Admin Dashboards",
    desc: "Centralized CMS to manage your app content, users, and transactions efficiently in real-time.",
    icon: <FiLayout />,
  },
  {
    title: "Payment Integration",
    desc: "Seamless integration of Stripe, PayPal, and local gateways like JazzCash/EasyPaisa.",
    icon: <FaCreditCard />,
  },
  {
    title: "App Store Deployment",
    desc: "Complete handling of publishing and optimization for both Google Play and Apple App Store.",
    icon: <FaRocket />,
  },
];

export default function FlutterWhatWeOffer() {
  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      <div className="relative w-full overflow-hidden bg-white/[98%] py-6a md:py-20">
        <div className="bg-[#F1F3F4] md:py-20 py-8 md:px-6 w-full">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text "
              style={{
                textShadow: `
                            0 0 38px rgba(0, 206, 209, 0.45),
                            0 0 20px rgba(0, 206, 209, 0.25)
                          `,
              }}
            >
              What we Offer for Flutter
            </motion.h2>
            <p className="text-gray-600 text-lg md:text-[24px] max-w-3xl mx-auto leading-relaxed mt-4">
              Build Scalable & High-Performance Mobile Applications with our
              comprehensive Flutter technology solutions.
            </p>
          </div>

          {/* Offer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 mx-4 md:mx-10">
            {offers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white md:p-10 py-4 rounded-[24px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center transition-transform hover:scale-[1.05] group"
              >
                {/* Icon Container */}
                <div className="bg-[#F1F3F4] w-[72px] h-[72px] rounded-[16px] flex items-center justify-center md:mb-6 mb-2 border border-gray-100 shadow-sm group-hover:bg-[#0FC8CA] transition-colors duration-300">
                  <span className="text-[#0FC8CA] text-3xl group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-[#0FC8CA] font-semibold text-[22px] md:mb-3 mb-1">
                  {item.title}
                </h3>

                <p className="text-[#4C448080]/50 text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
