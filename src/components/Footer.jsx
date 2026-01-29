import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaImage,
  FaBlog,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCode,
  FaPenNib,
  FaBriefcase,
  FaRobot,
  FaCogs,
} from "react-icons/fa";
import { MdRoomService } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";

import codevista from "../assets/codevista.png";

export default function Footer() {
  return (
    <footer className="bg-[#4C4480] text-white pt-8 md:pt-16 pb-8 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-6">
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col gap-9">
            <div className="flex items-center  gap-2">
              <img src={codevista} alt="codevista" className="w-14 md:w-16" />
              <h2 className="text-[22px] md:text-[25px] text-[#AC1B9E] font-semibold tracking-tight">
                Codes <span className="text-[#0E9C9D] ">Vista</span>
              </h2>
            </div>
            <p className="text-[#F1F3F4] text-[16px] font-poppins leading-relaxed max-w-sm">
              A leading software house empowering businesses with cutting-edge
              technology solutions. We specialize in web development, digital
              marketing, and custom software solutions.
            </p>
            <div className="flex gap-6 jus md:gap-10">
              {[
                FaFacebookF,
                FaTwitter,
                FaLinkedinIn,
                FaInstagram,
                FaEnvelope,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex gap-9 justify-between sm:justify-center font-poppins">
            <div className="lg:col-span-2">
              <h3 className="text-lg md:text-xl text-[#F1F3F4] font-serif font-bold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-2 text-[#F1F3F4] text-[14px]">
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaHome size={15} /> Home
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaInfoCircle size={15} /> About Us
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <MdRoomService size={15} /> Services
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaImage size={15} /> Portfolio
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaBlog size={15} /> Blog
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaEnvelope size={15} /> Contact
                </li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="lg:col-span-3 font-poppins">
              <h3 className="text-lg md:text-xl text-[#F1F3F4] font-serif font-bold mb-6">
                Our Services
              </h3>
              <ul className="space-y-2 text-[#F1F3F4] text-[14px]">
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaCode size={16} /> Web Development
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <HiSpeakerphone size={16} /> Digital Marketing
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaPenNib size={15} /> Graphic Design
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaBriefcase size={15} /> Business Solutions
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaRobot size={16} /> Software Development
                </li>
                <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FaCogs size={16} /> Automation Solutions
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col--3 font-poppins">
            <h3 className="text-lg md:text-xl text-[#F1F3F4] font-serif font-bold mb-6">
              Contact Info
            </h3>
              <div className="flex-1 rounded-[30px] overflow-hidden shadow-sm">

             <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Rawalpindi,Pakistan&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
            {/* <ul className="space-y-5 text-[#F1F3F4] text-[14px]">
              <li className="flex gap-3">
                <FaMapMarkerAlt size={22} className="flex-shrink-0" />
                <span>
                  Office # S-50, S-52, S-138, 2nd Floor, Malikabad Plaza, Murree
                  Road, Rawalpindi.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="flex-shrink-0" />
                <span>+92-34-85987369</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0" />
                <span>
                  <a className="underline cursor-pointer">
                    info@codesvista.com
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="flex-shrink-0" />
                <span>Mon-Sat 10:00AM-6:00PM</span>
              </li>
            </ul> */}
          </div>
        </div>

        {/* Newsletter Section */}
         

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row text-[13px] md:text-[14px] text-[#F1F3F4] gap-4 items-center justify-between border-t border-white/10 pt-8">
          <p className="text-center">
            © 2024 Codes Vista. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
