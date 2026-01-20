import React from 'react';
import grids from "../assets/grids.png";
import pfimg1 from "../assets/pfimg1.jpg";
import pfimg2 from "../assets/pfimg2.jpg";
import pfimg3 from "../assets/pfimg3.jpg";
import { FaEye } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



export default function OurDesignPortfolio() {
  return (
   <section className="relative bg-white flex justify-center object-cover "  style={{ 
       backgroundImage: `url(${grids})`,
     }}>
         {/* 1. Container Card with Grid Overlay */}
         <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] p-2 md:p-20">
   
           {/* 2. Header Content */}
           <div className="max-w-4xl mx-auto text-center md:space-y-4 space-y-2 relative z-10 md:mb-16 mb-6">
              <motion.h2
                                  initial={{ y: 40, opacity: 0 }}
                                  whileInView={{ y: 0, opacity: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.6 }}
                                  className="text-4xl md:text-5xl md:pb-2 pb-0 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text mt-6"
                                  style={{
                                    textShadow: `
                            0 0 38px rgba(0, 206, 209, 0.45),
                            0 0 20px rgba(0, 206, 209, 0.25)
                          `,
                                  }}
                                >
                                   Our Design Portfolio
                                </motion.h2>
             <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              See some of our recent design work across different categories.
             </p>
           </div>


           <div className='flex md:gap-8 gap-2 md:justify-center overflow-x-scroll md:overflow-x-visible md:pb-10 pb-0'>
            <img src={pfimg1} alt='portfolio-image' className='rounded-[10px] w-64 md:w-[392px]'/>
            <img src="/pfimg2.jpg" alt='portfolio-image' className='rounded-[10px] w-64 md:w-[392px]'/>
            <img src={pfimg3} alt='portfolio-image' className='rounded-[10px] w-64 md:w-[392px]'/>

           </div>


<div className="md:mt-16 mt-6 flex flex-row justify-center relative z-10">
  <button className="flex items-center gap-2 bg-[#AC1B9E] hover:bg-[#8a157e] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
    <FaEye /> 
    <Link to="/portfolio">View Full Portfolio</Link>
  </button>
</div>


           </div>
           </section>
  );
}
