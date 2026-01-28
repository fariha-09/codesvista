import React, { useEffect, useRef } from 'react';
import { FaTools, FaUsers, FaCalendarAlt, FaHeadset } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import grids from "../assets/grids.png";

// Reusable Counter Component
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const displayValue = useTransform(springValue, (latest) => 
    Math.round(latest).toLocaleString()
  );

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

export default function Stats() {
  const stats = [
    { icon: <FaTools size={30} />, value: 800, suffix: "+", label: "PROJECTS COMPLETED" },
    { icon: <FaUsers size={30} />, value: 3000, suffix: "+", label: "HAPPY CLIENTS" },
    { icon: <FaCalendarAlt size={30} />, value: 15, suffix: "+", label: "YEARS EXPERIENCE" },
    { icon: <FaHeadset size={30} />, value: 12000, suffix: "+", label: "SUPPORT HOURS" },
  ];

  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{ backgroundImage: `url(${grids})` }}
    >
      <div className="relative w-full overflow-hidden bg-white/[98%] px-4 py-16 md:p-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 md:mb-16 mb-10">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight"
            style={{
              textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
            }}
          >
            Real Results We've Achieved
          </motion.h2>

          <div className="w-16 h-1 bg-[#0FC8CA] mx-auto"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            See the measurable impact our services have on our clients
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[30px] md:p-8 p-3 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-white text-[#AC1B9E] rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.06)] flex items-center justify-center md:mb-6 mb-2 transition-transform group-hover:scale-110">
                {item.icon}
              </div>

              {/* Data Value with Counter Hooked In */}
              <h3 className="text-[#0FC8CA] text-3xl md:text-4xl font-extrabold mb-2">
                <Counter value={item.value} suffix={item.suffix} />
              </h3>

              {/* Label */}
              <p className="text-[#0FC8CA] font-medium text-[10px] md:text-sm uppercase tracking-wider px-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}