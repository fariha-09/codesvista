import React from 'react';
import { FaCheck, FaStar, FaCrown, FaGem, FaComments } from 'react-icons/fa';

export default function WebdevelopmentPackages() {
  const packages = [
    {
      name: "Basic Website",
      price: "25,000",
      description: "Perfect for small businesses",
      icon: <FaStar />,
      features: [
        "Up to 5 pages", "Responsive design", "Contact form", 
        "SEO optimization", "3 months support", "Free domain setup", "Social media integration"
      ],
      buttonText: "Choose Basic",
      isPopular: false
    },
    {
      name: "Professional",
      price: "50,000",
      description: "Great for growing businesses",
      icon: <FaCrown />,
      features: [
        "Up to 10 pages", "Custom design", "Admin panel", 
        "Blog system", "Gallery/Portfolio", "6 months support", 
        "Google Analytics", "Live chat integration"
      ],
      buttonText: "Choose Professional",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "100,000",
      description: "For large businesses",
      icon: <FaGem />,
      features: [
        "Unlimited pages", "Advanced features", "User management", 
        "API integrations", "Advanced SEO", "12 months support", 
        "Performance optimization", "Priority support"
      ],
      buttonText: "Choose Enterprise",
      isPopular: false
    }
  ];

  return (
    <section className="bg-[#0E9C9D] py-20 px-6 flex flex-col items-center font-sans">
      {/* Header */}
      <div className="text-center mb-16 text-[#F1F3F4]">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Web Development Packages</h2>
        <p className="text-[24px] text-[#F1F3F480]/50 leading-relaxed">Choose the perfect package for your business needs and budget</p>
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
     <div className='flex flex-col items-center justify-center'>
         <div className="mt-20 text-center text-white">
        <p className="text-[20px] text-[#F1F3F480]/50 mb-6">Need a custom solution? We can build exactly what you need!</p>
       <div className='flex flex-row items-center justify-center'>
         <button className="flex text-[16px] items-center gap-3 bg-[#4C4480] hover:bg-[#3D366A] text-[#F1F3F4] px-10 py-4 rounded-xl font-semibold shadow-2xl transition-all">
          <FaComments size={20} />
          Discuss Custom Project
        </button>
       </div>
      </div>
     </div>
    </section>
  );
}