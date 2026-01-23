import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Quote, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { FaCode, FaPenNib, FaBriefcase, FaRobot, FaCogs } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const navRef = useRef(null);

  // CLICK OUTSIDE TO CLOSE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Web Development", slug: "/web-development", icon: <FaCode /> },
    { name: "Digital Marketing", slug: "/digital-marketing", icon: <HiSpeakerphone /> },
    { name: "Graphic Design", slug: "/graphics-design", icon: <FaPenNib /> },
    { name: "SEO Solutions", slug: "/seo", icon: <FaBriefcase /> },
    { name: "Software Development", slug: "/software-development", icon: <FaRobot /> },
    { name: "Automation Solutions", slug: "/automation-solutions", icon: <FaCogs /> },
  ];

  return (
    <nav ref={navRef} className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      {/* max-w-6xl for shorter width */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <img src={logo} alt="Codestechvista" className="w-20" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors">
              About Us
            </Link>

            {/* Services Dropdown - Desktop */}
            <div
              className="relative group py-7"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link 
                to="/services" 
                className="flex items-center gap-1 text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors focus:outline-none"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl border border-gray-100 rounded-xl overflow-hidden z-50">
                  <div className="py-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={`/services${service.slug}`}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-[#4C4480] hover:bg-gray-50 hover:text-[#AC1B9E] transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <span className="text-gray-400 text-xl group-hover:text-[#AC1B9E]">
                          {service.icon}
                        </span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/portfolio" className="text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors">
              Portfolio
            </Link>
            <Link to="/blog" className="text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/getquote"
              className="hidden sm:flex items-center gap-2 bg-[#AC1B9E] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#8e1682] transition-all shadow-md active:scale-95"
            >
              <Quote size={18} />
              <span>Get Quote</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#4C4480]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer - Transparent and Blurry */}
      {isOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-lg border-t border-gray-100 p-4 space-y-1 shadow-lg max-h-[85vh] overflow-y-auto">
          <Link to="/" className="block text-[#4C4381] font-medium py-3 border-b border-gray-50/50" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-[#4C4381] font-medium py-3 border-b border-gray-50/50" onClick={() => setIsOpen(false)}>About Us</Link>
          
          <div className="border-b border-gray-50/50">
            <div 
              className="flex justify-between items-center py-3 cursor-pointer"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <span className="text-[#4C4381] font-medium">Services</span>
              <ChevronDown 
                size={20} 
                className={`text-[#4C4381] transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} 
              />
            </div>
            
            {isMobileServicesOpen && (
              <div className="pl-4 pb-3 space-y-2 bg-gray-100/50 rounded-lg mt-1">
                <Link 
                  to="/services" 
                  className="flex items-center gap-3 py-2 text-[#AC1B9E] font-semibold text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  View All Services
                </Link>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={`/services${service.slug}`}
                    className="flex items-center gap-3 py-2 text-[#4C4381]"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-gray-400">{service.icon}</span>
                    <span className="text-sm">{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/portfolio" className="block text-[#4C4381] font-medium py-3 border-b border-gray-50/50" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link to="/blog" className="block text-[#4C4381] font-medium py-3 border-b border-gray-50/50" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" className="block text-[#4C4381] font-medium py-3 border-b border-gray-50/50" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <div className="pt-4">
            <Link
              to="/getquote"
              className="flex items-center justify-center gap-2 bg-[#AC1B9E] text-white py-3 rounded-xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <Quote size={18} />
              <span>Get Free Quote</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}