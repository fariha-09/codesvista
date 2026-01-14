import React from "react";
import { PiBuildingApartmentFill, PiClipboardTextBold } from "react-icons/pi";
import {
  FaShoppingCart,
  FaTags,
  FaPencilRuler,
  FaLightbulb,
} from "react-icons/fa";
import grid from "../assets/grid.jpg";
import { IoCodeSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function ServicesBannerSection() {
  const stats = [
    {
      label: "8",
      sub: "Core Service",
      color: "bg-[#4ADE80]",
      icon: () => (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 19.5V11.5H8V19.5H0ZM2 17.5H6V13.5H2V17.5ZM3.5 9L9 0L14.5 9H3.5ZM7.05 7H10.95L9 3.85L7.05 7ZM19.575 21.95L16.925 19.3C16.575 19.5333 16.1958 19.7083 15.7875 19.825C15.3792 19.9417 14.95 20 14.5 20C13.25 20 12.1875 19.5625 11.3125 18.6875C10.4375 17.8125 10 16.75 10 15.5C10 14.25 10.4375 13.1875 11.3125 12.3125C12.1875 11.4375 13.25 11 14.5 11C15.75 11 16.8125 11.4375 17.6875 12.3125C18.5625 13.1875 19 14.25 19 15.5C19 15.9333 18.9417 16.3542 18.825 16.7625C18.7083 17.1708 18.5417 17.55 18.325 17.9L20.975 20.55L19.575 21.95ZM14.5 18C15.2 18 15.7917 17.7583 16.275 17.275C16.7583 16.7917 17 16.2 17 15.5C17 14.8 16.7583 14.2083 16.275 13.725C15.7917 13.2417 15.2 13 14.5 13C13.8 13 13.2083 13.2417 12.725 13.725C12.2417 14.2083 12 14.8 12 15.5C12 16.2 12.2417 16.7917 12.725 17.275C13.2083 17.7583 13.8 18 14.5 18Z" fill="#4C4480"/>
</svg>

        </svg>
      ),
    },
    {
      label: "24/7",
      sub: "Support",
      color: "bg-[#FF6800]",
      icon: () => (
        <svg
          width="19"
          height="21"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20L16 16H6C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V13H15C15.55 13 16.0208 12.8042 16.4125 12.4125C16.8042 12.0208 17 11.55 17 11V4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V20ZM2 10.175L3.175 9H13V2H2V10.175ZM0 15V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H13C13.55 0 14.0208 0.195833 14.4125 0.5875C14.8042 0.979167 15 1.45 15 2V9C15 9.55 14.8042 10.0208 14.4125 10.4125C14.0208 10.8042 13.55 11 13 11H4L0 15Z" fill="#4C4480"/>
</svg>
</svg>
      ),
    },
    {
      label: "100%",
      sub: "Satisfaction",
      color: "bg-[#FACC15]",
      icon: () => (
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 15.5C11.1333 15.5 12.1625 15.1792 13.0875 14.5375C14.0125 13.8958 14.6833 13.05 15.1 12H4.9C5.31667 13.05 5.9875 13.8958 6.9125 14.5375C7.8375 15.1792 8.86667 15.5 10 15.5ZM5.8 9L6.9 7.95L7.95 9L9 7.95L6.9 5.8L4.75 7.95L5.8 9ZM12.05 9L13.1 7.95L14.2 9L15.25 7.95L13.1 5.8L11 7.95L12.05 9ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#4C4480"/>
</svg>
        </svg>
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
          <div className="w-full lg:w-1/2 space-y-6  ">
            <div className="inline-flex text-white hover:text-black items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 hover:bg-[#F1F3F4] hover: cursor-default ">
              <PiBuildingApartmentFill size={20} className="text-[#0e9c9d]" />
              <span className=" font-medium text-[14px] whitespace-nowrap ">
                Our Services
              </span>
            </div>

            {/* Heading Fix: Adjusted leading and size */}
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white whitespace-nowrap leading-5">
             Complete Technology<br/> Solutions
            </h1>

            <p className="text-[#F1F3F4] text-[18px] font-normal max-w-lg leading-relaxed">
             From concept to deployment, we provide end-to-end technology services that drive business growth and<br/> digital transformation.
            </p>

           <div className="flex flex-wrap gap-3">
              <motion.span
                initial="initial"
                whileHover="hover"
                className="relative flex items-center gap-2 bg-white px-4 py-3 rounded-lg text-[12px] font-bold text-[#4C4480] cursor-pointer overflow-hidden shadow-sm"
              >
                <motion.div
                  variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gray-200 z-0 origin-center"
                />

                <motion.div
                  variants={{
                    initial: { rotate: -35 },
                    hover: { rotate: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <FaTags size={15} className="text-[#3B82F6]" />
                </motion.div>

                <span className="relative z-10">BRAND IDENTITY</span>
              </motion.span>
              <motion.span
                initial="initial"
                whileHover="hover"
                className="relative flex items-center gap-2 bg-white px-4 py-3 rounded-lg text-[12px] font-bold text-[#4C4480] cursor-pointer overflow-hidden shadow-sm"
              >
                <motion.div
                  variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gray-200 z-0 origin-center"
                />

                <motion.div
                  variants={{
                    initial: { rotate: -35 },
                    hover: { rotate: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <FaPencilRuler size={15} className="text-[#FF6800]" />
                </motion.div>

                <span className="relative z-10"> PROFESSIONAL QUALITY</span>
              </motion.span>
              <motion.span
                initial="initial"
                whileHover="hover"
                className="relative flex items-center gap-2 bg-white px-4 py-3 rounded-lg text-[12px] font-bold text-[#4C4480] cursor-pointer overflow-hidden shadow-sm"
              >
                <motion.div
                  variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gray-200 z-0 origin-center"
                />

                <motion.div
                  variants={{
                    initial: { rotate: -35 },
                    hover: { rotate: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <FaLightbulb size={15} className="text-[#4ADE80]" />{" "}
                </motion.div>

                <span className="relative z-10"> CREATIVE DESIGN</span>
              </motion.span>
            </div>

            <div className="flex flex-wrap gap-4 ">
              {/* Buttons ... */}
              <button className="flex items-center gap-2 bg-[#0FC8CA] hover:bg-[#00B8B8] text-[14px] text-[#2B2C34] px-8 py-3 rounded-xl font-bold shadow-lg transition-transform active:scale-95">
                <PiClipboardTextBold size={20} /> Get Free Quote
              </button>
              <button
                className="flex items-center gap-2 bg-white hover:bg-[#4C4480] hover:text-white  text-[14px] text-[#4C4480] px-8 py-3 rounded-xl font-bold shadow-lg transition-all  duration-300 ease-in-out
 active:scale-95"
              >
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
                      className="group bg-white/10 p-4 rounded-2xl flex items-center gap-4
                   border border-white/10 backdrop-blur-sm
                   transition-all duration-300 hover:bg-[#F1F3F4]"
                    >
                       <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-inner
                      transition-all duration-300
                      ${stat.color} group-hover:bg-green-600`}
                      >
                       <Icon
                          className="text-[#4C4480] text-xl transition-colors duration-300
                       "
                        />
                      </div>
                      <div>
                        <h4
                          className="text-white font-bold text-2xl leading-none
                       transition-colors duration-300 ease-in-out
                       group-hover:text-green-600"
                        >
                          {stat.label}
                        </h4>
                        <p
                          className="text-white/70 text-sm transition-colors transit duration-300
                       group-hover:text-green-600/80"
                        >
                          {stat.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                IoCodeSharp,
                () => (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22C6.51667 22 4.39583 21.6458 2.6375 20.9375C0.879167 20.2292 0 19.25 0 18C0 17.4667 0.166667 16.9875 0.5 16.5625C0.833333 16.1375 1.3 15.7583 1.9 15.425L3.525 16.875C3.125 17.0083 2.77083 17.1792 2.4625 17.3875C2.15417 17.5958 2 17.8 2 18C2 18.4333 2.675 18.875 4.025 19.325C5.375 19.775 7.03333 20 9 20C10.9667 20 12.625 19.775 13.975 19.325C15.325 18.875 16 18.4333 16 18C16 17.8 15.8458 17.5958 15.5375 17.3875C15.2292 17.1792 14.875 17.0083 14.475 16.875L16.1 15.425C16.7 15.7583 17.1667 16.1375 17.5 16.5625C17.8333 16.9875 18 17.4667 18 18C18 19.25 17.1208 20.2292 15.3625 20.9375C13.6042 21.6458 11.4833 22 9 22ZM9 18C8.63333 18 8.27917 17.9375 7.9375 17.8125C7.59583 17.6875 7.28333 17.5 7 17.25L0.7 11.675C0.483333 11.4917 0.3125 11.2667 0.1875 11C0.0625 10.7333 0 10.4583 0 10.175V8.175C0 7.89167 0.0541667 7.61667 0.1625 7.35C0.270833 7.08333 0.433333 6.85833 0.65 6.675L6.95 0.8C7.23333 0.533333 7.55 0.333333 7.9 0.2C8.25 0.0666667 8.61667 0 9 0C9.38333 0 9.75 0.0666667 10.1 0.2C10.45 0.333333 10.7667 0.533333 11.05 0.8L17.35 6.675C17.5667 6.85833 17.7292 7.08333 17.8375 7.35C17.9458 7.61667 18 7.89167 18 8.175V10.175C18 10.4583 17.9375 10.7333 17.8125 11C17.6875 11.2667 17.5167 11.4917 17.3 11.675L11 17.25C10.7167 17.5 10.4042 17.6875 10.0625 17.8125C9.72083 17.9375 9.36667 18 9 18ZM8.9 13.3C9.13333 13.3 9.35417 13.2625 9.5625 13.1875C9.77083 13.1125 9.96667 12.9917 10.15 12.825L15.7 7.9L9.7 2.25C9.58333 2.16667 9.46667 2.10417 9.35 2.0625C9.23333 2.02083 9.10833 2 8.975 2C8.84167 2 8.71667 2.02083 8.6 2.0625C8.48333 2.10417 8.38333 2.16667 8.3 2.25L2.2 8L7.65 12.825C7.83333 12.9917 8.02917 13.1125 8.2375 13.1875C8.44583 13.2625 8.66667 13.3 8.9 13.3ZM6 9.25C6.35 9.25 6.64583 9.12917 6.8875 8.8875C7.12917 8.64583 7.25 8.35 7.25 8C7.25 7.65 7.12917 7.35417 6.8875 7.1125C6.64583 6.87083 6.35 6.75 6 6.75C5.65 6.75 5.35417 6.87083 5.1125 7.1125C4.87083 7.35417 4.75 7.65 4.75 8C4.75 8.35 4.87083 8.64583 5.1125 8.8875C5.35417 9.12917 5.65 9.25 6 9.25ZM7.25 10.6C7.96667 10.95 8.72083 11.0625 9.5125 10.9375C10.3042 10.8125 11 10.4833 11.6 9.95C12.1667 9.46667 12.5375 8.85833 12.7125 8.125C12.8875 7.39167 12.8 6.7 12.45 6.05L7.25 10.6ZM9 6.25C9.35 6.25 9.64583 6.12917 9.8875 5.8875C10.1292 5.64583 10.25 5.35 10.25 5C10.25 4.65 10.1292 4.35417 9.8875 4.1125C9.64583 3.87083 9.35 3.75 9 3.75C8.65 3.75 8.35417 3.87083 8.1125 4.1125C7.87083 4.35417 7.75 4.65 7.75 5C7.75 5.35 7.87083 5.64583 8.1125 5.8875C8.35417 6.12917 8.65 6.25 9 6.25Z" fill="#F1F3F4"/>
</svg>
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
