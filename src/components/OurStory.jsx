import React from "react";
import grids from "../assets/grids.png";
import pfimg1 from "../assets/pfimg1.jpg";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      {/* Changed px-6 to px-5 and p-10 to pt-12 for better mobile spacing */}
      <div className="relative w-full max-w-[1400px] overflow-hidden bg-white/[98%] px-5 py-12 md:p-10 lg:p-20">
        
        {/* Main Heading */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold font-serif text-[#0FC8CA] tracking-tight leading-tight px-2"
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
            className="h-1 w-16 md:w-24 bg-[#0FC8CA] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: TEXT */}
          {/* Aligned items to 'start' on mobile for a cleaner 'Story' look */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight w-full text-left">
              Our Story
            </h2>

            {/* Paragraph Container */}
            {/* Added 'text-left' and 'md:text-left' to ensure consistency across views */}
            <div className="flex flex-col gap-4 md:gap-6 text-[#555] text-sm md:text-base leading-relaxed text-left">
              <p className="w-full">
                Founded in 2019, <strong>Astron Hosts</strong> began with a simple mission: to make
                technology accessible and beneficial for businesses of all sizes.
              </p>
              
              {/* Hidden on very small screens to keep mobile view concise, or visible if preferred */}
              <p className="w-full">
                What started as a small team of passionate developers has grown
                into a comprehensive software house that delivers end-to-end
                digital solutions. We've helped hundreds of businesses transform
                their digital presence.
              </p>
              
              <p className="w-full">
                Our journey has been marked by continuous learning, innovation,
                and an unwavering commitment to client success. Every project we
                undertake is an opportunity to push boundaries and create
                something extraordinary.
              </p>
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