import React from 'react';
import grids from "../assets/grids.png";
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Ahmed Khan",
    location: "pakistan",
    image: "https://randomuser.me/api/portraits/men/1.jpg", 
    text: "We've been using CodesVista for ongoing software technical expertise have been outstanding for our IT support services."
  },
  {
    name: "Sarah Ali",
    role: "Director",
    image: "https://randomuser.me/api/portraits/women/2.jpg", 
    text: "We've been using CodesVista for ongoing software technical expertise have been outstanding for our IT support services."
  },
  {
    name: "Usman Malik",
    role: "Founder,",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "We've been using CodesVista for ongoing software technical expertise have been outstanding for our IT support services."
  }
];

export default function WhatOurClientsSay() {
  return (
    <section className="relative bg-white flex justify-center" style={{ backgroundImage: `url(${grids})`, backgroundSize: 'cover' }}>
      <div className="relative w-full max-w-[1400px] overflow-hidden bg-white/[98%] p-10 md:p-20">
        
        {/* Header Content */}
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
              What Our Clients Say
            </motion.h2>
          <p className="text-[#2B2C3480]/50 text-[16px] md:text-xl max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about our<br className="hidden md:block"/> work
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col h-full">
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#FACC15] text-lg" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#2B2C3499]/60 text-[16px] italic leading-relaxed mb-8 flex-grow">
                "{item.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[#2B2C34] font-bold text-[18px]">{item.name}</h4>
                  <span className="text-[#2B2C3499]/60 text-[14px] font-medium uppercase tracking-wider">
                    {item.role || item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}