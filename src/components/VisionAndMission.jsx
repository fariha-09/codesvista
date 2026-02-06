import React, { useState } from "react";
import { Target } from "lucide-react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import grids from "../assets/grids.png";
import { motion } from "framer-motion";

export default function VisionAndMission() {
  const [activeCard, setActiveCard] = useState(null);

  const handleTap = (card) => {
    setActiveCard(card);
    setTimeout(() => setActiveCard(null), 700);
  };

  /* -------------------- STYLES -------------------- */
  const missionCardStyle = {
    background: `radial-gradient(circle at top center, #10B9811A 10%, transparent 40%),
                 radial-gradient(circle at bottom right, #3B82F61A 10%, transparent 40%),
                 rgba(255, 255, 255, 0.9)`,
  };

  const visionCardStyle = {
    background: `radial-gradient(circle at top center, #9333EA1A 10%, transparent 40%),
                 radial-gradient(circle at bottom right, #3B82F61A 10%, transparent 40%),
                 rgba(255, 255, 255, 0.9)`,
  };

  /* -------------------- VARIANTS -------------------- */
  const cardVariants = {
    initial: { color: "#000" },
    hover: {
      color: "#fff",
      transition: { duration: 0.3 },
    },
  };

  const overlayVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      originX: 1,
      originY: 0,
    },
    hover: {
      scale: 1.15,
      opacity: 1,
      originX: 1,
      originY: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconMissionVariants = {
    initial: { backgroundColor: "#10B981", color: "#fff" },
    hover: { backgroundColor: "#fff", color: "#0FC8CA" },
  };

  const iconVisionVariants = {
    initial: { backgroundColor: "#EC4899", color: "#fff" },
    hover: { backgroundColor: "#fff", color: "#0FC8CA" },
  };

  const textVariants = {
    initial: { color: "#6B7280" },
    hover: { color: "#fff" },
  };

  /* -------------------- JSX -------------------- */
  return (
    <section
      className="relative flex justify-center"
      style={{ backgroundImage: `url(${grids})` }}
    >
      <div className="relative w-full px-4 py-14 md:px-20 bg-white/95">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-semibold text-[#0FC8CA]"
          >
            Our Mission <span className="italic">&</span> Vision
          </motion.h2>

          <p className="text-gray-600 text-lg md:text-xl">
            Leading digital transformation with innovation, expert execution,
            and a strong commitment to operational excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* ---------------- MISSION CARD ---------------- */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={activeCard === "mission" ? "hover" : "initial"}
            whileHover="hover"
            whileTap="hover"
            onTap={() => handleTap("mission")}
            style={missionCardStyle}
            className="relative overflow-hidden rounded-[40px] border border-black/10 p-6 md:p-14 text-center"
          >
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              className="absolute inset-0 bg-[#0FC8CA] z-0"
            />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                variants={iconMissionVariants}
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
              >
                <Target size={38} />
              </motion.div>

              <motion.h3
                variants={cardVariants}
                className="text-3xl font-serif font-semibold mb-4"
              >
                Our Mission
              </motion.h3>

              <motion.p variants={textVariants} className="mb-6">
                Our mission is to empower businesses with innovative software
                and digital solutions that streamline operations, accelerate
                growth, and deliver measurable results through modern
                technology.
              </motion.p>

              <div className="w-full space-y-3">
                {[
                  "Transparent process and clear communication",
                  "Focus on results, not promises",
                  "Ensure quality, reliability, and scalability",
                  "Build long-term partnerships",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={textVariants}
                    className="flex items-center gap-4 bg-black/5 p-4 rounded-2xl border border-black/10"
                  >
                    <BsCheckCircleFill size={20} />
                    <span className="text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ---------------- VISION CARD ---------------- */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={activeCard === "vision" ? "hover" : "initial"}
            whileHover="hover"
            whileTap="hover"
            onTap={() => handleTap("vision")}
            style={visionCardStyle}
            className="relative overflow-hidden rounded-[40px] border border-black/10 p-6 md:p-14 text-center"
          >
            <motion.div
              variants={overlayVariants}
              className="absolute inset-0 bg-[#0FC8CA] z-0"
            />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                variants={iconVisionVariants}
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
              >
                <FaEye size={38} />
              </motion.div>

              <motion.h3
                variants={cardVariants}
                className="text-3xl font-serif font-semibold mb-4"
              >
                Our Vision
              </motion.h3>

              <motion.p variants={textVariants} className="mb-6">
                Our vision is to lead digital transformation by redefining how
                businesses use technology to innovate, scale, and succeed in a
                connected world.
              </motion.p>

              <div className="w-full space-y-3">
                {[
                  "Transforming businesses through digital innovation",
                  "Empowering organizations for global impact",
                  "Empowering organizations for global impact",
                  "Lead industry innovation",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={textVariants}
                    className="flex items-center gap-4 bg-black/5 p-4 rounded-2xl border border-black/10"
                  >
                    <BsCheckCircleFill size={20} />
                    <span className="text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
