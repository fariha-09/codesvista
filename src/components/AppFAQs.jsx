import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import grids from "../assets/grids.png";
import { motion } from "framer-motion";


export default function AppFAQs() {
   const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
   {
      question: "Will the app work on both iOS and Android?",
      answer:
        "Yes! Using Flutter's single codebase, we develop high-performance applications that work seamlessly on both Apple App Store and Google Play Store, reducing your development time and costs.",
    },
    {
      question: "Do you handle the App Store and Play Store publishing process?",
      answer:
        "Absolutely. We manage the entire deployment process, including store compliance, generating release builds, setting up app descriptions, and navigating the review process for both platforms.",
    },
    {
      question: "Can you integrate third-party APIs and Payment Gateways?",
      answer:
        "Yes, we specialize in integrating secure payment gateways like Stripe, PayPal, and JazzCash, as well as third-party services like Google Maps, Firebase, and custom REST/GraphQL APIs.",
    },
    {
      question: "How do you ensure the security of the mobile application?",
      answer:
        "We implement industry-standard security protocols, including SSL encryption, secure API authentication (JWT), Firebase security rules, and encrypted local storage to protect user data.",
    },
    {
      question: "Do you provide an Admin Dashboard to manage app content?",
      answer:
        "Yes, we typically build a web-based Admin Panel that allows you to manage users, update content, view analytics, and send push notifications without needing to touch the code.",
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
