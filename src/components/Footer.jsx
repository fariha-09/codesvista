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
import { FaLaptopCode, FaPalette, FaChartLine, FaServer } from "react-icons/fa";
import { MdCampaign, MdOutlineAutoFixHigh } from "react-icons/md";

import { MdRoomService } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { Link } from "react-router-dom";
import codevista from "../assets/codevista.png";

export default function Footer() {
  return (
    <footer className="bg-[#210844] text-white pt-8 md:pt-16 pb-8 px-6 md:px-20 font-sans">
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
            <div className="flex gap-6 md:gap-10">
              {[
                {
                  Icon: FaFacebookF,
                  color: "text-blue-500 hover:text-blue-600",
                },
                { Icon: FaTwitter, color: "text-sky-400 hover:text-sky-500" },
                {
                  Icon: FaLinkedinIn,
                  color: "text-blue-600 hover:text-blue-700",
                },
                {
                  Icon: FaInstagram,
                  color: "text-pink-500 hover:text-pink-600",
                },
                { Icon: FaEnvelope, color: "text-red-400 hover:text-red-500" },
              ].map(({ Icon, color }, i) => (
                <a key={i} href="#" className={`${color} transition-colors`}>
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
              <ul className="space-y-2 text-[14px]">
                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <FaHome size={15} className="text-green-400" /> Home
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <FaInfoCircle size={15} className="text-blue-400" /> About Us
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <MdRoomService size={15} className="text-purple-400" />{" "}
                  Services
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <FaImage size={15} className="text-pink-400" /> Portfolio
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <FaBlog size={15} className="text-orange-400" /> Blog
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <FaEnvelope size={15} className="text-red-400" /> Contact
                </li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="lg:col-span-3 font-poppins">
              <h3 className="text-lg md:text-xl text-[#F1F3F4] font-serif font-bold mb-6">
                Our Services
              </h3>
              <ul className="space-y-2 text-[14px]">
                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <FaLaptopCode size={16} className="text-cyan-400" />
                  Web Development
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <MdCampaign size={16} className="text-yellow-400" />
                  Digital Marketing
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <FaPalette size={15} className="text-pink-400" />
                  Graphic Design
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <FaChartLine size={15} className="text-indigo-400" />
                  Business Solutions
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <FaServer size={16} className="text-emerald-400" />
                  Software Development
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <MdOutlineAutoFixHigh size={16} className="text-gray-300" />
                  Automation Solutions
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.546881089896!2d73.06424957416057!3d33.64298897331375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95215cca989d%3A0x96494a8d7fee2d27!2s6th%20Rd%2C%20Rawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1769685390506!5m2!1sen!2s"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex items-center justify-center">
              {/* <Link to="/contact" className="mt-4 bg-[#AC1B9E] text-white px-6 py-2 rounded-[30px] text-base font-semibold hover:bg-[#8e1682] transition-all shadow-md active:scale-95 ">
            Contact Us
          </Link> */}
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
