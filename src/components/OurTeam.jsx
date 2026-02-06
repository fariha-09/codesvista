import React from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import funder from "../assets/funder.jpg";


const teamData = [1, 2, 3]; // Placeholder for 3 team members

export default function OurTeam() {
  return (
    <section className="bg-[#0E9C9D] md:py-20 py-10 px-2 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-16">
          <h2
           className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#F1F3F4] tracking-tight"
          
          >
            Our Team
          </h2>
          <p className="text-[#F1F3F4] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
           Leading digital transformation with innovative solutions, technical expertise, and a steadfast commitment to excellence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
          {teamData.map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col items-center text-center md:py-10"
            >
              {/* Profile Image Placeholder */}
              <div className="w-full aspect-square rounded-[24px] md:mb-6 flex items-center justify-center text-white flex-col">
                <div className="flex flex-row justify-center items-center ">
                  <img src={funder} alt="Team Member" className="aspect-square rounded-[24px] "/>
                  {/* <FaUser className="w-12 h-12 mb-2" />
                  <span className="text-xs opacity-70 text-center">CEO</span> */}
                </div>
              </div>

              <h3 className="text-[#4C4480] font-bold text-[24px] md:mb-1">
                Name
              </h3>
              <p className="text-[#4C4480] font-semibold text-[16px] md:mb-4">
                Operations Manager
              </p>
              <p className="text-[#4C448080]/50 text-[15px] font-sans leading-relaxed w-60">
                Technology expert specializing in scalable architectures and
                cutting-edge development practices.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import React from 'react';
// import grids from "../assets/grids.png";

// export default function OurTeam() {
//   return (
//    <section className="relative bg-[#F1F3F4] flex justify-center object-cover ">
//               <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
//               <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#4C4480]">
// Our Team              </h1>
//               <p className="text-[#4C448080] text-lg md:text-[16px] max-w-3xl mx-auto leading-relaxed">
//                Driving digital transformation through innovation, expertise, and unwavering commitment to excellence
//               </p>
//             </div>
//              </section>
//   );
// }
