import React from 'react';
import { motion } from 'framer-motion';
import grids from "../assets/grids.png";
import { 
  SiFlutter, SiDart, SiKotlin, SiSwift, SiApple, SiAndroid,
  SiFirebase, SiNodedotjs, SiMongodb, SiPostgresql, 
  SiAmazonwebservices, SiGraphql 
} from "react-icons/si";

export default function AppTechnologies() {
  const platforms = [
    { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
    { name: "Dart", icon: <SiDart className="text-[#0175C2]" /> },
    { name: "Native Android (Kotlin)", icon: <SiKotlin className="text-[#7F52FF]" /> },
    { name: "Native iOS (Swift)", icon: <SiSwift className="text-[#F05138]" /> },
    { name: "Cross-Platform", icon: <SiAndroid className="text-[#3DDC84]" /> },
    { name: "PWA Solutions", icon: <SiApple className="text-[#555555]" /> },
  ];

  const infrastructure = [
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "GraphQL & REST", icon: <SiGraphql className="text-[#E10098]" /> },
    { name: "AWS Cloud", icon: <SiAmazonwebservices className="text-[#232F3E]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  ];

  const TechCard = ({ name, icon }) => (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex items-center gap-3 px-5 py-3 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-[#4C4480] hover:shadow-md transition-all cursor-default"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-[#4C4480] font-semibold text-[15px]">{name}</span>
    </motion.div>
  );

  return (
    <section className="relative bg-white flex justify-center overflow-hidden" style={{ backgroundImage: `url(${grids})`, backgroundSize: 'cover' }}>
      <div className="relative w-full max-w-[1400px] bg-white/[98%] p-10 md:p-20">
        
        {/* Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-20">
        <motion.h2
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text "
                      style={{
                        textShadow: `
                                    0 0 38px rgba(0, 206, 209, 0.45),
                                    0 0 20px rgba(0, 206, 209, 0.25)
                                  `,
                      }}
                    >
            App Tech Stack
          </motion.h2>
          <div className="w-20 h-1 bg-[#0FC8CA] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4C448080]/50 text-lg md:text-[20px]  mx-auto leading-relaxed">
            We specialize in <strong>Flutter</strong> to deliver fast, cost-effective, and high-performance apps for all mobile platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Platforms Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0FC8CA] font-serif">Platforms & Frontend</h3>
              <p className="text-[#4C448080] leading-relaxed text-sm md:text-base">
                Using Flutter's single codebase, we ensure consistent UI across platforms with lower maintenance costs and native-level performance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platforms.map((tech, i) => <TechCard key={i} {...tech} />)}
            </div>
          </div>

          {/* Infrastructure Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0FC8CA] font-serif">Backend & Cloud</h3>
              <p className="text-[#4C448080] leading-relaxed text-sm md:text-base">
                Our mobile backends are built with scalable architecture to handle real-time data sync, secure authentication, and cloud integration.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infrastructure.map((tech, i) => <TechCard key={i} {...tech} />)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}