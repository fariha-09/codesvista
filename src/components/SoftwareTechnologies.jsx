import React from 'react';
import { motion } from "framer-motion";
import { 
  SiJavascript, SiSpringboot, SiDotnet, SiPython, 
  SiDjango, SiNodedotjs, SiPhp, SiLaravel, 
  SiRuby, SiRubyonrails, SiReact, SiFlutter, 
  SiSwift, SiKotlin, SiVuedotjs 
} from 'react-icons/si';

export default function SoftwareTechnologies() {
  const backendTech = [
    { name: "Java & Spring", icon: SiJavascript },
    { name: "C# & .NET", icon: SiDotnet },
    { name: "Python & Django", icon: SiPython },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PHP & Laravel", icon: SiPhp },
    { name: "Ruby on Rails", icon: SiRubyonrails },
  ];

  const frontendMobileTech = [
    { name: "React Native", icon: SiReact },
    { name: "Flutter", icon: SiFlutter },
    { name: "Swift (iOS)", icon: SiSwift },
    { name: "Kotlin (Android)", icon: SiKotlin },
    { name: "React.js", icon: SiReact },
    { name: "Vue.js", icon: SiVuedotjs },
  ];

  const TechCard = ({ name, icon: Icon }) => (
    <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-all duration-300 group">
      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4">
        <Icon className="text-xl text-[#1A2B4E] group-hover:scale-110 group-hover:text-[#0FC8CA] transition-transform" />
      </div>
      <span className="text-[#1A2B4E] font-semibold text-sm">{name}</span>
    </div>
  );

  return (
    <section className="bg-white py-24 px-6 md:px-20 flex justify-center">
      <div className="w-full max-w-[1400px]">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
            <motion.h2
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
                                style={{
                                  textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
                                }}
                              >
            Technologies We Master
          </motion.h2>
          <div className="w-16 h-1 bg-[#0FC8CA] mx-auto rounded-full"></div>
          <p className="text-[#4C448080] text-lg max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust and scalable software
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Column 1: Backend Technologies */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0FC8CA] font-serif">Backend Technologies</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-lg">
                Powerful backend solutions built with modern frameworks and languages for performance and scalability.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {backendTech.map((tech, idx) => <TechCard key={idx} {...tech} />)}
            </div>
          </div>

          {/* Column 2: Mobile & Frontend */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0FC8CA] font-serif">Mobile & Frontend</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-lg">
                Modern mobile and frontend technologies for creating intuitive user experiences across all platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {frontendMobileTech.map((tech, idx) => <TechCard key={idx} {...tech} />)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}