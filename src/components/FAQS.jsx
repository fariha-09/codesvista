import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import grids from "../assets/grids.png";

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What file formats do you provide?",
      answer: "We provide all industry-standard formats including AI, EPS, PDF, SVG for vectors, and high-resolution PNG and JPG for web use."
    },
    {
      question: "How many revisions are included?",
      answer: "Our standard packages typically include 3 rounds of revisions to ensure you are 100% satisfied with the final design."
    },
    {
      question: "Do you provide print-ready files?",
      answer: "Yes, all our designs are delivered with proper bleeds, CMYK color profiles, and high-resolution settings ready for professional printing."
    },
    {
      question: "Can you match my existing brand colors?",
      answer: "Absolutely. Simply provide us with your HEX, RGB, or Pantone codes, and we will ensure perfect color consistency."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{ backgroundImage: `url(${grids})` }}
    >
      <div className="relative w-full max-w-[1400px] flex justify-center overflow-hidden bg-white/[98%] p-10 md:px-20">
        <div className="bg-[#FFFFFF] w-[98%] justify-center py-10">
          
          {/* Header Content */}
          <div className="text-center space-y-4 relative z-10 mb-20">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#4C4480]">
              Frequently Asked Questions
            </h1>
            <p className="text-[#4C448080] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Common questions about our graphic design services.
            </p>
          </div>

          {/* Accordion Container */}
          <div className="max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-b border-gray-200 ${index === 0 ? 'border-t' : ''} mx-4 md:mx-32`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-8 flex justify-between items-center text-left hover:bg-gray-50/50 transition-all px-4 group"
                >
                  <span className="text-lg md:text-xl font-medium text-[#4C4480] group-hover:text-[#AC1B9E] transition-colors">
                    {faq.question}
                  </span>
                  <FaChevronDown 
                    className={`text-[#4C4480] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`} 
                  />
                </button>
                
                {/* Answer Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-60 pb-8 px-4" : "max-h-0"
                  }`}
                >
                  <p className="text-[#4C448080] text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}