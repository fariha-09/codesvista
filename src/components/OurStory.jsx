import React, { useState } from "react";
import grids from "../assets/grids.png";
import pfimg1 from "../assets/pfimg1.jpg";
import { motion } from "framer-motion";

export default function OurStory() {
    const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      <div className="relative w-full overflow-hidden bg-white/[98%] px-5 py-2 md:px-10 lg:p-20">
        
        {/* Main Heading */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-5xl lg:text-6xl font-semibold font-serif text-[#0FC8CA] tracking-tight leading-tight px-2"
            style={{
              textShadow: `
                0 0 30px rgba(0, 206, 209, 0.3),
                0 0 15px rgba(0, 206, 209, 0.15)
              `,
            }}
          >
            Launching Success Since 2019
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 w-16 md:w-24 bg-[#0FC8CA] mx-auto mt-2 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: TEXT */}
          {/* Aligned items to 'start' on mobile for a cleaner 'Story' look */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 items-start">
 <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-5xl lg:text-6xl font-semibold font-serif text-[#0FC8CA] tracking-tight leading-tight px-2"
            style={{
              textShadow: `
                0 0 30px rgba(0, 206, 209, 0.3),
                0 0 15px rgba(0, 206, 209, 0.15)
              `,
            }}
          >              Our Story
            </motion.h2>

            {/* Paragraph Container */}
            {/* Added 'text-left' and 'md:text-left' to ensure consistency across views */}
            <div className="flex flex-col gap-4 md:gap-6 text-[#555] text-sm md:text-base leading-relaxed text-left">
  <p className="md:w-full">
                Founded in 2019 by Mr. Raja Danish, a visionary full-stack developer, Codes TechVista started with a clear mission: to make technology accessible, efficient, and valuable for businesses of all sizes. Alongside him, Muhammad Danyial, our Marketing Director, helped build a results-driven team committed to delivering professional digital solutions that drive real business growth.
              </p>
              
              {showMore && (
    <>
      <p className="md:w-full">
        From a small freelancing venture, Codes TechVista has grown into a full-service software house with over 40 skilled in-house professionals across specialized departments — each led by dedicated project managers and team leads to ensure seamless execution. We prioritize clear communication, precise revisions, client convenience, and provide free demos, budget-friendly solutions, and a 2-month complimentary support period.
      </p>

      <p className="md:w-full">
        Our journey is fueled by innovation, disciplined execution, and client-centric service. We optimize business processes using automation, AI, and modern tools, allowing clients to focus on growth while we handle the technology.
      </p>

      <p className="md:w-full">
        Our mission remains steadfast: to deliver fully professional, high-quality digital solutions that empower businesses, accelerate growth, and drive meaningful digital transformation globally.
      </p>
    </>
  )}

  {/* READ MORE BUTTON */}
  <button
    onClick={() => setShowMore(!showMore)}
    className="mt-2 text-[#0FC8CA] font-semibold hover:underline transition"
  >
    {showMore ? "Read Less ▲" : "Read More ▼"}
  </button>
</div>
</div>

          {/* RIGHT COLUMN: IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src={pfimg1}
                alt="Team working together"
                className="w-full h-auto rounded-[25px] md:rounded-[40px] shadow-lg object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}