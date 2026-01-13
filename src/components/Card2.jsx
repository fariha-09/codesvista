import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import phone2a from "../assets/phone2a.png";
import phone2b from "../assets/phone2b.png";
import phone2c from "../assets/phone2c.png";

export default function Card2() {
  return (
    <div className="w-full flex justify-center">
      <section className="bg-[#F1F3F4] w-full p-8 flex justify-center rounded-[143px] shadow-2xl">
        {/* Container for the card */}
        <div className="flex flex-col items-center  space-y-6">
          <h1 className="text-[#4C4480] text-[42.2px] font-medium tracking-widest">
            Link App
          </h1>

          <div className="flex justify-between items-center gap-12 ">
            <div className="w-full max-w-lg ">
              <img
                src={phone2a}
                alt="phone2a"
                className="w-52 h-auto mix-blend-multiply object-contain"
              />
            </div>
            <div className="w-full max-w-lg">
              <img
                src={phone2b}
                alt="phone2b"
                className="w-52 h-auto mix-blend-multiply object-contain"
              />
            </div>
            <div className="w-full max-w-lg">
              <img
                src={phone2c}
                alt="phone2c"
                className="w-52 h-auto mix-blend-multiply object-contain"
              />
            </div>
          </div>

          {/* Circle with Arrow */}
          <div className="w-14 h-14 rounded-full border border-[#4C4480] flex items-center justify-center text-[#4C4480] hover:bg-[#4C4480] hover:text-white transition-all cursor-pointer">
            <FaArrowRightLong size={24} />
          </div>
        </div>
      </section>
    </div>
  );
}
