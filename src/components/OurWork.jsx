import React from "react";
import grids from "../assets/grids.png";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Clients from "./Clients";
import { motion } from "framer-motion";

export default function OurWork() {
  const cards=[Card1,Card2,Card3,Card4 ]
  return (
    <section
      className="relative bg-white flex justify-center object-cover "
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      <div className="relative w-full max-w-[1400px] bg-white/[98%] p-10 md:p-20">
        {/* 2. Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
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
            Our Work Speaks For Itself
          </motion.h2>

          <p className="text-[#4C448080] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent projects and see how we've helped
            <br /> businesses achieve their goals{" "}
          </p>
        </div>

       <div className="flex flex-col items-center">
          {cards.map((CardComponent, index) => (
            <div 
              key={index}
              className="sticky w-full flex justify-center mb-20"
              style={{ top: `${100 + (index * 40)}px` }}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="w-full flex justify-center"
              >
                <CardComponent />
              </motion.div>
            </div>
          ))}
        </div>

        <div className="relative z-20 mt-20">
          <Clients />
        </div>
      </div>
    </section>
  );
}
