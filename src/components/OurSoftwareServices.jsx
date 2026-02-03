import React from 'react';
import { motion } from "framer-motion";
import { 
  FaMobileAlt, 
  FaDesktop, 
  FaCogs, 
  FaCode, 
  FaDatabase, 
  FaCloud 
} from 'react-icons/fa';
import grids from "../assets/grids.png"; 

export default function OurSoftwareServices() {
  const softwareOffers = [
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["Native iOS & Android apps", "Cross-platform solutions", "App store optimization", "Offline functionality"],
      icon: FaMobileAlt,
    },
    {
      title: "Desktop Applications",
      desc: "Windows, Mac, and Linux desktop applications with modern interfaces.",
      features: ["Linux compatibility", "Windows applications", "Mac OS applications", "Modern UI/UX design", "Database integration"],
      icon: FaDesktop,
    },
    {
      title: "Enterprise Systems",
      desc: "Large-scale enterprise software solutions with advanced functionality.",
      features: ["Custom ERP systems", "CRM solutions", "Multi-user platforms", "Advanced reporting", "Role-based access"],
      icon: FaCogs,
    },
    {
      title: "API Development",
      desc: "RESTful APIs and web services for seamless system integrations.",
      features: ["REST API development", "GraphQL APIs", "Third-party integrations", "API documentation", "Security implementation"],
      icon: FaCode,
    },
    {
      title: "Database Solutions",
      desc: "Database design, optimization, and management solutions.",
      features: ["Database architecture", "Performance optimization", "Data migration services", "Backup & recovery", "Security implementation"],
      icon: FaDatabase,
    },
    {
      title: "Cloud Solutions",
      desc: "Cloud-based applications and migration services for scalability.",
      features: ["Cloud architecture design", "AWS/Azure deployment", "Migration services", "Scalable solutions", "DevOps implementation"],
      icon: FaCloud,
    },
  ];

  return (
    <section
         className="relative bg-white flex justify-center object-cover"
         style={{ backgroundImage: `url(${grids})` }}
       >
         <div className="relative w-full overflow-hidden bg-white/[98%] py-10 px-4 md:p-20">
           <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 md:mb-16 mb-10">
          <motion.h2 
             initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-2xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
                      style={{
                        textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
                      }}
                    >
            Our Software Development Services
          </motion.h2>
          <div className="w-16 h-1 bg-[#0FC8CA] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive software solutions for all your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-3">
          {softwareOffers.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial="initial"
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-[20px] md:p-10 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center group transition-all duration-300 overflow-hidden"
              >
                {/* Your Middle-to-Sides Hover Layer */}
                <motion.div
                  variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[#4C4480]/5 z-0 origin-center"
                />

                {/* Icon Container */}
                <div className="relative z-10 md:w-20 md:h-20 w-16 h-16 bg-[#F1F3F4] rounded-2xl flex items-center justify-center md:mb-8 mb-3 transition-all duration-300 group-hover:bg-[#0FC8CA] group-hover:shadow-lg">
                  <Icon className="md:text-3xl text-xl text-[#0FC8CA] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex flex-col items-center flex-grow">
                  <h3 className="text-[#0FC8CA] md:text-2xl text-xl font-bold md:mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#4C448080] text-sm leading-relaxed md:mb-6 mb-2">
                    {item.desc}
                  </p>

                  {/* Bullet Points List */}
                  <ul className="text-left space-y-2 md:mb-8 mb-4">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-gray-600 text-[13px] flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#1A2B4E] rounded-full mr-3 opacity-60"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get Custom Quote Button */}
                <button className="relative z-10 mt-auto w-full py-3 border-2 border-[#0FC8CA] text-[#1A2B4E] rounded-lg font-bold text-sm hover:bg-[#0FC8CA] hover:text-white transition-all duration-300">
                  Get Custom Quote
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}