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
    <footer className="bg-[#4C4480] text-white pt-16 pb-8 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand & Social */}
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center gap-2">
              <img src={codevista} alt="codevista" className="w-16" />
              <h2 className="text-[25px] text-[#AC1B9E] font-semibold tracking-tight">
                Codes <span className="text-[#0E9C9D] ">Vista</span>
              </h2>
            </div>
            <p className="text-[#F1F3F4] text-[14px] leading-relaxed max-w-sm">
              A leading software house empowering businesses
              <br /> with cutting-edge technology solutions. We
              <br /> specialize in web development, digital marketing,
              <br /> and custom software solutions.
            </p>
            <div className="flex gap-10">
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
          <div className="lg:col-span-2">
            <h3 className="text-xl text-[#F1F3F4] font-serif font-bold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-[#F1F3F4] text-[14px]">
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
          <div className="lg:col-span-3">
            <h3 className="text-xl text-[#F1F3F4] font-serif font-bold mb-6">
              Our Services
            </h3>
            <ul className="space-y-4 text-[#F1F3F4] text-[14px]">
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

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-xl text-[#F1F3F4] font-serif font-bold mb-6">
              Contact Info
            </h3>
            <ul className="space-y-5 text-[#F1F3F4] text-[14px]">
              <li className="flex gap-3">
                <FaMapMarkerAlt size={25} className=" " />
                <span>
                  Office # S-50, S-52, S-138, 2nd Floor, Malikabad Plaza, Murree
                  Road, Rawalpindi.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+92-34-85987369</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <span><a className="underline cursor-pointer">info@codesvista.com</a></span>
              </li>
              <li className="flex items-center gap-3">
                <FaClock />
                <span>Mon-Sat 10:00AM-6:00PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#F1F3F4] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-left">
            <h3 className="text-[#4C4480] text-[24px] md:text-3xl font-serif font-bold mb-2 whitespace-nowrap">
              Stay Updated with Our Newsletter
            </h3>
            <p className="text-[#4C448080]/50 text-[16px] font-normal">
              Get the latest updates on technology trends and our services.
            </p>
          </div>
          <div className="relative w-full md:w-1/2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#4C4480]/30 text-gray-700 rounded-lg py-4 px-6 focus:outline-none placeholder:text-[#4C4480] placeholder:text-[16px]"
            />
            <button className="absolute right-2 top-11 -translate-y-1/2 bg-[#4C4480] p-2 rounded-full hover:bg-[#3b3464] transition-colors">
              <FaPaperPlane className="text-white" />
            </button>
          </div>
        </div>

        {/* <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4"> */}
        <div className="flex flex-col md:flex-row text-[14px] text-[#F1F3F4] gap-4 items-center justify-between mx-auto px-4">
          <p>© 2024 Codes Vista. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
