import React from 'react';
import grids from "../assets/grids.png";
import htmlcss from "../assets/htmlcss.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import laravel from "../assets/laravel.png";
import mongodb from "../assets/mongodb.png";
import { motion } from 'framer-motion';

export default function OurTechnology() {
  const technology = [
    { name: "HTML5 & CSS3", des: "Modern web standards", img: htmlcss },
    { name: "JavaScript", des: "Interactive experiences", img: js },
    { name: "React.js", des: "Dynamic user interfaces", img: react },
    { name: "Node.js", des: "Server-side development", img: node },
    { name: "PHP", des: "Backend development", img: php },
    { name: "Python", des: "AI & Machine Learning", img: python },
    { name: "Laravel", des: "PHP Framework", img: laravel },
    { name: "MongoDB", des: "NoSQL Database", img: mongodb },
  ];

  return (
    <section className="relative bg-white flex justify-center object-cover "  style={{ 
        backgroundImage: `url(${grids})`,
      }}>
          {/* 1. Container Card with Grid Overlay */}
          <div className="relative w-full overflow-hidden bg-white/[98%] p-4 md:p-20">
        
        {/* Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 my-10">
          <motion.h2
                     initial={{ y: 40, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
                     style={{
                       textShadow: `
               0 0 38px rgba(0, 206, 209, 0.45),
               0 0 20px rgba(0, 206, 209, 0.25)
             `,
                     }}
                   >
                        Our Technology Stack
                   </motion.h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We use cutting-edge technologies to build robust, scalable, and modern solutions
          </p>
        </div>

        {/* Technology Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative z-10'>
          {technology.map((tech, index) => (
            <div 
              key={index} 
              className="bg-gray-100 md:p-8 py-2 md:mb-0 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center transition-transform hover:scale-95 md:hover:scale-105 duration-300"
            >
              {/* Image Container */}
              <div className="w-20 h-20 flex items-center justify-center md:mb-6">
                <img 
                  src={tech.img} 
                  alt={tech.name} 
                  className="md:w-[64px] md:h-[64px] h-12 w-12 rounded-[12px] object-contain"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-[#4C4480] text-[18px] font-bold md:mb-2 px-4">
                {tech.name}
              </h3>
              <p className="text-[#4C448080] text-[14px] font-medium px-4 ">
                {tech.des}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}