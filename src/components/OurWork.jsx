import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import grids from "../assets/grids.png";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Clients from "./Clients";

// Wrapper to handle the scaling logic for each card
const StickyCard = ({ CardComponent, index, total }) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // This scales the card down slightly (to 0.9) as it gets stuck
  // The scale effect is stronger for cards earlier in the stack
const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index) * 0.02]);
  return (
   <div 
      ref={container}
      className="sticky w-full flex justify-center"
      // CHANGED: Increased the multiplier (40) so more of the "under" cards show
      style={{ top: `${100 + (index * 40)}px`, marginBottom: '10vh' }} 
    >
      <motion.div
        style={{ scale }}
        className="w-full flex justify-center origin-top shadow-2xl rounded-[20px] md:rounded-[143px]"
      >
        <CardComponent />
      </motion.div>
    </div>
  );
};

export default function OurWork() {
  const cards = [Card1, Card2, Card3, Card4];
  
  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{ backgroundImage: `url(${grids})` }}
    >
      <div className="relative w-full bg-white/[98%] p-5 md:p-20">
        
        {/* Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-10 mt-10 md:mb-16">
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
            Our Work Speaks For Itself
          </motion.h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Take a look at some of our recent projects and see how we've helped
            <br className="hidden md:block" /> businesses achieve their goals
          </p>
        </div>

        {/* Sticky Stacking Container */}
        <div className="flex flex-col items-center">
          {cards.map((CardComponent, index) => (
            <StickyCard 
              key={index} 
              index={index} 
              total={cards.length} 
              CardComponent={CardComponent} 
            />
          ))}
        </div>

        {/* Clients Section */}
        {/* <div className="relative z-20 mt-10 md:mt-20">
          <Clients />
        </div> */}
      </div>
    </section>
  );
}