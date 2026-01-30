import React, { useState } from "react";
import grids from "../assets/grids.png";
import { RiLayoutGridFill } from "react-icons/ri";
import { FaCode, FaShoppingCart, FaPencilAlt,FaPlus } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import carsystem from "../assets/carsystem.jpg";
import blog from "../assets/blog.jpg";
import elearning from "../assets/elearning.jpg";
import lawfirm from "../assets/lawfirm.jpg";
import marketing from "../assets/marketing.png";
import realestate from "../assets/realestate.jpg";
import hospital from "../assets/hospital.jpg";
import corporate from "../assets/corporate.jpg";
import educational from "../assets/educational.jpg";
import { motion,AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Car Parking Management System",
    desc: "Comprehensive parking solution with smart booking and management features.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: carsystem,
    category: "Web Development",
  },
  {
    title: "Law Firm Website",
    desc: "Professional legal services website with modern design and consultation booking.",
    tags: ["WordPress", "PHP", "Custom Theme", "SEO"],
    image: lawfirm,
    category: "Web Development",
  },
  {
    title: "Blog & Affiliate Platform",
    desc: "Content-rich website with affiliate marketing and monetization features.",
    tags: ["WordPress", "Affiliate Marketing", "SEO", "AdSense"],
    image: blog,
    category: "Web Development",
  },
  {
    title: "E-Learning Platform",
    desc: "Comprehensive online education platform with interactive learning features.",
    tags: ["Laravel", "Vue.js", "Video Streaming", "PayPal"],
    image: elearning,
    category: "Web Development",
  },
  {
    title: "Marketing Agency Website",
    desc: "Modern agency website with lead generation and service presentation.",
    tags: ["React.js", "Node.js", "Bootstrap", "Analytics"],
    image: marketing,
    category: "Web Development",
  },
  {
    title: "Real Estate Portal",
    desc: "Comprehensive property management and listing platform.",
    tags: ["Laravel", "Maps API", "Property Search", "Agent Portal"],
    image: realestate,
    category: "Web Development",
  },
  {
    title: "Hospital Management System",
    desc: "Comprehensive healthcare solution with patient and staff management.",
    tags: ["PHP", "MySQL", "Bootstrap", "Chart.js"],
    image: hospital,
    category: "Web Development",
  },
  {
    title: "Corporate Business Portal",
    desc: "Enterprise-level business website with advanced features.",
    tags: ["WordPress", "Custom Theme", "SEO", "Multi-language"],
    image: corporate,
    category: "Web Development",
  },
  {
    title: "Educational Management Portal",
    desc: "Comprehensive school management with online learning features.",
    tags: ["Laravel", "Vue.js", "WebRTC", "MySQL"],
    image: educational,
    category: "Web Development",
  },
];
const filters = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "Ecommerce",
  "UI/UX Design",
];

const categories = [
  { name: "All Projects", count: 18, icon: RiLayoutGridFill },
  { name: "Web Development", count: 9, icon: FaCode },
  { name: "Mobile Apps", count: 2, icon: IoIosPhonePortrait },
  { name: "Ecommerce", count: 4, icon: FaShoppingCart },
  { name: "UI/UX Design", count: 3, icon: FaPencilAlt },
];

export default function OurLatestWork() {
  const [activeTab, setActiveTab] = useState("All Projects");

  const filteredProjects =
  activeTab === "All Projects"
    ? projects
    : projects.filter((project) => project.category === activeTab);

  

  return (
    <section
      className="relative bg-white flex justify-center object-cover "
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      <div className="relative w-full  overflow-hidden bg-white/[98%] p-4 pt-16 md:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
           <motion.h2
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text"
                      style={{
                        textShadow: `
                                      0 0 38px rgba(0, 206, 209, 0.45),
                                      0 0 20px rgba(0, 206, 209, 0.25)
                                    `,
                      }}
                    >
                      Our Latest Work
                    </motion.h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Explore our diverse portfolio showcasing innovative solutions across
            various industries. Each project represents our dedication to
            delivering exceptional digital experiences.
          </p>
        </div>

        {/* Filter Bar - Exactly as in Figma Screenshot */}
         <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12 relative z-10">
  {filters.map((filter) => (
    <button
      key={filter}
      onClick={() => setActiveTab(filter)}
      className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${
        activeTab === filter
          ? "bg-[#0FC8CA] text-white border-[#0FC8CA] shadow-lg scale-105"
          : "bg-white text-[#4C4480] border-gray-200 hover:border-[#0FC8CA] hover:text-[#0FC8CA]"
      }`}
    >
      {filter}
    </button>
  ))}
</div>
                

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <AnimatePresence>
    {filteredProjects.map((project, index) => (
      <motion.div
        layout
        key={project.title}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50"
      >
              {/* Image Container */}
              <div className="h-[240px] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content Container */}
              <div className="p-8">
                <h3 className="text-[18px] font-semibold text-[#2B2C34] mb-3 group-hover:text-[#6366F1] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#2B2C3480]/50 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[#F8F9FA] text-[#2B2C34] text-[11px] font-bold rounded-lg border border-gray-100 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
    ))}
  </AnimatePresence>
</motion.div>

      <div className="flex justify-center md:mt-16 mt-8">
  <button className="flex items-center gap-2 bg-[#AC1B9E] text-[#FFFFFF] text-[16px] font-semibold py-3 px-8 rounded-[8px] transition-all duration-300 hover:bg-[#8d1281] hover:shadow-lg hover:shadow-orange-100 active:scale-95">
    <FaPlus className="text-sm" />
    Load More Projects
  </button>
</div>

        
      </div>
    </section>
  );
}

