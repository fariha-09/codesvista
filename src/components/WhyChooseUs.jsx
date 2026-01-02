import React from 'react';
import grids from "../assets/grids.png";
import { FaRocket, FaAward, FaHeadset, FaUsers, FaShieldAlt, FaChartLine, FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Rapid Design Delivery",
      desc: "We turn concepts into reality with speed and precision. Using advanced prototyping tools, we reduce wait times so you can launch faster.",
      icon: <FaRocket className="text-[#F1F3F4] text-3xl" />,
      points: ["24-48 hour initial concept turnaround", "Real-time collaboration via Figma", "Agile design sprints"]
    },
    {
      title: "Perfect Quality",
      desc: "Excellence is our standard. We guarantee high-fidelity designs that align perfectly with your brand identity, offering revisions until you are thrilled.",
      icon: <FaAward className="text-[#F1F3F4] text-3xl" />,
      points: ["100% satisfaction guarantee", "Rigorous visual consistency checks", "Unlimited revisions during the design phase"]
    },
    {
      title: "Collaborative Support",
      desc: "We don't just work for you; we work with you. Our team maintains open lines of communication to ensure your vision is captured in every pixel.",
      icon: <FaHeadset className="text-[#F1F3F4] text-3xl" />,
      points: ["Direct access to your lead designer", "Regular progress video updates", "Free maintenance included"]
    },
    {
      title: "Expert Team",
      desc: "Our designers are certified experts in the latest industry standards. We blend artistic talent with user-experience.",
      icon: <FaUsers className="text-[#F1F3F4] text-3xl" />,
      points: ["Experts in Adobe XD & Figma", "Certified developers", "Continuous training"]
    },
    {
      title: "Security First",
      desc: "Enterprise-grade security measures to protect your data and ensure your business operations remain safe.",
      icon: <FaShieldAlt className="text-[#F1F3F4] text-3xl" />,
      points: ["SSL encryption", "Regular security audits", "GDPR compliant"]
    },
    {
      title: "Scalable Solutions",
      desc: "Future-proof solutions that grow with your business. Built for scalability and long-term success.",
      icon: <FaChartLine className="text-[#F1F3F4] text-3xl" />,
      points: ["Cloud-ready architecture", "Easy upgrades", "Performance optimization"]
    }
  ];

  return (
     <section className="relative bg-white flex justify-center object-cover "  style={{ 
        backgroundImage: `url(${grids})`,
      }}>
          {/* 1. Container Card with Grid Overlay */}
          <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] p-10 md:p-20">
    
            {/* 2. Header Content */}
            <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#4C4480]">
            Why Choose Codes Vista
          </h1>
          <p className="text-[#4C448080] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We combine creative vision, technical mastery, and strategic thinking to deliver<br/> design solutions that elevate your brand.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((item, index) => (
            <div key={index} className="bg-[#F8F9FA]  p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              
              {/* Icon Box */}
              <div className="bg-[#0E9C9D] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0E9C9D]/20">
                {item.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-[#4C4480] text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#4C448080] text-[15px] leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Checkmark Points */}
              <div className="w-full space-y-3 text-left pl-4">
                {item.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#34D399] text-lg shrink-0" />
                    <span className="text-[#4C448080] text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}