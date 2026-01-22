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
      <div className="relative w-full max-w-[1400px] flex justify-center overflow-hidden bg-white/[98%] md:pt-10  md:px-20">
        
        {/* Main Teal Container - Added responsive padding and rounded corners for mobile aesthetic */}
        <div className="bg-[#0E9C9D] w-full py-6 md:py-20 px-6 flex flex-col items-center text-center">
          
          <h1 className="text-white text-3xl sm:text-4xl md:text-[48px] font-serif font-bold md:mb-6 leading-tight">
            Ready to Build your Custom Software?
          </h1>

          <p className="text-[#F1F3F4] text-base md:text-[16px] max-w-2xl md:mb-12 mb-6 leading-relaxed">
            Let's create software solutions that drive your business forward.
            Contact us today to
            <br className="hidden md:block" /> discuss your software development project.
          </p>

          {/* Button Group - Stacks on mobile, side-by-side on sm screens up */}
          <div className="flex flex-row sm:flex-row md:gap-4 gap-2 justify-center">
            <button className="flex items-center justify-center gap-2  bg-[#AC1B9E] hover:bg-[#8e1682] text-[#F1F3F4] px-2 py-2  md:px-8 md:py-4 rounded-[8px] md:font-semibold md:text-lg text-sm transition-all active:scale-95 shadow-lg">
              <FaCode />
              <span>Start Development</span>
            </button>

             <button className="flex items-center justify-center gap-2  bg-white text-[#0E9C9D] hover:bg-gray-100 px-2 py-2   md:px-8 md:py-4 rounded-[8px] md:font-semibold md:text-lg text-sm  transition-all active:scale-95 shadow-lg">
              <FaCamera />
              <span>View Software Projects</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}