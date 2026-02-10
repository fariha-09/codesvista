import React from "react";
import grids from "../assets/grids.png";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function OurCEO() {
  return (
    <section
      className="relative bg-white flex justify-center"
      style={{ backgroundImage: `url(${grids})` }}
    >
      <div className="relative w-full overflow-hidden bg-white/[98%] px-4 py-4 md:px-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold font-serif text-[#0FC8CA]"
            style={{
              textShadow: `
                0 0 38px rgba(0,206,209,0.45),
                0 0 20px rgba(0,206,209,0.25)
              `,
            }}
          >
            Meet Our CEO
          </motion.h2>

          <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
            Visionary leadership driving innovation, growth, and long-term
            success
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* TEXT CARD (LEFT) */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              h-full
              relative bg-[#F1F3F480]/60 backdrop-blur-sm
              p-6 md:p-10 rounded-[32px] border border-gray-100
              hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,175,193,0.35)]
              transition-all duration-300
              flex flex-col justify-center
            "
          >
            <FaQuoteLeft className="text-[#0FC8CA] text-4xl mb-4" />

            <p className="text-[#4C4480] text-lg md:text-xl leading-relaxed mb-6 italic">
              “At CodestechVista, our mission is simple build digital solutions
              that empower businesses, inspire users, and create lasting value.
              We believe innovation, integrity, and collaboration are the keys
              to sustainable success.”
            </p>

            <h3 className="text-[#4C4480] text-2xl font-bold">
              Raja Danish
            </h3>
            <p className="text-[#4C448080] font-medium mb-8">
              CEO & Founder, CodesVista
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="text-[#0FC8CA] text-2xl font-bold">8+</h4>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div>
                <h4 className="text-[#0FC8CA] text-2xl font-bold">120+</h4>
                <p className="text-sm text-gray-500">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-[#0FC8CA] text-2xl font-bold">60+</h4>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* IMAGE CARD (RIGHT) */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              h-full
              relative rounded-[32px] overflow-hidden
              shadow-[0_25px_60px_rgba(0,175,193,0.35)]
              hover:scale-[1.02] transition-all duration-300
            "
          >
            <img
              src="/ceoo.png"
              alt="CEO"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
