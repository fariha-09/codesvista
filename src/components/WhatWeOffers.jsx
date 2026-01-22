import React from "react";
import grids from "../assets/grids.png";
import designresponsive from "../assets/designsresponsive.png";
import seooptimized from "../assets/seooptimized.png";
import fastloading from "../assets/fastloading.png";
import secureandreliable from "../assets/secureandreliable.png";
import easymanagement from "../assets/easymanagement.png";
import support from "../assets/support.png";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Responsive Design",
    desc: "Websites that work perfectly on all devices - desktop, tablet, and mobile.",
    img: designresponsive,
  },
  {
    title: "SEO Optimized",
    desc: "Built with SEO best practices to help your website rank higher in search results.",
    img: seooptimized,
  },
  {
    title: "Fast Loading",
    desc: "Optimized for speed with fast loading times to keep your visitors engaged.",
    img: fastloading,
  },
  {
    title: "Secure & Reliable",
    desc: "Built with security best practices and reliable hosting solutions.",
    img: secureandreliable,
  },
  {
    title: "Easy Management",
    desc: "User-friendly admin panels to easily update and manage your website content.",
    img: easymanagement,
  },
  {
    title: "24/7 Support",
    desc: "Ongoing support and maintenance to keep your website running smoothly.",
    img: support,
  },
];

export default function WhatWeOffers() {
  return (
    <section
      className="relative bg-white flex justify-center object-cover "
      style={{
        backgroundImage: `url(${grids})`,
      }}
    >
      <div className="relative w-full max-w-[1400px]  overflow-hidden bg-white/[98%] py-10 md:py-20">
        <div className="bg-[#F1F3F4] md:py-20 p-4 px-6 w-full">
          {/* Header */}
          <div className="text-center md:mb-16 mb-4">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl md:pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text "
              style={{
                textShadow: `
                            0 0 38px rgba(0, 206, 209, 0.45),
                            0 0 20px rgba(0, 206, 209, 0.25)
                          `,
              }}
            >
              What we Offer
            </motion.h2>
            <p className="text-gray-600 text-lg md:text-[24px]  mx-auto leading-relaxed">
              comprehensive Technology solution to drive your business Growth
              and digital
              <br /> transformation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4 md:mx-10">
            {offers.map((item, index) => (
              <div
                key={index}
                className="bg-white md:p-10 p-4 rounded-[24px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
              >
                {/* img Container */}
                <div className=" bg-[#F1F3F4] h-12 w-12 md:w-[72px] md:h-[72px] rounded-[16px] flex items-center justify-center md:mb-6 mb-1 border border-gray-100 shadow-sm">
                  <img
                    src={item.img}
                    alt="img"
                    className="w-8 h-8 md:w-[40px] md:h-[40px]"
                  ></img>
                </div>

                <h3 className="text-[#4C4480] font-semibold text-[20px] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#4C448080]/50 md:text-[14px] text-[12px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


