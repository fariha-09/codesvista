import React from 'react';
import grids from "../assets/grids.png";
import htmltechnology from "../assets/htmltechnology.png";
import jstechnology from "../assets/jstechnology.png";
import reacttechnology from "../assets/reacttechnology.png";
import vuetechnology from "../assets/vuetechnology.png";
import bootstraptechnology from "../assets/bootstraptechnology.png";
import sasstechnology from "../assets/sasstechnology.png";
import phptechnology from "../assets/phptechnology.png";
import nodetechnology from "../assets/nodetechnology.png";
import pythontechnology from "../assets/pythontechnology.png";
import mysqltechnology from "../assets/mysqltechnology.png";
import awstechnology from "../assets/awstechnology.png";
import gittechnology from "../assets/gittechnology.png";


export default function TechnologiesWeUse() {
     const frontend = [
    { name: "HTML5 & CSS3", img: htmltechnology },
    { name: "Javascript ES6+", img:jstechnology },
    { name: "React.js", img: reacttechnology, },
    { name: "Vue.js", img: vuetechnology, },
    { name: "Bootstrap 5", img: bootstraptechnology, },
    { name: "SASS/SCSS", img:sasstechnology,},
  ];

  const backend = [
    { name: "PHP & Laravel",  img: phptechnology },
    { name: "Node.js",  img: nodetechnology},
    { name: "Python & Django",  img: pythontechnology },
    { name: "MySQL & MongoDB",  img: mysqltechnology },
    { name: "AWS & Cloud",  img: awstechnology },
    { name: "Git & Version Control",  img: gittechnology },
  ];
  return (
    <section className="relative bg-white flex justify-center object-cover "  style={{ 
       backgroundImage: `url(${grids})`,
     }}>
         {/* 1. Container Card with Grid Overlay */}
         <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] p-10 md:p-20">
   
           {/* 2. Header Content */}
           <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
             <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#4C4480]">
              Technologies We Use
             </h1>
             <p className="text-[#4C448080] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We use the latest and most reliable technologies to build your website
             </p>
           </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Frontend Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#4C4480] font-semibold text-[24px] mb-4">Modern Frontend Technologies</h3>
              <p className="text-[#4C448080]/50 text-[16px] leading-relaxed  mb-6">
                We use cutting-edge frontend technologies to create beautiful,<br/> interactive, and user-friendly interfaces that engage your<br/> visitors.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {frontend.map((tech, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-[#4C4480] transition-colors cursor-default">
                  <img src={tech.img} alt='img ' className="w-[24px] h-[24px]"></img>
                  <span className="text-[#4C4480] font-medium text-[14px]">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

<div className="space-y-8">
            <div>
              <h3 className="text-[#4C4480] font-semibold text-[24px] mb-4">Powerful Backend Solutions</h3>
              <p className="text-[#4C448080]/50 text-[16px] leading-relaxed mb-6">
                Our backend solutions are built for scalability, security, and<br/> performance to handle your business requirements.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {backend.map((tech, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-[#4C4480] transition-colors cursor-default">
                  <img src={tech.img} alt='img ' className="w-[24px] h-[24px]"></img>
                  <span className="text-[#4C4480] font-medium text-[14px]">{tech.name}</span>
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
// // Import technology icons (example from simple icons or react-icons)
// import { 
//   SiHtml5, SiCss3, SiJavascript, SiReact, 
//   SiVuedotjs, SiBootstrap, SiSass, SiPhp, 
//   SiLaravel, SiNodedotjs, SiPython, SiDjango, 
//   SiMysql, SiMongodb, SiAmazonwebservices, SiGit 
// } from "react-icons/si";

// export default function TechStack() {
//   const frontend = [
//     { name: "HTML5 & CSS3", icon: <SiHtml5 className="text-[#E34F26]" /> },
//     { name: "Javascript ES6+", icon: <SiJavascript className="text-[#F7DF1E]" /> },
//     { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
//     { name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D]" /> },
//     { name: "Bootstrap 5", icon: <SiBootstrap className="text-[#7952B3]" /> },
//     { name: "SASS/SCSS", icon: <SiSass className="text-[#CC6699]" /> },
//   ];

//   const backend = [
//     { name: "PHP & Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
//     { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
//     { name: "Python & Django", icon: <SiDjango className="text-[#092E20]" /> },
//     { name: "MySQL & MongoDB", icon: <SiMysql className="text-[#4479A1]" /> },
//     { name: "AWS & Cloud", icon: <SiAmazonwebservices className="text-[#232F3E]" /> },
//     { name: "Git & Version Control", icon: <SiGit className="text-[#F05032]" /> },
//   ];

//   return (
//     <section 
//       className="relative bg-white py-24 px-6 flex justify-center border-t border-gray-100"
//       style={{ backgroundImage: `url(${grids})`, backgroundSize: 'cover' }}
//     >
//       <div className="max-w-7xl w-full">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-[#4C4480] font-bold text-[48px] mb-4">Technologies We Use</h2>
//           <p className="text-[#4C448080] text-[18px]">We use the latest and most reliable technologies to build your website</p>
//         </div>

        // <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
        //   {/* Frontend Column */}
        //   <div className="space-y-8">
        //     <div>
        //       <h3 className="text-[#1A1A1A] font-bold text-[24px] mb-4">Modern Frontend Technologies</h3>
        //       <p className="text-[#666] text-[15px] leading-relaxed mb-6">
        //         We use cutting-edge frontend technologies to create beautiful, interactive, and user-friendly interfaces that engage your visitors.
        //       </p>
        //     </div>
        //     <div className="flex flex-wrap gap-3">
        //       {frontend.map((tech, i) => (
        //         <div key={i} className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-[#4C4480] transition-colors cursor-default">
        //           <span className="text-lg">{tech.icon}</span>
        //           <span className="text-[#4C4480] font-medium text-[14px]">{tech.name}</span>
        //         </div>
        //       ))}
        //     </div>
        //   </div>

//           {/* Backend Column */}
        //   <div className="space-y-8">
        //     <div>
        //       <h3 className="text-[#1A1A1A] font-bold text-[24px] mb-4">Powerful Backend Solutions</h3>
        //       <p className="text-[#666] text-[15px] leading-relaxed mb-6">
        //         Our backend solutions are built for scalability, security, and performance to handle your business requirements.
        //       </p>
        //     </div>
        //     <div className="flex flex-wrap gap-3">
        //       {backend.map((tech, i) => (
        //         <div key={i} className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-[#4C4480] transition-colors cursor-default">
        //           <span className="text-lg">{tech.icon}</span>
        //           <span className="text-[#4C4480] font-medium text-[14px]">{tech.name}</span>
        //         </div>
        //       ))}
        //     </div>
        //   </div>

//         </div>
//       </div>
//     </section>
//   );
// }

