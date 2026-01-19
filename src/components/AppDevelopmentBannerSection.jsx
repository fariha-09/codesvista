import React from "react";
import { PiBuildingApartmentFill, PiClipboardTextBold } from "react-icons/pi";
import {
  FaShoppingCart,
  FaTags,
  FaPencilRuler,
  FaLightbulb,
} from "react-icons/fa";
import {  FaCodeBranch, FaStar } from "react-icons/fa";
import { FaMobileAlt, FaCode, FaRocket } from 'react-icons/fa';
import grid from "../assets/grid.jpg";
import Typewriter from "typewriter-effect";


export default function AppDevelopmentBannerSection() {
   const stats = [
  {
    label: "50+",
    sub: "Apps Developed",
    color: "bg-[#3B82F6]",
    icon: () => (
      <FaMobileAlt size={20} className="text-[#2B2C34]" />
    ),
  },
  {
    label: "2-Week",
    sub: "Sprint Cycles",
    color: "bg-[#4ADE80]",
    icon: () => (
      <FaCodeBranch size={20} className="text-[#2B2C34]" />
    ),
  },
  {
    label: "4.9/5",
    sub: "App Store Rating",
    color: "bg-[#FF6800]",
    icon: () => (
      <FaStar size={20} className="text-[#2B2C34]" />
    ),
  },
];
  return (
    <section className="relative bg-[#0fc8ca] min-h-[88vh] w-full flex justify-center lg:px-10 font-sans">
      {/* 2. INNER CARD - Changed min-h-screen to h-[85vh] or h-full to prevent bottom overflow */}
      <div className="relative w-full max-w-[1500px] h-full lg:h-[88vh] overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src={grid}
            alt="grid overlay"
            className="w-full h-full object-cover opacity-[5%] mix-blend-overlay"
          />
        </div>

        {/* 3. THE CONTENT */}
        <div className="container mx-auto px-10 relative z-10 flex flex-col lg:flex-row justify-between h-full lg:py-4">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2 space-y-4  ">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 hover:bg-[#F1F3F4] hover: cursor-default ">
              <PiBuildingApartmentFill size={20} className="text-[#0e9c9d]" />
              <span className="text-white font-medium text-[14px] whitespace-nowrap hover:text-black">
                App Development
              </span>
            </div>

            {/* Heading Fix: Adjusted leading and size */}
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1]">
          <Typewriter
    options={{
      strings: [
        "Professional App Development Services",
        "Custom iOS & Android Solutions",
        "Cross-Platform Mobile Experiences",
        "Scalable Enterprise App Solutions"
      ],
      autoStart: true,
      loop: true,
      delay: 75,
      deleteSpeed: 50,
    }}
  />
</h1>

            <p className="text-[#F1F3F4] text-[18px] font-normal max-w-xl leading-relaxed">
  Empower your business with high-performance mobile applications 
  <br /> built for iOS and Android using cutting-edge frameworks 
  <br /> to deliver seamless user experiences and drive growth.
</p>

            <div className="flex flex-wrap gap-3">
              {/* Tags ... */}
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-[12px] font-bold text-[#4C4480] ">
                <FaMobileAlt size={15} className="text-[#3B82F6] " /> MOBILE FIRST
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-[12px] font-bold text-[#4C4480]">
                <FaCode size={15} className="text-[#FF6800]" />{" "}
               SCALABLE CODE
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-[12px] font-bold text-[#4C4480]">
                <FaRocket size={15} className="text-[#4ADE80]" /> HIGH PERFORMANCE
              </span>
            </div>

            <div className="flex flex-wrap gap-4 ">
              {/* Buttons ... */}
              <button className="flex items-center gap-2 bg-white hover:bg-[#00B8B8] text-[14px] text-[#2B2C34] px-8 py-3 rounded-xl font-bold shadow-lg transition-transform active:scale-95">
                <PiClipboardTextBold size={20} /> Get Free Quote
              </button>
              <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-[14px] text-[#4C4480] px-8 py-3 rounded-xl font-bold shadow-lg transition-transform active:scale-95">
                <FaShoppingCart /> Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Removed pt-18, replaced with auto-centering */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end gap-5 mt-18">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-[40px] shadow-2xl w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-white text-sm font-semibold opacity-90">
                  Design Portfolio
                </span>
              </div>

              <div className="space-y-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white/10 p-4 rounded-2xl flex items-center gap-4 border border-white/10 backdrop-blur-sm"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center shadow-inner`}
                      >
                        <Icon className="text-[#4C4480] text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl leading-none">
                          {stat.label}
                        </h4>
                        <p className="text-white/70 text-sm">{stat.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                () => (
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H2V14ZM8.95 12.55L5.4 9L6.85 7.55L8.95 9.65L13.15 5.45L14.6 6.9L8.95 12.55Z"
                      fill="#F1F3F4"
                    />
                  </svg>
                ),
                () => (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 16H12.5C12.7833 16 13.0458 15.9292 13.2875 15.7875C13.5292 15.6458 13.7 15.45 13.8 15.2L15.9 10.3C15.9333 10.2167 15.9583 10.1333 15.975 10.05C15.9917 9.96667 16 9.88333 16 9.8V9C16 8.71667 15.9042 8.47917 15.7125 8.2875C15.5208 8.09583 15.2833 8 15 8H10.4L11 4.6C11.0333 4.43333 11.025 4.275 10.975 4.125C10.925 3.975 10.8417 3.84167 10.725 3.725L10 3L5.4 8C5.26667 8.13333 5.16667 8.28333 5.1 8.45C5.03333 8.61667 5 8.8 5 9V14C5 14.55 5.19583 15.0208 5.5875 15.4125C5.97917 15.8042 6.45 16 7 16ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                      fill="#F1F3F4"
                    />
                  </svg>
                ),
                () => (
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.25 18L0 15.8L2.85 7.95C3.1 8.18333 3.37083 8.37917 3.6625 8.5375C3.95417 8.69583 4.26667 8.81667 4.6 8.9L1.85 16.45L0.25 18ZM10.75 18L9.15 16.45L6.4 8.9C6.73333 8.81667 7.04583 8.69583 7.3375 8.5375C7.62917 8.37917 7.9 8.18333 8.15 7.95L11 15.8L10.75 18ZM5.5 8C4.66667 8 3.95833 7.70833 3.375 7.125C2.79167 6.54167 2.5 5.83333 2.5 5C2.5 4.35 2.6875 3.77083 3.0625 3.2625C3.4375 2.75417 3.91667 2.4 4.5 2.2V0H6.5V2.2C7.08333 2.4 7.5625 2.75417 7.9375 3.2625C8.3125 3.77083 8.5 4.35 8.5 5C8.5 5.83333 8.20833 6.54167 7.625 7.125C7.04167 7.70833 6.33333 8 5.5 8ZM5.5 6C5.78333 6 6.02083 5.90417 6.2125 5.7125C6.40417 5.52083 6.5 5.28333 6.5 5C6.5 4.71667 6.40417 4.47917 6.2125 4.2875C6.02083 4.09583 5.78333 4 5.5 4C5.21667 4 4.97917 4.09583 4.7875 4.2875C4.59583 4.47917 4.5 4.71667 4.5 5C4.5 5.28333 4.59583 5.52083 4.7875 5.7125C4.97917 5.90417 5.21667 6 5.5 6Z"
                      fill="#F1F3F4"
                    />
                  </svg>
                ),
              ].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/40 rounded-lg flex items-center justify-center text-white shadow-lg hover:bg-[#0FC8CA] transition-all cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
