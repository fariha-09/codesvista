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

const categories = [
  { name: "All Projects", count: 18, icon: RiLayoutGridFill },
  { name: "Web Development", count: 9, icon: FaCode },
  { name: "Mobile Apps", count: 2, icon: IoIosPhonePortrait },
  { name: "Ecommerce", count: 4, icon: FaShoppingCart },
  { name: "UI/UX Design", count: 3, icon: FaPencilAlt },
];

export default function OurLatestWork() {
  const [activeTab, setActiveTab] = useState("All Projects");

  return (
    <section
      className="relative bg-white flex justify-center object-cover "
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] p-10 md:p-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2B2C34] mb-6">
            Our Latest Work
          </h1>
          <p className="text-[#2B2C3480]/50 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Explore our diverse portfolio showcasing innovative solutions across
            various industries. Each project represents our dedication to
            delivering exceptional digital experiences.
          </p>
        </div>

        {/* Filter Bar - Exactly as in Figma Screenshot */}
        <div className="flex flex-wrap justify-center items-center gap-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-gray-100 mb-16 max-w-fit mx-auto">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeTab === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#6D28D9] text-white shadow-lg shadow-indigo-200"
                    : "text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-200"
                }`}
              >
                {/* 2. Apply your color logic directly to the icon component */}
                <IconComponent
                  className={`text-lg transition-colors duration-300 ${
                    isActive ? "text-[#FFFFFF]" : "text-[#2B2C34]"
                  }`}
                />

                {cat.name}

                <span
                  className={`ml-1 px-1.5 py-0.5 rounded-md text-[10px] transition-colors duration-300 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-[#2B2C34]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
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
            </div>
          ))}
        </div>

      <div className="flex justify-center mt-16">
  <button className="flex items-center gap-2 bg-[#F97316] text-[#FFFFFF] text-[16px] font-semibold py-3 px-8 rounded-[8px] transition-all duration-300 hover:bg-[#ea580c] hover:shadow-lg hover:shadow-orange-100 active:scale-95">
    <FaPlus className="text-sm" />
    Load More Projects
  </button>
</div>

        
      </div>
    </section>
  );
}

