import React from "react";
import grids from "../assets/grids.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function StartConversation() {
  return (
    <section
      className="relative bg-white flex justify-center object-cover "
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] p-10 md:p-20">
        {/* Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 md:mb-16 mb-6">
           <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl md:pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text "
            style={{
              textShadow: `
      0 0 38px rgba(0, 206, 209, 0.45),
      0 0 20px rgba(0, 206, 209, 0.25)
    `,
            }}
          >
            Let's Start a Conversation
          </motion.h2>
         
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>

        {/* Triple Contact Bar - Exactly as in Figma */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full border border-[#4C4480] rounded-[40px] overflow-hidden shadow-sm bg-white">
          {/* Phone Section */}
          <div className="flex items-center md:p-10 p-4 gap-6">
            <div className="w-14 h-14 bg-[#4C4480] rounded-full flex items-center justify-center flex-shrink-0">
              <FaPhoneAlt className="text-[#F1F3F4] text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#4C4480] font-normal text-[16px] tracking-widest uppercase mb-1">
                Phone
              </span>
              <a
                href="tel:+923485987369"
                className="text-[#4C4480] font-normal text-[20px] hover:underline decoration-2"
              >
                +923485987369
              </a>
            </div>
          </div>

          {/* Email Section (Dark Center) */}
          <div className="bg-[#4C4480] flex items-center md:p-10 p-4 gap-6 text-white border-y md:border-y-0 md:border-x border-white/10">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <FaEnvelope className="text-[#4C4480] text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#F1F3F4] font-normal- text-[16px] tracking-widest uppercase mb-1">
                Email
              </span>
              <a
                href="mailto:info@codesvista.com"
                className="text-[#F1F3F4] font-normal text-lg hover:underline decoration-2"
              >
                info@codesvista.com
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="flex items-center md:p-10 p-4 gap-6">
            <div className="w-14 h-14 bg-[#4C4480] rounded-full flex items-center justify-center flex-shrink-0">
              <FaMapMarkerAlt className="text-[#F1F3F4] text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#4C4480] font-normal text-[16px] tracking-widest uppercase mb-1">
                Address
              </span>
              <p className="text-[#4C4480] font-medium text-[14px] leading-relaxed">
                Office # S-50, S-92, S-138, 2nd Floor, Malikabad Plaza, Murree
                Road, Rawalpindi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
