import React from 'react';
import { FaCheck, FaSeedling, FaCrown, FaGem, FaComments } from 'react-icons/fa';


export default function MarketingPrices() {
     const packages = [
        {
          name: "Starter",
          price: "15,000",
          description: "Perfect for small businesses",
          icon: <FaSeedling />,
          features: [
            "Basic SEO optimization", "2 Social media platforms","8 posts per month","Monthly analytics report", "Basic Competitor analysis", 
            "Email support", 
          ],
          buttonText: "Choose Starter",
          isPopular: false
        },
        {
          name: "Professional",
          price: "30,000",
          description: "Great for growing businesses",
          icon: <FaCrown />,
          features: [
            "Advanced SEO optimization", "4 Social media platforms", "20 posts per month", 
            "Google Ads management", "Email marketing campaigns", "Weekly progress reports", 
            "Phone and chat support"
          ],
          buttonText: "Choose Professional",
          isPopular: true
        },
        {
          name: "Enterprise",
          price: "60,000",
          description: "For large businesses",
          icon: <FaGem />,
          features: [
            "Complete SEO strategy", "All Social media platforms", "40+ posts per month", 
            "Multiplatform ads management", "Advanced email automation", "Content cretion & copywriting", 
            "Dedicated Account manager", "24/7 Priority support"
          ],
          buttonText: "Choose Enterprise",
          isPopular: false
        }
      ];
  return (
   <section className="bg-[#0E9C9D] md:py-20 py-8 px-6 flex flex-col items-center font-sans">
         {/* Header */}
         <div className="text-center md:mb-16 mb-6 text-[#F1F3F4]">
           <h2 className="text-3xl md:text-6xl font-serif font-bold md:mb-4">Digital Marketing Packages</h2>
           <p className="md:text-[24px] text-[20px] text-[#F1F3F480]/80 leading-normal">Choose the right marketing package to grow your business online   </p>
         </div>
   
         {/* Pricing Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full items-start">
           {packages.map((pkg, index) => (
             <div 
               key={index} 
               className={`relative rounded-[32px] md:p-8  p-4 border border-white/20 flex flex-col items-center text-gray-700  transition-all duration-300 hover:scale-[1.02] ${
                 pkg.isPopular ? 'bg-white backdrop-blur-md py-12 -mt-4 shadow-2xl z-10' : 'bg-white'
               }`}
             >
               {pkg.isPopular && (
                 <span className="absolute -top-0 bg-[#0FC8CA] text-[12px] text-[#F1F3F4] font-bold uppercase tracking-widest px-4 py-1 rounded-[6px] shadow-lg">
                   Most Popular
                 </span>
               )}
   
               {/* Icon */}
               <div className="md:w-16 md:h-16 h-12 w-12 bg-[#F1F3F4] rounded-2xl flex items-center justify-center text-[#0FB7B7] text-3xl mb-6 shadow-xl">
                 {pkg.icon}
               </div>
   
               <h3 className="text-3xl font-bold md:mb-2">{pkg.name}</h3>
               <div className="flex items-baseline mb-2">
               <span className="text-sm font-medium mr-1 uppercase  text-gray-700">PKR</span>
                 <span className="md:text-5xl text-2xl font-bold">{pkg.price}</span>
               </div>
               <p className="text-[14px] text-gray-700 mb-2 md:mb-8">{pkg.description}</p>
   
               <div className="w-full border-t border-white/20 mb-4 md:mb-8"></div>
   
               {/* Features List */}
               <ul className="w-full md: space-y-2 md:space-y-4 md:mb-10 mb-4">
                 {pkg.features.map((feature, i) => (
                   <li key={i} className="flex items-center text-sm gap-3">
                     <FaCheck className="text-[#26D0CE] md:flex-shrink-0" />
                     <span className="md:text-[16px] text-[13px] text-gray-700">{feature}</span>
                   </li>
                 ))}
               </ul>
   
               {/* Buttons */}
               <button className={`md:w-full w-[55%] md:py-4 py-2 rounded-xl font-bold transition-all shadow-lg active:scale-95 ${
                 pkg.isPopular 
                   ? 'bg-[#AC1B9E] hover:bg-[#921473] text-[#F1F3F4] text-[16px]' 
                   : 'bg-[#0e9c9d] text-white text-[16px] hover:bg-gray-100 hover:text-[#4C4480]'
               }`}>
                 {pkg.buttonText}
               </button>
             </div>
           ))}
         </div>
   
         {/* Footer / Custom Solution */}
        <div className='flex flex-col items-center justify-center'>
            <div className="md:mt-20 mt-4 text-center text-white">
           <p className="text-[20px] text-[#F1F3F480]/50 mb-6">Need a custom Marketing strategy? Let's create one tailored for you!</p>
          <div className='flex flex-row items-center justify-center'>
            <button className="flex text-[16px] items-center gap-3 bg-[#4C4480] hover:bg-[#3D366A] text-[#F1F3F4] px-10 py-4 rounded-xl font-semibold shadow-2xl transition-all">
             <FaComments size={20} />
             Discuss Custom Strategy
           </button>
          </div>
         </div>
        </div>
       </section>
  );
}
