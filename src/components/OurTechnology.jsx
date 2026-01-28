import React from 'react';
import grids from "../assets/grids.png";
import htmlcss from "../assets/htmlcss.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import laravel from "../assets/laravel.png";
import mongodb from "../assets/mongodb.png";
import { motion } from 'framer-motion';

export default function OurTechnology() {
  const technology = [
    { name: "HTML5 & CSS3", des: "Modern web standards", img: htmlcss },
    { name: "JavaScript", des: "Interactive experiences", img: js },
    { name: "React.js", des: "Dynamic user interfaces", img: react },
    { name: "Node.js", des: "Server-side development", img: node },
    { name: "PHP", des: "Backend development", img: php },
    { name: "Python", des: "AI & Machine Learning", img: python },
    { name: "Laravel", des: "PHP Framework", img: laravel },
    { name: "MongoDB", des: "NoSQL Database", img: mongodb },
  ];

    const scrollItems = [...technology, ...technology];

  return (
    <section className="relative bg-white flex justify-center object-cover "  style={{ 
        backgroundImage: `url(${grids})`,
      }}>
          {/* 1. Container Card with Grid Overlay */}
          <div className="relative w-full overflow-hidden bg-white/[98%] p-4 md:px-20">
        
        {/* Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 my-10 md:my-16">
          <motion.h2
                     initial={{ y: 40, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
                     style={{
                       textShadow: `
               0 0 38px rgba(0, 206, 209, 0.45),
               0 0 20px rgba(0, 206, 209, 0.25)
             `,
                     }}
                   >
                        Our Technology Stack
                   </motion.h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We use cutting-edge technologies to build robust, scalable, and modern solutions
          </p>
        </div>

        {/* Technology Grid */}
         <div className="relative flex overflow-x-hidden bg-white py-4 border-y border-gray-50">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {scrollItems.map((tech, index) => (
            <div 
              key={index} 
              className=" items-center justify-center min-w-[120px] md:min-w-[160px]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20">
                <img 
                  src={tech.img} 
                  alt={tech.name} 
                  className="w-full h-full rounded-2xl object-contain"
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for the animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      </div>
    </section>
  );
}

// import React from 'react';
// import { motion } from 'framer-motion';
// import grids from "../assets/grids.png";
// import htmlcss from "../assets/htmlcss.png";
// import js from "../assets/js.png";
// import react from "../assets/react.png";
// import node from "../assets/node.png";
// import php from "../assets/php.png";
// import python from "../assets/python.png";
// import laravel from "../assets/laravel.png";
// import mongodb from "../assets/mongodb.png";

// export default function OurTechnology() {
//   const technology = [
//     { name: "HTML5 & CSS3", img: htmlcss },
//     { name: "JavaScript", img: js },
//     { name: "React.js", img: react },
//     { name: "Node.js", img: node },
//     { name: "PHP", img: php },
//     { name: "Python", img: python },
//     { name: "Laravel", img: laravel },
//     { name: "MongoDB", img: mongodb },
//   ];

//   // We double the array to ensure a seamless infinite loop
  // const scrollItems = [...technology, ...technology];

//   return (
//     <section className="relative bg-white py-16 overflow-hidden" style={{ backgroundImage: `url(${grids})` }}>
//       <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-12 px-4">
//         <motion.h2
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight"
//           style={{
//             textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
//           }}
//         >
//           Our Technology Stack
//         </motion.h2>
//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//           We use cutting-edge technologies to build robust, scalable, and modern solutions
//         </p>
//       </div>

//       {/* Slider Container */}
    //   <div className="relative flex overflow-x-hidden bg-white py-4 border-y border-gray-50">
    //     <div className="animate-marquee flex whitespace-nowrap items-center">
    //       {scrollItems.map((tech, index) => (
    //         <div 
    //           key={index} 
    //           className="mx-8 flex flex-col items-center justify-center min-w-[120px] md:min-w-[160px]"
    //         >
    //           <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-3 transition-transform hover:scale-110">
    //             <img 
    //               src={tech.img} 
    //               alt={tech.name} 
    //               className="w-full h-full object-contain"
    //             />
    //           </div>
    //           <span className="mt-3 text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
    //             {tech.name}
    //           </span>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Custom CSS for the animation */}
    //   <style jsx>{`
    //     @keyframes marquee {
    //       0% { transform: translateX(0); }
    //       100% { transform: translateX(-50%); }
    //     }
    //     .animate-marquee {
    //       animation: marquee 30s linear infinite;
    //     }
    //     .animate-marquee:hover {
    //       animation-play-state: paused;
    //     }
    //   `}</style>
    // </section>
//   );
// }