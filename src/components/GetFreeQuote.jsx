import React from "react";
import grids from "../assets/grids.png";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export default function GetFreeQuote() {
  return (
    <section
      className="relative bg-white flex justify-center object-cover "
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      <div className="relative w-full   overflow-hidden bg-white/[98%] p-4 md:p-20">
        <div className=" mx-auto w-full max-w-[900px] bg-[#F1F3F4] rounded-[60px] p-6  md:p-20">
          {/* 2. Header Content */}
          <div className="max-w-4xl mx-auto text-center space-y-2 md:space-y-4 md:mb-12 mb-4">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl md:pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text "
              style={{
                textShadow: `
      0 0 38px rgba(0, 206, 209, 0.45),
      0 0 20px rgba(0, 206, 209, 0.25)
    `,
              }}
            >
              Get a Free Quote
            </motion.h2>

            <p className="text-[#4C448080] text-sm md:text-base max-w-2xl mx-auto">
              Tell us about your project and receive a detailed quote within 24
              hours
            </p>
          </div>

          {/* 3. Form Section */}
          <form className="max-w-xl mx-auto space-y-6">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[#4C4480] text-[16px] font-semibold ml-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="name"
                className="w-full bg-transparent border border-[#4C4480] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#AC1B9E]"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[#4C4480] text-[16px] font-semibold ml-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="name"
                className="w-full bg-transparent border border-[#4C4480] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#AC1B9E]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#4C4480] text-[16px] font-semibold ml-2">
                Email{" "}
                <span className="text-[#4C448099]/60 text-[14px] font-normal">
                  (required)
                </span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-transparent border border-[#4C4480] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#AC1B9E]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#4C4480] text-[16px] font-semibold ml-2">
                Address
              </label>
              <input
                type="text"
                className="w-full bg-transparent border border-[#4C4480] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#AC1B9E]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#4C4480] text-[16px] font-semibold ml-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full bg-transparent border border-[#4C4480] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#AC1B9E]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#4C4480] text-[16px] font-semibold ml-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  underline="none"
                  className="w-full bg-transparent border border-[#4C4480] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#AC1B9E]"
                />
                <button
                  type="button"
                  className="absolute  right-4 top-10 h-8 -translate-y-1/2 text-[#4C4480] border-l pl-3 border-[#4C4480]"
                >
                  <FaEye size={14} />
                </button>
              </div>
            </div>

            {/* Re-enter Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[#4C4480] text-[16px] font-semibold ml-2">
                Re enter your password
              </label>
              <div className="relative">
                <input
                  type="password"
                  underline="none"
                  className="w-full bg-transparent border border-[#4C4480] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#AC1B9E]"
                />
                <button
                  type="button"
                  className="absolute right-4  top-10 h-8 -translate-y-1/2 text-[#4C4480] border-l pl-3 border-[#4C4480]"
                >
                  <FaEye size={14} />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:pt-4">
              <button className="bg-[#AC1B9E] text-[#F1F3F4] px-10 py-3 rounded-xl text-[16px] font-bold hover:bg-[#8e1682] transition-all active:scale-95 shadow-lg shadow-purple-200">
                Join us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
