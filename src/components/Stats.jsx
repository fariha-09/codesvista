import React, { useEffect, useRef } from 'react';
import { FaTools, FaUsers, FaCalendarAlt, FaHeadset } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";

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

  // Round the decimal numbers to integers
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
  const statsData = [
    { icon: <FaTools size={36} />, value: 800, suffix: "+", label: "PROJECTS COMPLETED" },
    { icon: <FaUsers size={36} />, value: 3000, suffix: "+", label: "HAPPY CLIENTS" },
    { icon: <FaCalendarAlt size={36} />, value: 15, suffix: "+", label: "YEARS EXPERIENCE" },
    { icon: <FaHeadset size={36} />, value: 12000, suffix: "+", label: "SUPPORT HOURS" },
  ];

  return (
    <section className='bg-[#0E9C9D] py-16 md:py-24 px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12'>
        {statsData.map((item, index) => (
          <div key={index} className='flex flex-col items-center text-[#FFFFFF] text-center'>
            <div className="mb-4 opacity-90">
              {item.icon}
            </div>
            <h1 className='font-bold text-[36px] md:text-[54px] mt-2 leading-none'>
              <Counter value={item.value} suffix={item.suffix} />
            </h1>
            <p className='font-semibold text-[12px] md:text-[14px] mt-2 tracking-wider uppercase opacity-80'>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}