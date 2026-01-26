import React from "react";
import grids from "../assets/grids.png";
import map from "../assets/map.png";
import { FaChevronDown } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <section
      className="relative bg-white flex justify-center object-cover "
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay  */}
      <div className="relative w-full flex flex-col gap-6 px-6 md:flex-row overflow-hidden bg-white/[98%] p-4 md:p-20">
        {/* Left Side: Form Card */}
        <div className="flex-1 bg-[#F1F3F4] p-6 md:p-16 rounded-t-[40px] md:rounded-tr-none md:rounded-l-[40px] flex flex-col justify-center">
          <h1 className="text-[#4C4480] text-3xl font-bold md:mb-10 mb-4">
            Get In Touch
          </h1>

          <div className="space-y-5 flex flex-col">
            {/* Email Input */}
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full bg-transparent border border-[#4C448060] rounded-full px-6 py-4 text-sm focus:outline-none focus:border-[#AC1B9E] transition-colors"
            />

            {/* Subject Select Styled as Input */}
            <div className="relative">
              <select className="w-full bg-transparent border border-[#4C448060] rounded-full px-6 py-4 text-sm appearance-none focus:outline-none focus:border-[#AC1B9E] text-gray-500">
                <option>Subject</option>
                <option>Web Development</option>
                <option>App Development</option>
              </select>
              <FaChevronDown className="absolute right-6 top-9 -translate-y-1/2 text-[#00A9A5] pointer-events-none" />
            </div>

            {/* Message Textarea */}
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-transparent border border-[#4C4480] rounded-[30px] px-6 py-4 text-sm focus:outline-none focus:border-[#AC1B9E] transition-colors resize-none"
            />

            {/* Submit Button */}
            <div className="flex md:justify-end justify-center mt-4">
              <button className="bg-[#AC1B9E] text-[#F1F3F4] px-12 py-3 rounded-full text-lg font-semibold shadow-lg shadow-purple-200 hover:bg-[#8e1682] transition-all active:scale-95">
                Submit Now
              </button>
            </div>
          </div>
        </div>

       
        <div className="flex-1 rounded-b-[40px] md:rounded-bl-none md:rounded-r-[40px] overflow-hidden shadow-sm min-h-[400px]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Rawalpindi,Pakistan&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
