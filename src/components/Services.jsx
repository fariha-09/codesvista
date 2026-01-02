import React from "react";
import grid from "../assets/grid.jpg";
import application from "../assets/application.png";
import code from "../assets/code.png";
import datascience from "../assets/datascience.png";
import layers from "../assets/layers.png";
import machinelearning from "../assets/machinelearning.png";
import seo from "../assets/seo.png";
import uiux from "../assets/uiux.png";
import videoediting from "../assets/videoediting.png";
import webdevelopment from "../assets/webdevelopment.png";
import grids from "../assets/grids.png";



export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      image: code, 
      tags: ["Responsive Design", "Seo Optimized"],
    },
    {
      title: "App Development",
      desc: "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      image: application, 
      tags: ["Responsive Design", "Seo Optimized"],
    },
    {
      title: "Software Development",
      desc: "Engineering custom, scalable software solutions to streamline your operations, solve complex challenges, and improve efficiency.",
      image: layers, 
      tags: ["Responsive Design", "Seo Optimized"],
    },
    {
      title: "Machine Learning",
      desc: "Implementing intelligent algorithms and predictive models that enable systems to learn from data and automate decision-making processes.",
      image: machinelearning, 
      tags: ["Responsive Design", "Seo Optimized"],
    },
    {
      title: "SEO",
      desc: "We optimize your online presence to improve visibility on search engines like Google, driving quality organic traffic to your site.",
      image: seo,
      tags: ["Responsive Design", "Seo Optimized"],
    },
    {
      title: "Data Science",
      desc: "Implementing intelligent algorithms and predictive models that enable systems to learn from data and automate decision-making processes.",
      image: datascience,
      tags: ["Responsive Design", "Seo Optimized"],
    },
    {
      title: "Web Development",
      desc: "Creating visually compelling graphics, branding assets, and marketing materials that effectively communicate your brand's message.",
      image: webdevelopment,
      tags: ["Responsive Design", "Seo Optimized"],
    },
    {
      title: "UI/UX Design",
      desc: "Crafting intuitive interfaces (UI) and seamless experiences (UX) to ensure digital products are aesthetically pleasing and easy to use.",
      image: uiux,
      tags: ["Responsive Design", "Seo Optimized"],
    },
     {
      title: "Web Development",
      desc: "We build responsive, high-performance websites and dynamic web applications tailored to meet your specific business goals.",
      image: videoediting, 
      tags: ["Responsive Design", "Seo Optimized"],
    },
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
            Our Core Services
          </h1>
          <p className="text-[#4C448080] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            comprehensive Technology solution to drive your business Growth and
            digital transformation
          </p>
        </div>

        {/* 3. Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-transparent border border-[#4C4480] rounded-[30px] py-8 px-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Service Icon/Image */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-[#4C4480] text-xl font-bold mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-[#4C448099]/60 text-[18px] max-w-100 font-medium leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex gap-2 mb-8">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-gray-100 text-[#4C4480] text-[14px] font-medium px-3 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Button */}
              <button className="mt-auto border border-[#AC1B9E] text-[#4C4480] px-8 py-2 rounded-xl text-sm font-bold hover:bg-[#AC1B9E] hover:text-white transition-colors">
                Read More
              </button>
            </div>
          ))}
         
        </div>

<div className="mt-16 flex justify-center relative z-10">
  <button className="bg-[#AC1B9E] hover:bg-[#8a157e] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
    View All Services
  </button>
</div>


      </div>
    </section>
  );
}
