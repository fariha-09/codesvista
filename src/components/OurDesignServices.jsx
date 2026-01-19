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
           <div className="relative w-full max-w-[1400px] overflow-hidden bg-white/[98%] p-10 md:p-20">
              
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                className="bg-white rounded-[40px] p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-black/10 flex flex-col items-center text-center group transition-all duration-300"
              >
                {/* Double-Shadow Icon Container */}
                <div className="relative w-24 h-24 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex items-center justify-center mb-10 group-hover:shadow-[0_20px_45px_rgba(76,68,128,0.12)] transition-shadow duration-300">
                  <Icon className="text-4xl text-[#1A2B4E] group-hover:text-[#AC1B9E] transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-[#AC1B9E] text-2xl font-bold mb-5 tracking-tight">
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