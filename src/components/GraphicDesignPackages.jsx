import React from 'react';
import { FaCheck, FaPaintBrush, FaCrown, FaAddressCard, FaComments } from 'react-icons/fa';


export default function GraphicDesignPackages() {
    const packages = [
        {
          name: "Logo Design",
          price: "8,000",
          description: "Professional logo design services",
          icon: <FaPaintBrush />,
          features: [
            "3 initial concepts", "2 rounds of revisions", "High-resolution files", 
            "Vector formats(AI,EPS)", "PNG & JPEG files", "Color and monochrome versions", "3-5 days delivery"
          ],
          buttonText: "Order Logo",
          isPopular: false
        },
        {
          name: "Brand Identity",
          price: "25,000",
          description: "Complete brand packages",
          icon: <FaAddressCard />,
          features: [
            "Logo design", "Business card design", "Letterhead design", 
            "Brand guidelines", "Color palette", "Typography guide", 
            "Social media templates", "7-10 delivery days"
          ],
          buttonText: "Order Brand Identity",
          isPopular: true
        },
        {
          name: "Complete Design",
          price: "50,000",
          description: "Everything you need for your brand",
          icon: <FaCrown />,
          features: [
            "Full brand identity package", "Marketing materials(5 items)", "Social media graphics(10)", 
            "Website Graphics", "Email signatures", "Packaging design(if needed)", 
            "Unlimited revisions", "10-14 days delivery"
          ],
          buttonText: "Order Complete Package",
          isPopular: false
        }
      ];
  return (
    <section className="bg-[#0E9C9D] py-20 px-6 flex flex-col items-center font-sans">
          {/* Header */}
          <div className="text-center mb-16 text-[#F1F3F4]">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Graphic Design Packages</h2>
            <p className="text-[24px] text-[#F1F3F480]/50 leading-relaxed">Affordable design packages to meet your creative needs</p>
          </div>
    
          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full items-start">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative rounded-[32px] p-8 border border-white/20 flex flex-col items-center text-white transition-all duration-300 hover:scale-[1.02] ${
                  pkg.isPopular ? 'bg-white/10 backdrop-blur-md py-12 -mt-4 shadow-2xl z-10' : 'bg-transparent'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-0 bg-[#0FC8CA] text-[12px] text-[#F1F3F4] font-bold uppercase tracking-widest px-4 py-1 rounded-[6px] shadow-lg">
                    Most Popular
                  </span>
                )}
    
                {/* Icon */}
                <div className="w-16 h-16 bg-[#F1F3F4] rounded-2xl flex items-center justify-center text-[#0FB7B7] text-3xl mb-6 shadow-xl">
                  {pkg.icon}
                </div>
    
                <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-2">
                <span className="text-sm font-medium mr-1 uppercase  text-[#F1F3F480]/50">PKR</span>
                  <span className="text-5xl font-bold">{pkg.price}</span>
                </div>
                <p className="text-[14px] text-[#F1F3F480]/50  mb-8">{pkg.description}</p>
    
                <div className="w-full border-t border-white/20 mb-8"></div>
    
                {/* Features List */}
                <ul className="w-full space-y-4 mb-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm gap-3">
                      <FaCheck className="text-[#26D0CE] flex-shrink-0" />
                      <span className="text-[16px] text-[#F1F3F4]">{feature}</span>
                    </li>
                  ))}
                </ul>
    
                {/* Buttons */}
                <button className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 ${
                  pkg.isPopular 
                    ? 'bg-[#AC1B9E] hover:bg-[#921473] text-[#F1F3F4] text-[16px]' 
                    : 'bg-[#F1F3F4] text-[#4C4480] text-[16px] hover:bg-gray-100'
                }`}>
                  {pkg.buttonText}
                </button>
              </div>
            ))}
          </div>
    
          {/* Footer / Custom Solution */}
          <div className="relative z-10 mt-24 w-full max-w-4xl">
             <div className="bg-black/10 backdrop-blur-md rounded-[32px] p-10 border border-white/5 text-center">
                <p className="text-[18px] md:text-[22px] text-white/80 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
                    Need individual design items? We offer custom pricing for any design project!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="flex text-[16px] items-center gap-3 bg-[#4C4480] hover:bg-[#3D366A] text-[#F1F3F4] px-12 py-5 rounded-2xl font-bold shadow-2xl transition-all hover:scale-105 active:scale-95">
                        <FaComments size={20} />
                        Discuss Custom Project
                    </button>
                </div>
             </div>
          </div>
        </section>
  );
}
