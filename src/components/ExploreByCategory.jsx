import React from "react";
import grids from "../assets/grids.png";
import { FaCode, FaChartLine, FaPenNib, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ExploreByCategory() {
  const categories = [
    {
      title: "Web Development",
      desc: "Latest frameworks, best practices, and coding tutorials",
      articles: "12 Articles",
      icon: FaCode,
      bgColor: "bg-[#8A38F5]",
      hoverBg: "rgba(138, 56, 245, 0.1)",
    },
    {
      title: "Digital Marketing",
      desc: "SEO strategies, social media tips, and growth hacking",
      articles: "8 Articles",
      icon: FaChartLine,
      bgColor: "bg-[#E45858]",
      hoverBg: "rgba(228, 88, 88, 0.1)",
    },
    {
      title: "UI/UX Design",
      desc: "Design principles, user experience, and modern trends",
      articles: "10 Articles",
      icon: FaPenNib,
      bgColor: "bg-[#2DD4BF]",
      hoverBg: "rgba(45, 212, 191, 0.1)",
    },
    {
      title: "Tech Trends",
      desc: "Industry insights, emerging technologies, and innovations",
      articles: "15 Articles",
      icon: FaRocket,
      bgColor: "bg-[#F97316]",
      hoverBg: "rgba(249, 115, 22, 0.1)",
    },
  ];

  return (
    <section
      className="relative bg-white flex justify-center object-cover "
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      <div className="relative w-full  overflow-hidden bg-white/[98%] p-4 pt-10 md:p-20">
        {/* 2. Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 md:mb-16 mb-4 mt-4">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl md:pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
            style={{
              textShadow: `
                            0 0 38px rgba(0, 206, 209, 0.45),
                            0 0 20px rgba(0, 206, 209, 0.25)
                          `,
            }}
          >
            Explore by Category
          </motion.h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Choose your area of interest and dive into specialized content
          </p>
        </div>

        {/* 3. Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-2 relative z-10">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={index}
                initial="initial"
                whileHover="hover"
                className="relative bg-white md:p-[42px] p-4 rounded-[16px] border border-gray-100 flex flex-col items-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] overflow-hidden group cursor-pointer"
              >
                <motion.div
                  variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  style={{ backgroundColor: cat.hoverBg }}
                  className="absolute inset-0 z-0 origin-center"
                />

                {/* 2. Content Wrapper (Keeps text/icons on top) */}
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`${cat.bgColor} md:w-16 md:h-16 w-12 h-12 rounded-[8px] flex items-center justify-center md:mb-6 mb-2 shadow-lg shadow-black/10 transition-transform `}
                  >
                    <Icon className="text-[#FFFFFF] md:text-[30px] text-[20px]" />
                  </div>

                  <h3 className="text-[#2B2C34] text-[20px] font-bold md:mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-[#2B2C3499]/60 text-[14px] leading-relaxed md:mb-8 px-2">
                    {cat.desc}
                  </p>

                  <div className="mt-auto">
                    <span className="text-[#2B2C3499]/60 text-[14px] font-semibold uppercase tracking-wider group-hover:text-[#2B2C34] transition-colors">
                      {cat.articles}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
