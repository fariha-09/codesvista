import React from "react";
import grids from "../assets/grids.png";
import analytics from "../assets/analytics.jpg";
import security from "../assets/security.jpg";
import cloud from "../assets/cloud.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import mobile from "../assets/mobile.jpg";
import automation from "../assets/automation.jpg";
import { motion } from "framer-motion";


export default function RecentArticles() {
  const articles = [
    {
      title: "The Power of Data Analytics in Business Growth",
      desc: "Learn how data-driven decisions can accelerate your business growth and improve customer satisfaction.",
      tag: "ANALYTICS",
      tagStyle: "bg-red-50 text-red-400",
      author: "Fatima Ali",
      date: "Dec 5, 2024",
      image: analytics
    },
    {
      title: "Essential Cybersecurity Practices for Developers",
      desc: "Protect your applications and users with these essential security practices every developer should know.",
      tag: "SECURITY",
      tagStyle: "bg-blue-50 text-blue-400",
      author: "Hassan Khan",
      date: "Dec 3, 2024",
      image: security
    },
    {
      title: "Cloud Computing: The Future of Business Infrastructure",
      desc: "Discover how cloud computing is transforming business operations and reducing infrastructure costs.",
      tag: "CLOUD",
      tagStyle: "bg-yellow-50 text-yellow-500",
      author: "Aisha Ahmed",
      date: "Dec 1, 2024",
      image: cloud
    },
    {
      title: "Building High-Converting E-commerce Websites",
      desc: "Essential tips and strategies for creating e-commerce websites that convert visitors into customers.",
      tag: "E-COMMERCE",
      tagStyle: "bg-pink-50 text-pink-400",
      author: "Muhammad Ali",
      date: "Nov 28, 2024",
      image: ecommerce
    },
    {
      title: "Progressive Web Apps: The Future of Mobile",
      desc: "Learn how PWAs are bridging the gap between web and native mobile applications.",
      tag: "MOBILE",
      tagStyle: "bg-purple-50 text-purple-400",
      author: "Zara Sheikh",
      date: "Nov 25, 2024",
      image: mobile
    },
    {
      title: "Marketing Automation: Scale Your Business Efficiently",
      desc: "Discover tools and strategies to automate your marketing processes and increase efficiency.",
      tag: "AUTOMATION",
      tagStyle: "bg-red-50 text-red-400",
      author: "Ahmed Hassan",
      date: "Nov 22, 2024",
      image: automation
    }
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
        {/* Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
           <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text "
            style={{
              textShadow: `
      0 0 38px rgba(0, 206, 209, 0.45),
      0 0 20px rgba(0, 206, 209, 0.25)
    `,
            }}
          >
              Recent Articles
          </motion.h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest insights and tutorials
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {articles.map((item, index) => (
            <div key={index} className="bg-[#F8F9FA] rounded-[32px] overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Image Container */}
              <div className="h-60 overflow-hidden m-3 rounded-[24px]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 pt-2 flex flex-col flex-grow">
                {/* Tag with w-fit to prevent full width bg */}
                <span className={`${item.tagStyle} text-[10px] font-bold tracking-widest px-3 py-1 rounded-md w-fit mb-4`}>
                  {item.tag}
                </span>

                <h3 className="text-[#2B2C34] text-[20px] font-semibold mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-[#2B2C3499]/60 text-[14px] font-medium leading-relaxed mb-8 line-clamp-3">
                  {item.desc}
                </p>

                {/* Author Info */}
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${item.author}`} alt={item.author} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#2B2C34] font-bold text-[14px]">{item.author}</span>
                    <span className="text-[#2B2C3499]/60 text-[14px]">{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// import React from "react";
// import grids from "../assets/grids.png";

// export default function RecentArticles() {
//   return (
    // <section
    //   className="relative bg-white flex justify-center object-cover "
    //   style={{
    //     backgroundImage: `url(${grids})`,
    //   }}
    // >
    //   {/* 1. Container Card with Grid Overlay */}
    //   <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] p-10 md:p-20">
//         {/* 2. Header Content */}
//         <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
//           <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2B2C34]">
//             Recent Articles
//           </h1>
//           <p className="text-[#2B2C3499]/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//             Stay updated with our latest insights and tutorials
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
