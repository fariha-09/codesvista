import React from "react";
import { FaCamera, FaCode } from "react-icons/fa";
import grids from "../assets/grids.png";

export default function SoftwareClosingSection() {
  return (
    <section
      className="relative bg-white flex justify-center object-cover bg-center"
      style={{ backgroundImage: `url(${grids})` }}
    >
      {/* Container with responsive side padding */}
      <div className="relative w-full max-w-[1400px] flex justify-center overflow-hidden bg-white/[98%] pt-10 px-4 md:px-20">
        
        {/* Main Teal Container - Added responsive padding and rounded corners for mobile aesthetic */}
        <div className="bg-[#0E9C9D] w-full py-12 md:py-20 px-6 rounded-t-2xl md:rounded-t-none flex flex-col items-center text-center">
          
          <h1 className="text-white text-3xl sm:text-4xl md:text-[48px] font-serif font-bold mb-6 leading-tight">
            Ready to Build your Custom Software?
          </h1>

          <p className="text-[#F1F3F4] text-base md:text-[16px] max-w-2xl mb-12 leading-relaxed">
            Let's create software solutions that drive your business forward.
            Contact us today to
            <br className="hidden md:block" /> discuss your software development project.
          </p>

          {/* Button Group - Stacks on mobile, side-by-side on sm screens up */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 bg-[#AC1B9E] hover:bg-[#8e1682] text-[#F1F3F4] px-8 py-4 rounded-[8px] font-semibold text-lg transition-all active:scale-95 shadow-lg w-full sm:w-auto">
              <FaCode />
              <span>Start Development</span>
            </button>

            <button className="flex items-center justify-center gap-2 bg-white text-[#0E9C9D] hover:bg-gray-100 px-8 py-4 rounded-[8px] font-semibold text-lg transition-all active:scale-95 shadow-lg w-full sm:w-auto">
              <FaCamera />
              <span>View Software Projects</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}