import React, { useState } from 'react';
import grids from "../assets/grids.png";
import htmlcss from "../assets/htmlcss.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import laravel from "../assets/laravel.png";
import mongodb from "../assets/mongodb.png";
import { motion, AnimatePresence } from 'framer-motion';

export default function OurTechnology() {
  const [activeFilter, setActiveFilter] = useState("All");

  const technology = [
    { name: "HTML5 & CSS3", des: "Modern web standards", img: htmlcss, category: "Languages" },
    { name: "JavaScript", des: "Interactive experiences", img: js, category: "Languages" },
    { name: "React.js", des: "Dynamic user interfaces", img: react, category: "Stack" },
    { name: "Node.js", des: "Server-side development", img: node, category: "Technologies" },
    { name: "PHP", des: "Backend development", img: php, category: "Languages" },
    { name: "Python", des: "AI & Machine Learning", img: python, category: "Languages" },
    { name: "Laravel", des: "PHP Framework", img: laravel, category: "Technologies" },
    { name: "MongoDB", des: "NoSQL Database", img: mongodb, category: "Tools" },
  ];

  const filters = ["All", "Languages", "Stack", "Technologies", "Tools"];

  const filteredTech = activeFilter === "All" 
    ? technology 
    : technology.filter(tech => tech.category === activeFilter);

  return (
    <section className="relative bg-white flex justify-center object-cover" style={{ backgroundImage: `url(${grids})` }}>
      <div className="relative w-full overflow-hidden bg-white/[98%] p-4 md:px-20 pb-20">
        
        {/* Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 my-10 md:my-16">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
            style={{ textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)` }}
          >
            Our Technology Stack
          </motion.h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Using modern technologies and frameworks, we build high-performance, scalable digital solutions designed to drive real business results.
          </p>
        </div>

        {/* --- FILTER BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12 relative z-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${
                activeFilter === filter 
                ? "bg-[#0FC8CA] text-white border-[#0FC8CA] shadow-lg scale-105" 
                : "bg-white text-[#4C4480] border-gray-200 hover:border-[#0FC8CA] hover:text-[#0FC8CA]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <motion.div 
          layout
          className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative z-10'
        >
          <AnimatePresence mode='popLayout'>
            {filteredTech.map((tech, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={tech.name} 
                className="bg-gray-100 md:p-8 py-4 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center transition-transform hover:scale-95 md:hover:scale-105 duration-300"
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
                <p className="text-[#4C448080] text-[14px] font-medium px-4">
                  {tech.des}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}