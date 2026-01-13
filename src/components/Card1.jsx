import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import phone1a from "../assets/phone1a.png";
import phone1b from "../assets/phone1b.png";
import phone1c from "../assets/phone1c.png";

export default function Card1() {
  return (
    <div className="w-full flex justify-center">
      <section className="bg-[#F1F3F4] w-full p-8 flex justify-center rounded-[143px] shadow-2xl">
        {/* Container for the card */}
        <div className="flex flex-col items-center  space-y-6">
          <h1 className="text-[#4C4480] text-[42.2px] font-medium tracking-widest">
            PRYDUMANO
          </h1>

          <div className="flex justify-between items-center gap-12 ">
            <div className="w-full max-w-lg">
              <img
                src={phone1a}
                alt="phone1a"
                className="w-52 h-auto mix-blend-multiply object-contain"
              />
            </div>
            <div className="w-full max-w-lg">
              <img
                src={phone1b}
                alt="phone1b"
                className="w-52 h-auto mix-blend-multiply object-contain"
              />
            </div>
            <div className="w-full max-w-lg">
              <img
                src={phone1c}
                alt="phone1c"
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
