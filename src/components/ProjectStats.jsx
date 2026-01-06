import React from 'react';
import { FaSitemap, FaUsers, FaCode, FaAward } from "react-icons/fa";

export default function ProjectStats() {
    const stats = [
        {
            label: "250",
            sub: "PROJECTS COMPLETED",
            icon: FaSitemap,
        },
        {
            label: "180",
            sub: "HAPPY CLIENTS",
            icon: FaUsers,
        },
        {
            label: "50000",
            sub: "LINES OF CODE",
            icon: FaCode,
        },
        {
            label: "35",
            sub: "AWARDS WON",
            icon: FaAward,
        }
    ];

    return (
        <section className="bg-[#0E9C9D] py-20 px-6 text-center">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-16">
                    <h2 className="text-[#F1F3F4] text-5xl md:text-6xl font-serif font-bold mb-4">
                        Project Statistics
                    </h2>
                    <p className="text-[#F1F3F4] text-[16px] md:text-base max-w-2xl mx-auto font-normal tracking-wide">
                        Numbers that reflect our commitment to excellence and client satisfaction
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div 
                                key={index} 
                                className="border border-[#F1F3F4] bg-[#F1F3F41A]/10 rounded-[20px] p-10 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/5"
                            >
                                {/* White Icon Box */}
                                <div className="bg-[#F1F3F4] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                    <Icon className="text-[#0E9C9D] text-2xl" />
                                </div>

                                {/* Number Label */}
                                <span className="text-[#F1F3F4] text-4xl font-bold mb-2">
                                    {stat.label}
                                </span>

                                {/* Subtext */}
                                <span className="text-[#F1F3F4E5]/90 text-[14px] font-bold tracking-[0.2em] uppercase text-center">
                                    {stat.sub}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}