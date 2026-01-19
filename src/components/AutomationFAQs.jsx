import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import grids from "../assets/grids.png";
import { motion } from "framer-motion";

export default function AutomationFAQs() {
 
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What industries can benefit from your automation solutions?",
      answer:
        "Our solutions are versatile and currently serve sectors including E-commerce, Manufacturing, Customer Support, Marketing Agencies, and Healthcare. Any business with repetitive digital tasks or data-heavy workflows can benefit.",
    },
    {
      question: "How do you ensure the accuracy of AI models?",
      answer:
        "We follow a rigorous validation process including cross-validation, precision-recall testing, and continuous monitoring. We also provide high-quality data labeling during the preparation phase to ensure the model learns from clean, relevant datasets.",
    },
    {
      question: "Can these AI tools integrate with my existing CRM/ERP?",
      answer:
        "Yes, we specialize in building custom API connectors. Whether you use Salesforce, SAP, HubSpot, or a custom-built system, our automation agents are designed to sync data seamlessly across your current infrastructure.",
    },
    {
      question: "What is the typical timeline for an automation project?",
      answer:
        "Simple workflow automations can take 2-4 weeks. Complex AI model training or robotic system integrations typically range from 8-12 weeks, depending on the data complexity and hardware requirements.",
    },
    {
      question: "Is my business data secure when using your AI systems?",
      answer:
        "Data security is our top priority. We implement enterprise-level encryption, secure access controls, and follow compliance standards to ensure your proprietary business data remains private and protected at all times.",
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
      <div className="relative w-full max-w-[1400px] flex justify-center overflow-hidden bg-white/[98%] p-10 md:px-20">
        <div className="bg-[#FFFFFF] w-[98%] justify-center py-10">
          {/* Header Content */}
          <div className="text-center space-y-4 relative z-10 mb-20">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl pb-2 font-semibold font-serif text-[#0FC8CA] tracking-tight bg-clip-text "
              style={{
                textShadow: `
                            0 0 38px rgba(0, 206, 209, 0.45),
                            0 0 20px rgba(0, 206, 209, 0.25)
                          `,
              }}
            >
              Frequently Asked Questions
            </motion.h2>

            <p className="text-[#4C448080] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Common questions about our graphic design services.
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

