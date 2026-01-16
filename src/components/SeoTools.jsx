import React from 'react';
import { motion } from "framer-motion";
import { 
  SiSemrush, SiGoogleanalytics, SiGooglesearchconsole, 
   SiGrammarly, SiYoast 
} from 'react-icons/si';
import { TbWorldSearch, TbAnalyze, TbFileCode, TbSitemap, TbWriting, TbSearch ,TbChartBar} from 'react-icons/tb';

export default function SeoTools() {
  const analysisTools = [
    { name: "SEMrush", icon: SiSemrush },
    { name: "Ahrefs", icon: TbChartBar },
    { name: "Google Analytics", icon: SiGoogleanalytics },
    { name: "Google Search Console", icon: SiGooglesearchconsole },
    { name: "Screaming Frog", icon: TbAnalyze },
    { name: "GTmetrix", icon: TbWorldSearch },
  ];

  const contentTools = [
    { name: "Yoast SEO", icon: SiYoast },
    { name: "Surfer SEO", icon: TbSearch },
    { name: "Grammarly", icon: SiGrammarly },
    { name: "Copyscape", icon: TbWriting },
    { name: "Schema Markup", icon: TbFileCode },
    { name: "XML Sitemaps", icon: TbSitemap },
  ];

  const ToolCard = ({ name, icon: Icon }) => (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.02)] overflow-hidden group cursor-default"
    >
      {/* Middle to Sides Background Hover Layer */}
      <motion.div
        variants={{
          initial: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#4C4480]/5 z-0 origin-center"
      />

      {/* Icon and Text Wrapper */}
      <div className="relative z-10 flex items-center w-full">
        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white transition-colors duration-300">
          <Icon className="text-xl text-[#1A2B4E] group-hover:scale-110 group-hover:text-[#0FC8CA] transition-transform duration-300" />
        </div>
        <span className="text-[#1A2B4E] font-semibold text-sm group-hover:text-[#4C4480] transition-colors duration-300">
          {name}
        </span>
      </div>
    </motion.div>
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
            SEO Tools We Use
          </motion.h2>
          <div className="w-16 h-1 bg-[#0FC8CA] mx-auto rounded-full"></div>
          <p className="text-[#4C448080] text-lg max-w-2xl mx-auto">
            Professional SEO tools and software for comprehensive optimization
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Column 1: Analysis & Research */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0FC8CA] font-serif">Analysis & Research Tools</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                We use industry-leading tools for keyword research, competitor analysis, and performance tracking to ensure optimal results.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {analysisTools.map((tech, idx) => <ToolCard key={idx} {...tech} />)}
            </div>
          </div>

          {/* Column 2: Content & Optimization */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0FC8CA] font-serif">Content & Optimization</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Advanced content optimization and technical SEO tools to ensure your website meets all search engine requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contentTools.map((tech, idx) => <ToolCard key={idx} {...tech} />)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}