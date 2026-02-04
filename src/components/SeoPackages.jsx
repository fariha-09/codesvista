import React from 'react';
import { 
  FaCheck, FaCrown, FaRocket, FaSeedling, FaComments
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SeoPackages() {
  const packages = [
    {
      name: "Basic SEO",
      price: "20,000",
      description: "Perfect for small websites",
      icon: <FaSeedling />,
      features: [
        "Technical SEO Audit", "Keyword Research(20 Keywords)", "On-page Optimization", 
        "4 Blog posts per month", "Monthly progress report", "Google Analytics setup", "Email support"
      ],
      buttonText: "Choose Basic SEO",
      isPopular: false
    },
    {
      name: "Professional SEO",
      price: "40,000",
      description: "Great for growing websites",
      icon: <FaRocket />,
      features: [
        "Up to 5 pages", "Responsive design", "Admin panel", 
        "Blog system", "Gallery/Portfolio", "6 months support", 
        "Google Analytics", "Live chat integration"
      ],
      buttonText: "Choose Professional",
      isPopular: true
    },
    {
      name: "Enterprise SEO",
      price: "80,000",
      description: "For large websites and businesses",
      icon: <FaCrown />,
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
    <section className="bg-[#0E9C9D] md:py-20 py-8 px-6 flex flex-col items-center font-sans">
      {/* Header */}
      <div className="text-center md:mb-16 mb-2 text-[#F1F3F4]">
        <h2 className="text-2xl md:text-6xl font-serif font-bold md:mb-4">SEO & Content Packages</h2>
        <p className="md:text-[24px] text-[20px] text-[#F1F3F480]/50 leading-normal">Choose the right SEO package to improve your search rankings</p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 max-w-7xl w-full items-start">
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className={`relative rounded-[32px] md:p-8 p-4 border border-white/20 flex flex-col items-center text-gray-700 transition-all duration-300 hover:scale-[1.02] ${
              pkg.isPopular ? 'bg-white backdrop-blur-md py-12 -mt-4 shadow-2xl z-10' : 'bg-white'
            }`}
          >
            {pkg.isPopular && (
              <span className="absolute -top-0 bg-[#0FC8CA] text-[12px] text-[#F1F3F4] font-bold uppercase tracking-widest px-4 py-1 rounded-[6px] shadow-lg">
                Most Popular
              </span>
            )}

            {/* Icon */}
            <div className="md:w-16 md:h-16 w-12 h-12 bg-[#F1F3F4] rounded-2xl flex items-center justify-center text-[#0FB7B7] text-3xl md:mb-6 mb-2 shadow-xl">
              {pkg.icon}
            </div>

            <h3 className="md:text-3xl text-2xl font-bold md:mb-2">{pkg.name}</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-sm font-medium mr-1 uppercase text-gray-700">PKR</span>
              <span className="md:text-5xl text-2xl font-bold">{pkg.price}</span>
            </div>
            <p className="text-[14px] text-gray-700 md:mb-8 mb-2">{pkg.description}</p>

            <div className="w-full border-t border-white/20 md:mb-8 mb-4"></div>

            {/* Features List */}
            <ul className="w-full space-y-2 md:space-y-4 md:mb-10 mb-4">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm gap-3">
                  <FaCheck className="text-[#26D0CE] md:flex-shrink-0" />
                  <span className="md:text-[16px] text-[13px] text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
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
      <div className="flex flex-col items-center justify-center">
        <div className="md:mt-20 mt-4 text-center text-white">
          <p className="text-[20px] text-[#F1F3F480]/50 mb-6">Need a custom SEO strategy? Let's create one tailored for your business!</p>
          <div className="flex flex-row items-center justify-center">
            <button className="flex text-[16px] items-center gap-3 bg-[#4C4480] hover:bg-[#3D366A] text-[#F1F3F4] px-10 py-4 rounded-xl font-semibold shadow-2xl transition-all">
              <FaComments size={20} />
              Discuss Custom SEO Strategy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
