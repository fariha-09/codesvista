import React from 'react';
import { motion } from "framer-motion";
import grids from "../assets/grids.png"; // Your grid background asset
import { 
  FaPalette, 
  FaIdCard, 
  FaBullhorn, 
  FaShareAlt, 
  FaBoxOpen, 
  FaLaptopCode 
} from 'react-icons/fa';

export default function OurDesignServices() {
  const designOffers = [
    {
      title: "Logo Design",
      desc: "Unique and memorable logos that represent your brand identity and values.",
      icon: FaPalette,
    },
    {
      title: "Brand Identity",
      desc: "Complete brand packages including business cards, letterheads, and brand guidelines.",
      icon: FaIdCard,
    },
    {
      title: "Marketing Materials",
      desc: "Brochures, flyers, banners, and promotional materials that drive engagement.",
      icon: FaBullhorn,
    },
    {
      title: "Social Media Graphics",
      desc: "Eye-catching social media posts, covers, and advertisements for all platforms.",
      icon: FaShareAlt,
    },
    {
      title: "Packaging Design",
      desc: "Attractive product packaging that stands out on shelves and online stores.",
      icon: FaBoxOpen,
    },
    {
      title: "Digital Graphics",
      desc: "Web graphics, illustrations, and digital assets for online use.",
      icon: FaLaptopCode,
    },
  ];

  return (
    <section
           className="relative bg-white flex justify-center object-cover"
           style={{ backgroundImage: `url(${grids})` }}
           >
           <div className="relative w-full overflow-hidden bg-white/[98%] px-4 py-6  md:p-20">
              
        
        {/* Header Section */}
        <div className="text-center md:mb-20 mb-6 space-y-4">
          <motion.h2 
            initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
                      style={{
                        textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
                      }}
                    >
            Our Design Services
          </motion.h2>
          <div className="w-16 h-1 bg-[#0FC8CA] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Complete graphic design solutions for all your visual communication needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-2">
          {designOffers.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[40px] md:p-12 px-2 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-black/10 flex flex-col items-center text-center group transition-all duration-300"
              >
                {/* Double-Shadow Icon Container */}
                <div className="relative h-12 w-12 md:w-24 md:h-24 bg-white md:rounded-3xl rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex items-center justify-center md:mb-10 mb-4 group-hover:shadow-[0_20px_45px_rgba(76,68,128,0.12)] transition-shadow duration-300">
                  <Icon className="md:text-4xl text-xl text-[#1A2B4E] group-hover:text-[#AC1B9E] transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-[#AC1B9E] md:text-2xl text-xl font-bold md:mb-5 mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#4C448080] text-[16px] leading-[1.8] font-normal px-2">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}