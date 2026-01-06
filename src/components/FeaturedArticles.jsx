import React from 'react';
import { FaArrowRight, FaClock } from "react-icons/fa";
// Import your local images here
import grids from "../assets/grids.png";
import blogcode from "../assets/blogcode.jpg"; // Use relevant images from your assets
import blogmobile from "../assets/blogmobile.png";
import blogseo from "../assets/blogseo.jpg";
import blogreact from "../assets/blogreact.png";

export default function FeaturedArticles() {
  const sideArticles = [
    {
      tag: "DIGITAL MARKETING",
      tagStyles: "bg-[#FCEEEB] rounded-[8px] text-orange-500",
      title: "SEO Strategies That Actually Work in 2024",
      author: "Sarah Khan",
      date: "Dec 12, 2024",
      image: blogseo,
    },
    {
      tag: "UI/UX",
      tagStyles: "bg-[#00E9FF] rounded-[8px] text-[#0E7490]",
      title: "Designing for Mobile-First: A Complete Guide",
      author: "Ali Hassan",
      date: "Dec 10, 2024",
      image: blogmobile
    },
    {
      tag: "WEB DEV",
       tagStyles: "bg-[#F3E8FF] rounded-[8px] text-[#E45858]",
      title: "React vs Vue.js: Which Framework to Choose?",
      author: "Omar Ahmed",
      date: "Dec 8, 2024",
      image: blogreact
    }
  ];

  return (
    <section className="relative bg-white flex justify-center object-cover "  style={{ 
            backgroundImage: `url(${grids})`,
          }}>
             <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] py-10 md:py-20">
    
          <div className="bg-[#F1F3F4] py-20 px-6 w-full">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2B2C34]">Featured Articles</h2>
              <p className="text-[#2B2C34]/60 text-lg md:text-[20px]  mx-auto leading-relaxed">
              Our most popular and trending articles handpicked for you
              </p>
            </div>

        {/* Articles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Large Featured Article (7 columns) */}
          <div className="lg:col-span-7 bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img src={blogcode} alt="Featured" className="w-full h-full object-cover" />
              <span className="absolute top-6 left-6 bg-[#F97316] text-white text-[10px] font-bold px-4 py-1.5 rounded-lg uppercase tracking-widest">
                Featured
              </span>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#F97316] bg-[#FCEEEB] runded-[4px] px-[10px] py-[4px] text-[10px] font-bold uppercase tracking-widest">Tech Trends</span>
                <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-bold">
                  <FaClock /> 8 MIN READ
                </div>
              </div>
              
              <h3 className="text-[#2B2C34] text-2xl md:text-3xl font-bold mb-4 leading-tight">
                How AI is Revolutionizing Web Development in 2025
              </h3>
              <p className="text-[#2B2C3499]/60 text-[16px] leading-relaxed mb-8">
                Artificial Intelligence is transforming the way we build websites. From automated code generation to intelligent user interfaces, discover the cutting-edge AI tools and techniques that are reshaping web development.
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src="https://i.pravatar.cc/100?u=ahmad" alt="Author" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#1F2937] font-semibold text-[14px]">Ahmad Ali</span>
                    <span className="text-[#2B2C3499]/60 text-[14px]">December 15, 2024</span>
                  </div>
                </div>
                <button className="bg-[#8A38F5] hover:bg-[#6D28D9] text-[#F1F3F4] px-6 py-3 rounded-[8px] text-[16px] font-bold flex items-center gap-2 transition-all">
                  Read Article <FaArrowRight size={10} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Small Article List (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideArticles.map((article, index) => (
              <div key={index} className="bg-white p-4 rounded-[24px] shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow group">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className={`${article.tagStyles} text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md w-fit`}>
  {article.tag}
</span>
                  <h4 className="text-[#2B2C34] font-bold text-sm md:text-base leading-snug group-hover:text-[#7C3AED] transition-colors">
                    {article.title}
                  </h4>
                  <div className="mt-1">
                    <span className="text-[#2B2C3499]/60 text-[12px]">By {article.author} - {article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
         

        </div>
        </div>
      </div>
    </section>
  );
}   

// import React from 'react';
// import grids from "../assets/grids.png";


// export default function FeaturedArticles() {
//   return (
    //  <section className="relative bg-white flex justify-center object-cover "  style={{ 
    //         backgroundImage: `url(${grids})`,
    //       }}>
    //          <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] py-10 md:py-20">
    
    //       <div className="bg-[#F1F3F4] py-20 px-6 w-full">
    //         {/* Header */}
    //         <div className="text-center mb-16">
    //           <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2B2C34]">Featured Articles</h2>
    //           <p className="text-[#2B2C34]/60 text-lg md:text-[20px]  mx-auto leading-relaxed">
    //           Our most popular and trending articles handpicked for you
    //           </p>
    //         </div>
      
//     </div>
//     </div>
//     </section>
//   );
// }
