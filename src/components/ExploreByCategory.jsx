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
    },
    {
      title: "Digital Marketing",
      desc: "SEO strategies, social media tips, and growth hacking",
      articles: "8 Articles",
      icon: FaChartLine,
      bgColor: "bg-[#E45858]",
    },
    {
      title: "UI/UX Design",
      desc: "Design principles, user experience, and modern trends",
      articles: "10 Articles",
      icon: FaPenNib,
      bgColor: "bg-[#2DD4BF]",
    },
    {
      title: "Tech Trends",
      desc: "Industry insights, emerging technologies, and innovations",
      articles: "15 Articles",
      icon: FaRocket,
      bgColor: "bg-[#F97316]",
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
      <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] p-10 md:p-20">
        {/* 2. Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
            style={{
              textShadow: `
                            0 0 38px rgba(0, 206, 209, 0.45),
                            0 0 20px rgba(0, 206, 209, 0.25)
                          `,
            }}
          >
            Explore by Category
          </motion.h2>
          <p className="text-[#2B2C3499]/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Choose your area of interest and dive into specialized content
          </p>
        </div>

        {/* 3. Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="bg-white p-[42px] rounded-[16px] border border-gray-100 flex flex-col items-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                {/* Icon Container */}
                <div
                  className={`${cat.bgColor} w-16 h-16 rounded-[8px] flex items-center justify-center mb-6 shadow-lg shadow-black/10 transition-transform group-hover:scale-110`}
                >
                  <Icon className="text-[#FFFFFF] text-[30px]" />
                </div>

                {/* Text Content */}
                <h3 className="text-[#2B2C34] text-[20px] font-bold mb-3">
                  {cat.title}
                </h3>
                <p className="text-[#2B2C3499]/60 text-[14px] leading-relaxed mb-8 px-2">
                  {cat.desc}
                </p>

                {/* Footer Link */}
                <div className="mt-auto">
                  <span className="text-[#2B2C3499]/60 text-[14px] font-semibold uppercase tracking-wider">
                    {cat.articles}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// import React from 'react';
// import grids from "../assets/grids.png";

// export default function ExploreByCategory() {
//   return (
// <section className="relative bg-white flex justify-center object-cover "  style={{
//    backgroundImage: `url(${grids})`,
//  }}>
//      {/* 1. Container Card with Grid Overlay */}
//      <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] p-10 md:p-20">

//            {/* 2. Header Content */}
//            <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
//              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2B2C34]">
//              Explore by Category
//              </h1>
//              <p className="text-[#2B2C3499]/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//                Choose your area of interest and dive into specialized content
//              </p>
//            </div>

//     </div>
//     </section>
//   );
// }
