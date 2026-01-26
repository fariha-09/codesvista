import React from "react";
import { motion } from "framer-motion";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobeaftereffects,
  SiFigma,
  SiSketch,
  SiCanva,
} from "react-icons/si";
import { FaCubes } from "react-icons/fa";

export default function DesignTools() {
  const adobeSuite = [
    { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
    { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
    { name: "Adobe InDesign", icon: SiAdobeindesign, color: "#FF3366" },
    {
      name: "Adobe After Effects",
      icon: SiAdobeaftereffects,
      color: "#9999FF",
    },
  ];

  const additionalTools = [
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Sketch", icon: SiSketch, color: "#FDB300" },
    { name: "Canva Pro", icon: SiCanva, color: "#00C4CC" },
    { name: "3D Design Tools", icon: FaCubes, color: "#1A2B4E" },
  ];

  const ToolItem = ({ name, icon: Icon, color }) => (
    <div className="flex items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 group">
      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-4 shadow-inner">
        <Icon
          style={{ color: color }}
          className="text-xl group-hover:scale-110 transition-transform"
        />
      </div>
      <span className="text-[#1A2B4E] font-semibold text-sm md:text-base">
        {name}
      </span>
    </div>
  );

  return (
    <section className="bg-white md:py-24 py-16 px-6 md:px-20 flex justify-center">
      <div className="w-full">
        {/* Main Title Section */}
        <div className="text-center md:mb-20 mb-4 space-y-4">
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
            Professional Design Tools
          </motion.h2>

          <div className="w-20 h-1 bg-[#0FC8CA] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We use industry-leading software to create stunning designs
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Column 1: Adobe Creative Suite */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0FC8CA] font-serif">
                Adobe Creative Suite
              </h3>
              <p className="text-[#4C448080] leading-relaxed text-sm md:text-base">
                Our designers are experts in Adobe's professional design tools,
                ensuring high-quality output and industry-standard file formats.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {adobeSuite.map((tool, idx) => (
                <ToolItem key={idx} {...tool} />
              ))}
            </div>
          </div>

          {/* Column 2: Additional Design Tools */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0FC8CA] font-serif">
                Additional Design Tools
              </h3>
              <p className="text-[#4C448080] leading-relaxed text-sm md:text-base">
                We also utilize other powerful design and collaboration tools to
                streamline our workflow and deliver exceptional results.
              </p>
            </div>
            <div className="grid grid-cols-2s sm:grid-cols-2 gap-4">
              {additionalTools.map((tool, idx) => (
                <ToolItem key={idx} {...tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
