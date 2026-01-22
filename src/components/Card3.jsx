import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import phone3a from "../assets/phone3a.png";
import phone3b from "../assets/phone3b.png";
import phone3c from "../assets/phone3c.png";

export default function Card3() {
  return (
    <div className="w-full flex justify-center">
      <section className="bg-[#F1F3F4] w-full p-8 flex justify-center md:rounded-[143px] rounded-[20px] shadow-2xl shadow-black-300">
        {/* Container for the card */}
        <div className="flex flex-col items-center  space-y-6">
          <h1 className="text-[#4C4480] md:text-[42.2px] text-[24px] font-medium tracking-widest">
            Daily Done{" "}
          </h1>

          <div className="flex justify-between items-center gap-12 ">
            <div className="w-full max-w-lg ">
              <img
                src={phone3a}
                alt="phone3a"
                className="w-52 h-auto mix-blend-multiply object-contain"
              />
            </div>
            <div className="w-full max-w-lg">
              <img
                src={phone3b}
                alt="phone3b"
                className="w-52 h-auto mix-blend-multiply object-contain"
              />
            </div>
            <div className="w-full max-w-lg">
              <img
                src={phone3c}
                alt="phone3c"
                className="w-52 h-auto mix-blend-multiply object-contain"
              />
            </div>
          </div>

          <div className="w-14 h-14 rounded-full border border-[#4C4480] flex items-center justify-center text-[#4C4480] hover:bg-[#4C4480] hover:text-white transition-all cursor-pointer">
            <FaArrowRightLong size={24} />
          </div>
        </div>
      </section>
    </div>
  );
}
