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
      <div className="relative w-full max-w-[1400px] overflow-hidden bg-white/[98%] px-6 md:p-10 lg:p-20">
        
        {/* Main Heading */}
        <div className="text-center mb-6 md:mb-16">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold font-serif text-[#0FC8CA] tracking-tight leading-tight px-2"
            style={{
              textShadow: `
                0 0 38px rgba(0, 206, 209, 0.45),
                0 0 20px rgba(0, 206, 209, 0.25)
              `,
            }}
          >
            Launching Success Since 2019
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 w-20 md:w-24 bg-[#0FC8CA] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 text-center lg:text-left items-center lg:items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text">
              Our Story
            </h2>

            <div className="flex flex-col md:gap-6 text-[#555] text-base md:text-[16px] leading-relaxed">
              <p className="max-w-xl">
                Founded in 2019, Astron Hosts began with a simple mission: to make
                technology accessible and beneficial for businesses of all sizes.
              </p>
              <p className="max-w-2xl">
                What started as a small team of passionate developers has grown
                into a comprehensive software house that delivers end-to-end
                digital solutions. We've helped hundreds of businesses transform
                their digital presence and achieve remarkable growth.
              </p>
              <p className="max-w-xl">
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
              <img
                src={pfimg1}
                alt="Team working together"
                className="w-full h-auto rounded-[30px] md:rounded-[40px] shadow-sm object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}