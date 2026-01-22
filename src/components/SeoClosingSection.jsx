import React from "react";
import { FaRocket, FaCode } from "react-icons/fa";
import grids from "../assets/grids.png";


export default function SeoClosingSection() {

  return (
    <section
      className="relative bg-white flex justify-center object-cover bg-center"
      style={{ backgroundImage: `url(${grids})` }}
    >
      <div className="relative w-full max-w-[1400px] flex justify-center overflow-hidden bg-white/[98%] md:pt-10 md:px-20">
        {/* Main Teal Container */}
        <div className="bg-[#0E9C9D] w-full md:py-20 py-10 px-6 flex flex-col items-center text-center">
          <h1 className="text-white text-4xl md:text-[48px] font-serif font-bold mb-6">
            Ready to Build your Search Rankings?
          </h1>

          <p className="text-[#F1F3F4] text-lg md:text-[16px] max-w-2xl md:mb-12 mb-6 leading-relaxed">
            Let's create SEO & Content strategies that drive your business forward.
            Contact us today to
            discuss your SEO & Content Writing project.
          </p>

           <div className="flex flex-row sm:flex-row md:gap-4 gap-2 justify-center">
             <button className="flex items-center justify-center gap-2  bg-[#AC1B9E] hover:bg-[#8e1682] text-[#F1F3F4] px-3 py-2  md:px-8 md:py-4 rounded-[8px] md:font-semibold md:text-lg text-sm transition-all active:scale-95 shadow-lg">
              <FaCode />
              <span>Start SEO Campaign</span>
            </button>

           <button className="flex items-center justify-center gap-2  bg-white text-[#0E9C9D] hover:bg-gray-100 px-3 py-2   md:px-8 md:py-4 rounded-[8px] md:font-semibold md:text-lg text-sm  transition-all active:scale-95 shadow-lg">
              <FaRocket />
              <span>Get Free SEO Audit</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
