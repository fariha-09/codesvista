import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import grids from "../assets/grids.png";
import { motion } from "framer-motion";

export default function SoftwareDevelopmentFAQs() {
    const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does the software development process take?",
      answer:
        "The timeline varies based on project complexity, but typical development cycles range from 3 to 9 months.",
    },
    {
      question: "Do you provide source code after project completion?",
      answer:
        "Yes, we provide full source code and documentation upon project completion and final payment.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Yes, we can integrate with your existing systems and APIs to ensure seamless functionality.",
    },
    {
      question: "What happens after development is complete?",
      answer:
        "We offer post-launch support, maintenance, and updates to ensure your software remains up-to-date and functional.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section
      className="relative bg-white flex justify-center object-cover"
      style={{ backgroundImage: `url(${grids})` }}
    >
      <div className="relative w-full flex justify-center overflow-hidden bg-white/[98%] py-10 md:px-20">
        <div className="bg-[#FFFFFF] w-[98%] justify-center md:py-10 pt-6">
          {/* Header Content */}
          <div className="text-center space-y-4 relative z-10 md:mb-20 mb-8">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text "
              style={{
                textShadow: `
                            0 0 38px rgba(0, 206, 209, 0.45),
                            0 0 20px rgba(0, 206, 209, 0.25)
                          `,
              }}
            >
              Frequently Asked Questions
            </motion.h2>

            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Common questions about our ssoftware development services.
            </p>
          </div>

          {/* Accordion Container */}
          <div className="max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-gray-200 ${
                  index === 0 ? "border-t" : ""
                } mx-4 md:mx-32`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full md:py-8 py-4 flex justify-between items-center text-left hover:bg-gray-50/50 transition-all px-4 group"
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
