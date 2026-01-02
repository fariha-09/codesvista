import React from "react";
import grids from "../assets/grids.png";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Clients from "./Clients";

export default function OurWork() {
  return (
    <section
      className="relative bg-white flex justify-center object-cover "
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      {/* 1. Container Card with Grid Overlay */}
      <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] p-10 md:p-20">
        {/* 2. Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#4C4480]">
            Our Work Speaks For Itself
          </h1>
          <p className="text-[#4C448080] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent projects and see how we've helped
            <br /> businesses achieve their goals{" "}
          </p>
        </div>

        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Clients/>
      </div>
    </section>
  );
}
