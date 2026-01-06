import React from 'react';
import grids from "../assets/grids.png";
import designresponsive from "../assets/designsresponsive.png";
import seooptimized from "../assets/seooptimized.png";
import fastloading from "../assets/fastloading.png";
import secureandreliable from "../assets/secureandreliable.png";
import easymanagement from "../assets/easymanagement.png";
import support from "../assets/support.png";




const offers = [
  {
    title: "Responsive Design",
    desc: "Websites that work perfectly on all devices - desktop, tablet, and mobile.",
    img: designresponsive,
  },
  {
    title: "SEO Optimized",
    desc: "Built with SEO best practices to help your website rank higher in search results.",
    img: seooptimized,
  },
  {
    title: "Fast Loading",
    desc: "Optimized for speed with fast loading times to keep your visitors engaged.",
    img: fastloading,
  },
  {
    title: "Secure & Reliable",
    desc: "Built with security best practices and reliable hosting solutions.",
    img: secureandreliable,
  },
  {
    title: "Easy Management",
    desc: "User-friendly admin panels to easily update and manage your website content.",
    img: easymanagement,
  },
  {
    title: "24/7 Support",
    desc: "Ongoing support and maintenance to keep your website running smoothly.",
    img: support,
  }
];

export default function WhatWeOffers() {
  return (
     <section className="relative bg-white flex justify-center object-cover "  style={{ 
        backgroundImage: `url(${grids})`,
      }}>
         <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] py-10 md:py-20">

      <div className="bg-[#F1F3F4] py-20 px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#4C4480]">What we Offer</h2>
          <p className="text-[#4C448080]/50 text-lg md:text-[24px]  mx-auto leading-relaxed">
           comprehensive Technology solution to drive your business Growth and digital<br/> transformation
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
          {offers.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-[24px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              {/* img Container */}
              <div className=" bg-[#F1F3F4] w-[72px] h-[72px] rounded-[16px] flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
<img src={item.img} alt='img' className='w-[40px] h-[40px]'></img>
                  </div>
              
              <h3 className="text-[#4C4480] font-semibold text-[20px] mb-3">
                {item.title}
              </h3>
              
              <p className="text-[#4C448080]/50 text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>


        </div>

    </div>
    </section>
  );
}




// import React from 'react';
// import grids from "../assets/grids.png";
// import { 
//   MdDevices, 
//   MdSearch, 
//   MdFlashOn, 
//   MdShield, 
//   MdSettings, 
//   MdHeadsetMic 
// } from "react-icons/md";

// const offers = [
//   {
//     title: "Responsive Design",
//     desc: "Websites that work perfectly on all devices - desktop, tablet, and mobile.",
//     Icon: MdDevices,
//   },
//   {
//     title: "SEO Optimized",
//     desc: "Built with SEO best practices to help your website rank higher in search results.",
//     Icon: MdSearch,
//   },
//   {
//     title: "Fast Loading",
//     desc: "Optimized for speed with fast loading times to keep your visitors engaged.",
//     Icon: MdFlashOn,
//   },
//   {
//     title: "Secure & Reliable",
//     desc: "Built with security best practices and reliable hosting solutions.",
//     Icon: MdShield,
//   },
//   {
//     title: "Easy Management",
//     desc: "User-friendly admin panels to easily update and manage your website content.",
//     Icon: MdSettings,
//   },
//   {
//     title: "24/7 Support",
//     desc: "Ongoing support and maintenance to keep your website running smoothly.",
//     Icon: MdHeadsetMic,
//   }
// ];

// export default function WhatWeOffers() {
//   return (
//     <section 
//       className="relative bg-[#F1F3F4] py-20 px-6 flex justify-center"
//       style={{ 
//         backgroundImage: `url(${grids})`,
//         backgroundBlendMode: 'overlay' 
//       }}
//     >
//       <div className="relative w-full max-w-7xl">
        
//         {/* Header Content */}
//         <div className="text-center mb-16 space-y-4">
//           <h2 className="text-[#4C4480] font-bold text-[48px] md:text-[56px] leading-tight">
//             What we Offer
//           </h2>
//           <p className="text-[#4C448080] text-[18px] md:text-[20px] max-w-3xl mx-auto leading-relaxed">
//             comprehensive Technology solution to drive your business Growth and digital transformation
//           </p>
//         </div>

//         {/* 3-Column Grid */}
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        //   {offers.map((item, index) => (
        //     <div 
        //       key={index} 
        //       className="bg-white p-10 rounded-[24px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
        //     >
        //       {/* Icon Container */}
        //       <div className="w-16 h-16 bg-[#F8F9FA] rounded-[16px] flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
        //         <item.Icon className="text-[#437EF7] text-[32px]" />
        //       </div>
              
        //       <h3 className="text-[#1A1A1A] font-bold text-[22px] mb-3">
        //         {item.title}
        //       </h3>
              
        //       <p className="text-[#666] text-[15px] leading-relaxed">
        //         {item.desc}
        //       </p>
        //     </div>
        //   ))}
        // </div>

//       </div>
//     </section>
//   );
// }