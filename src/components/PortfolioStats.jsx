
import React from 'react';
import { FaBriefcase, FaHeart, FaStar, FaGlobe } from "react-icons/fa";
import grids from "../assets/grids.png";

export default function PortfolioStats() {
    const stats = [
        {
            label: "250+",
            sub: "COMPLETED PROJECTS",
            color: "bg-[#FFEDD5]", 
            iconColor: "text-[#F97316]",
            icon: FaBriefcase,
        },
        {
            label: "180+",
            sub: "HAPPY CLIENTS",
            color: "bg-[#FEE2E2]",
            iconColor: "text-[#EF4444]",
            icon: FaHeart,
        },
        {
            label: "98%",
            sub: "SUCCESS RATE",
            color: "bg-[#FEF9C3]", 
            iconColor: "text-[#EAB308]",
            icon: FaStar,
        },
        {
            label: "25+",
            sub: "INDUSTRIES",
            color: "bg-[#DBEAFE]", 
            iconColor: "text-[#3B82F6]",
            icon: FaGlobe,
        }
    ];

    return (
        <section className="relative bg-white flex justify-center object-cover "  style={{ 
            backgroundImage: `url(${grids})`,
          }}>
              {/* 1. Container Card with Grid Overlay */}
              <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] p-4 md:p-20">
            <div className="max-w-7xl mx-auto md:px-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-2">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div 
                                key={index} 
                                className="flex items-center px-2 py-4 md:p-6 bg-[#F1F3F4] rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 transition-transform hover:scale-105"
                            >
                                {/* Icon Container */}
                                <div className={`${stat.color} md:w-12 md:h-12 w-10 h-10 flex flex-col md:flex-row items-center justify-center rounded-lg mr-4 flex-shrink-0`}>
                                    <Icon className={`${stat.iconColor} text-xl`} />
                                </div>
                                {/* Text Content */}
                                <div className="flex flex-col">
                                    <span className="text-[24px] font-bold text-[#2B2C34] leading-none">
                                        {stat.label}
                                    </span>
                                    <span className="text-[14px] font-bold text-[#2B2C3480]/50 mt-1 tracking-wider">
                                        {stat.sub}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                </div>
            </div>
        </section>
    );
}



