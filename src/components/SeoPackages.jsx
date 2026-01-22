import React from 'react';
import { 
  FaCheck, FaCrown, FaComments, FaSeedling, FaRocket,
  FaRss, FaFileAlt, FaShoppingBag, FaShareAlt
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
        "4 Blog posts per month", " Monthly progress report", "Google Analytics setup", "Email support"
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
        "Up to 5 pages", "responsive design", "Admin panel", 
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
  const writingServices = [
    { title: "Blog Writing", price: "PKR 2,500/post", desc: "SEO-optimized blog posts (800-1200 words)", icon: FaRss },
    { title: "Website Copy", price: "PKR 15,000/page", desc: "Compelling website content for all pages", icon: FaFileAlt },
    { title: "Product Descriptions", price: "PKR 500/product", desc: "Persuasive product descriptions for e-commerce", icon: FaShoppingBag },
    { title: "Social Media Content", price: "PKR 200/post", desc: "Engaging social media posts and captions", icon: FaShareAlt },
  ];

  return (
    <section className="bg-[#0E9C9D] md:py-20 py-10 md:px-6 px-4 flex flex-col items-center font-sans">
      {/* Header */}
      <div className="text-center md:mb-16 mb-10 text-[#F1F3F4]">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">SEO & Content Packages</h2>
        <p className="text-[24px] text-[#F1F3F480]/50 leading-relaxed">Choose the right SEO package improve your search rankings</p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full items-start">
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className={`relative rounded-[32px] md:p-8 p-4 border border-white/20 flex flex-col items-center text-white transition-all duration-300 hover:scale-[1.02] ${
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
            <p className="text-[14px] text-[#F1F3F480]/50 mb-4 md:mb-8">{pkg.description}</p>

            <div className="w-full border-t border-white/20 mb-8"></div>

            {/* Features List */}
            <ul className="w-full space-y-4 md:mb-10 mb-5">
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

      <div className="w-full max-w-7xl md:pt-10 mt-20 border-t border-white/20"></div >
      {/* Content Writing Services */}
      <div className="w-full max-w-7xl md:mt-16 mt-6">
        <div className="text-center md:mb-12 mb-4 text-[#F1F3F4]">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Content Writing Services</h2>
          <p className="text-lg opacity-70">Professional content writing for all your marketing needs</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-2">
          {writingServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial="initial"
                whileHover="hover"
                className="relative bg-white rounded-2xl md:p-8 p-4 flex flex-col items-center text-center overflow-hidden group transition-all"
              >
                {/* Middle-to-sides hover effect */}
                <motion.div
                  variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  className="absolute inset-0 bg-[#4C4480]/5 z-0 origin-center"
                />

                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#AC1B9E] to-[#0E9C9D] rounded-2xl flex items-center justify-center text-[#0FB7B7] text-2xl mb-6 shadow-lg">
                  <Icon />
                </div>

                <div className="relative z-10">
                  <h4 className="text-[#4C4480] font-bold text-xl mb-1">{service.title}</h4>
                  <p className="text-[#0E9C9D] font-bold mb-4">{service.price}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer / Custom Solution */}
     <div className='flex flex-col items-center justify-center'>
         <div className="md:mt-20 mt-8 text-center text-white">
        <p className="text-[20px] text-[#F1F3F480]/50 mb-6">Need a custom SEO strategy?Let's create one tailored for your business!</p>
       <div className='flex flex-row items-center justify-center'>
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
