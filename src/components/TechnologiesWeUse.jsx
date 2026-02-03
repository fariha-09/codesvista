import React from 'react';
import { motion } from 'framer-motion';
import grids from "../assets/grids.png";
import htmltechnology from "../assets/htmltechnology.png";
import jstechnology from "../assets/jstechnology.png";
import reacttechnology from "../assets/reacttechnology.png";
import vuetechnology from "../assets/vuetechnology.png";
import bootstraptechnology from "../assets/bootstraptechnology.png";
import sasstechnology from "../assets/sasstechnology.png";
import phptechnology from "../assets/phptechnology.png";
import nodetechnology from "../assets/nodetechnology.png";
import pythontechnology from "../assets/pythontechnology.png";
import mysqltechnology from "../assets/mysqltechnology.png";
import awstechnology from "../assets/awstechnology.png";
import gittechnology from "../assets/gittechnology.png";

export default function TechnologiesWeUse() {
  const frontend = [
    { name: "HTML5 & CSS3", img: htmltechnology },
    { name: "Javascript ES6+", img: jstechnology },
    { name: "React.js", img: reacttechnology },
    { name: "Vue.js", img: vuetechnology },
    { name: "Bootstrap 5", img: bootstraptechnology },
    { name: "SASS/SCSS", img: sasstechnology },
  ];

  const backend = [
    { name: "PHP & Laravel", img: phptechnology },
    { name: "Node.js", img: nodetechnology },
    { name: "Python & Django", img: pythontechnology },
    { name: "MySQL & MongoDB", img: mysqltechnology },
    { name: "AWS & Cloud", img: awstechnology },
    { name: "Git & Version Control", img: gittechnology },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section 
      className="relative bg-white flex justify-center bg-fixed bg-center" 
      style={{ backgroundImage: `url(${grids})`, backgroundSize: 'cover' }}
    >
      {/* Container Card */}
      <div className="relative w-full overflow-hidden bg-white/95 backdrop-blur-sm p-4 sm:p-10 md:p-20">
        
        {/* Header Content */}
        <motion.div 
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-8 md:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[#0fc8ca]">
            Technologies We Use
          </h1>
          <p className="text-gray-600 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            We use the latest and most reliable technologies to build your website for peak performance and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          
          {/* Frontend Column */}
          <motion.div 
            {...fadeInUp}
            className="space-y-6 md:space-y-8"
          >
            <div className="border-l-4 border-[#0fc8ca] pl-4">
              <h3 className="text-[#4C4480] font-bold text-xl md:text-2xl mb-2">Modern Frontend</h3>
              <p className="text-[#4C448080] text-sm md:text-base leading-relaxed">
                Creating beautiful, interactive, and user-friendly interfaces that engage your visitors across all devices.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-3">
              {frontend.map((tech, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-3 py-2 md:px-4 md:py-2 border border-gray-100 rounded-xl bg-white shadow-sm hover:border-[#4C4480] hover:shadow-md transition-all cursor-default group"
                >
                  <img src={tech.img} alt={tech.name} className="w-5 h-5 md:w-6 md:h-6 object-contain grayscale group-hover:grayscale-0 transition-all" />
                  <span className="text-[#4C4480] font-semibold text-[13px] md:text-[14px] whitespace-nowrap">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Column */}
          <motion.div 
            {...fadeInUp}
            className="space-y-6 md:space-y-8"
          >
            <div className="border-l-4 border-[#0fc8ca] pl-4">
              <h3 className="text-[#4C4480] font-bold text-xl md:text-2xl mb-2">Powerful Backend</h3>
              <p className="text-[#4C448080] text-sm md:text-base leading-relaxed">
                Built for scalability, security, and high performance to handle complex business logic and large user bases.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-3">
              {backend.map((tech, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-3 py-2 md:px-4 md:py-2 border border-gray-100 rounded-xl bg-white shadow-sm hover:border-[#4C4480] hover:shadow-md transition-all cursor-default group"
                >
                  <img src={tech.img} alt={tech.name} className="w-5 h-5 md:w-6 md:h-6 object-contain grayscale group-hover:grayscale-0 transition-all" />
                  <span className="text-[#4C4480] font-semibold text-[13px] md:text-[14px] whitespace-nowrap">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}