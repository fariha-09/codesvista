import React from 'react';
import grids from "../assets/grids.png";
import pfimg1 from "../assets/pfimg1.jpg";

export default function OurStory() {
  return (
    <section className="relative bg-white flex justify-center object-cover "  style={{ 
        backgroundImage: `url(${grids})`,
      }}>
          {/* 1. Container Card with Grid Overlay */}
          <div className="relative w-full max-w-[1400px] md:flex flex-row  overflow-hidden bg-white/[98%] p-10 md:p-20">
<div className='md:w-1/2 flex flex-col gap-6'>
    <h1 className="text-[#4C4480] font-bold text-[40px] leading-tight">
           Our Story
         </h1>
         <div className="flex flex-col gap-6 text-[#555] text-[16px] leading-relaxed ">
           <p className='w-120'>
             Founded in 2019, Astron Hosts began with a simple mission: to 
             make technology accessible and beneficial for businesses of all sizes.
           </ p>       
           <p className='w-130'>
             What started as a small team of passionate developers has grown into a 
             comprehensive software house that delivers end-to-end digital solutions. 
             We've helped hundreds of businesses transform their digital presence and 
             achieve remarkable growth.
           </ p>       
           <p>
             Our journey has been marked by continuous learning, innovation, and an 
             unwavering commitment to client success. Every project we undertake is an 
             opportunity to push boundaries and create something extraordinary.
           </p>
         </div>

          </div>
 <div className="md:w-1/2 flex justify-end">
          <div className="relative">
            <img 
              src={pfimg1} 
              alt="Team working together" 
              className="w-full max-w-[500px] rounded-[40px] shadow-sm object-cover"
            />
          </div>
        </div>
      
    </div>
    </section>
  );
}




// import React from 'react';
// import htmlcss from '../assets/htmlcss.png';
// import grids from "../assets/grids.png";

// export default function OurStory() {
//   return (
//    <section className="relative bg-white flex justify-center object-cover "  style={{ 
//       backgroundImage: `url(${grids})`,
//     }}>
//         {/* 1. Container Card with Grid Overlay */}
//         <div className="relative w-full overflow-hidden bg-white/[98%] object-cover  p-10 md:p-20 max-w-7xl mx-auto flex md:flex-row items-center gap-16">
        
//         {/* Left Content Side */}
//         <div className="md:w-1/2 flex flex-col gap-6">
//           <h1 className="text-[#4C4480] font-bold text-[40px] leading-tight">
//             Our Story
//           </h1>
          
//           <div className="flex flex-col gap-6 text-[#555] text-[16px] leading-relaxed">
//             <p>
//               Founded in 2019, Astron Hosts began with a simple mission: to 
//               make technology accessible and beneficial for businesses of all sizes.
//             </p>
            
//             <p>
//               What started as a small team of passionate developers has grown into a 
//               comprehensive software house that delivers end-to-end digital solutions. 
//               We've helped hundreds of businesses transform their digital presence and 
//               achieve remarkable growth.
//             </p>
            
//             <p>
//               Our journey has been marked by continuous learning, innovation, and an 
//               unwavering commitment to client success. Every project we undertake is an 
//               opportunity to push boundaries and create something extraordinary.
//             </p>
//           </div>
//         </div>

//         {/* Right Image Side */}
        // <div className="md:w-1/2 flex justify-end">
        //   <div className="relative">
        //     <img 
        //       src={htmlcss} 
        //       alt="Team working together" 
        //       className="w-full max-w-[600px] rounded-[40px] shadow-sm object-cover"
        //     />
        //   </div>
        // </div>

//       </div>
//     </section>
//   );
// }