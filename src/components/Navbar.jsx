import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Quote, Menu, X, ChevronDown, Home, Info, Briefcase, FileText, Mail, LayoutGrid } from "lucide-react"; 
import { Link } from "react-router-dom";
import { FaCode, FaPenNib, FaBriefcase, FaRobot, FaCogs, FaMobileAlt, FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { motion } from "framer-motion";


  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/p/Codes-Vista-61554340860410/",
      color: "hover:bg-[#1877F2]",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/codes_vista/?hl=en",
      color: "hover:bg-[#E4405F]",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/codestechvista/?originalSubdomain=pk",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@codes_techvista5052",
      color: "hover:bg-[#000000]",
    },
    { icon: FaYoutube, href: "#", color: "hover:bg-[#FF0000]" },
  ];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const navRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, []);

  const serviceLinks = [
    { name: "Web Development", slug: "/web-development", icon: <FaCode /> },
    { name: "Digital Marketing", slug: "/digital-marketing", icon: <HiSpeakerphone /> },
    { name: "Graphic Design", slug: "/graphics-design", icon: <FaPenNib /> },
    { name: "SEO Solutions", slug: "/seo", icon: <FaBriefcase /> },
    { name: "Software Development", slug: "/software-development", icon: <FaRobot /> },
    { name: "Automation Solutions", slug: "/automation-solutions", icon: <FaCogs /> },
    { name: "App Development", slug: "/app-development", icon: <FaMobileAlt /> },
  ];

  const underlineStyle = "relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[#AC1B9E] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-[100] border-b border-gray-200/20 shadow-sm"
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-between items-center h-20 relative">
            {/* 1. LEFT: HAMBURGER (Mobile Only) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#4C4480] hover:bg-gray-100/20 rounded-full transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            <div className="">
              <Link to="/">
                <img
                  src="/codestechvista.png"
                  alt="Codestechvista"
                  className="w-18 md:w-20"
                />
              </Link>
            </div>

            {/* 3. DESKTOP LINKS (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors ${underlineStyle}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors ${underlineStyle}`}
              >
                About Us
              </Link>

              <div
                className="relative group py-7"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1 text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors focus:outline-none ${underlineStyle}`}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl border border-gray-100 rounded-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
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

              <Link
                to="/portfolio"
                className={`text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors ${underlineStyle}`}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className={`text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors ${underlineStyle}`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors ${underlineStyle}`}
              >
                Contact
              </Link>
            </div>

            {/* 4. RIGHT: GET QUOTE */}
            <div className="flex items-center">
              {/* Desktop Button */}
              <Link
                to="/getquote"
                className="hidden sm:flex items-center gap-2 bg-[#AC1B9E] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#8e1682] transition-all shadow-md active:scale-95"
              >
                <Quote size={18} /> <span>Get Quote</span>
              </Link>
              {/* Mobile Icon-only Button (For very small screens if needed, otherwise matches sm logic) */}
              <Link
                to="/getquote"
                className="sm:hidden flex items-center gap-2  bg-[#AC1B9E] text-white p-2 rounded-xl hover:bg-[#8e1682] transition-all shadow-md active:scale-95"
              >
                <MdOutlineSupportAgent size={30} />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer (Now Aligned to Left to match hamburger position) */}
        {isOpen && (
          <div className="lg:hidden absolute top-20  w-72 bg-white/95 backdrop-blur-2xl rounded-l-2xl rounded-r-2xl rounded-b-2xl rounded-t-none border border-gray-100 shadow-2xl p-4 space-y-1 animate-in slide-in-from-left-4 duration-300">
            <Link
              to="/"
              className="flex items-center gap-3 text-[#4C4381] font-medium py-2 hover:bg-gray-50 rounded-lg px-2"
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} className="text-[#AC1B9E]" /> Home
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-3 text-[#4C4381] font-medium py-2 hover:bg-gray-50 rounded-lg px-2"
              onClick={() => setIsOpen(false)}
            >
              <Info size={18} className="text-[#AC1B9E]" /> About Us
            </Link>

            <div className="border-b border-gray-100/50">
              <div
                className="flex justify-between items-center py-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                <div className="flex items-center gap-3">
                  <LayoutGrid size={20} className="text-[#AC1B9E]" />
                  <span className="text-[#4C4381] font-medium">Services</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-[#4C4381] transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                />
              </div>
              {isMobileServicesOpen && (
                <div className="pl-4 pb-3 space-y-2 mt-1 animate-in zoom-in-95 duration-200">
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
                      className="flex items-center gap-3 py-2 text-[#4C4381] hover:text-[#AC1B9E] transition-colors px-2 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-gray-400">{service.icon}</span>{" "}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className="flex items-center gap-3 text-[#4C4381] font-medium py-2 hover:bg-gray-50 rounded-lg px-2"
              onClick={() => setIsOpen(false)}
            >
              <Briefcase size={20} className="text-[#AC1B9E]" /> Portfolio
            </Link>
            <Link
              to="/blog"
              className="flex items-center gap-3 text-[#4C4381] font-medium py-2 hover:bg-gray-50 rounded-lg px-2"
              onClick={() => setIsOpen(false)}
            >
              <FileText size={20} className="text-[#AC1B9E]" /> Blog
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-3 text-[#4C4381] font-medium py-2 hover:bg-gray-50 rounded-lg px-2"
              onClick={() => setIsOpen(false)}
            >
              <Mail size={20} className="text-[#AC1B9E]" /> Contact
            </Link>

            <div className="flex items-center gap-3 md:gap-4 relative z-40 border-l border-white/20">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-[#AC1B9E] hover:text-white transition-all duration-300 bg-white/5 ${social.color} hover:shadow-lg`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* <div className="pt-4">
              <Link to="/getquote" className="flex items-center justify-center gap-2 bg-[#AC1B9E] text-white py-3 rounded-xl font-semibold active:scale-95 transition-transform" onClick={() => setIsOpen(false)}>
                <Quote size={18} /> <span>Get Free Quote</span>
              </Link>
            </div> */}
          </div>
        )}
      </nav>

      <div className="h-20 w-full pointer-events-none"></div>
    </>
  );
}




// import React, { useState, useEffect, useRef } from "react";
// import logo from "../assets/logo.png";
// import { Quote, Menu, X, ChevronDown, Home, Info, Briefcase, FileText, Mail, LayoutGrid } from "lucide-react"; 
// import { Link } from "react-router-dom";
// import { FaCode, FaPenNib, FaBriefcase, FaRobot, FaCogs, FaMobileAlt } from "react-icons/fa";
// import { HiSpeakerphone } from "react-icons/hi";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
//   const navRef = useRef(null);

//   // LOCK SCROLL WHEN MOBILE MENU IS OPEN
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => { document.body.style.overflow = "unset"; };
//   }, [isOpen]);

//   // CLICK OUTSIDE TO CLOSE
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setIsOpen(false);
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => { document.removeEventListener("mousedown", handleClickOutside); };
//   }, []);

//   const serviceLinks = [
//     { name: "Web Development", slug: "/web-development", icon: <FaCode /> },
//     { name: "Digital Marketing", slug: "/digital-marketing", icon: <HiSpeakerphone /> },
//     { name: "Graphic Design", slug: "/graphics-design", icon: <FaPenNib /> },
//     { name: "SEO Solutions", slug: "/seo", icon: <FaBriefcase /> },
//     { name: "Software Development", slug: "/software-development", icon: <FaRobot /> },
//     { name: "Automation Solutions", slug: "/automation-solutions", icon: <FaCogs /> },
//     { name: "App Development", slug: "/app-development", icon: <FaMobileAlt /> },
//   ];

//   const underlineStyle = "relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[#AC1B9E] after:transition-all after:duration-300 hover:after:w-full";

//   return (
//     <>
//       {/* 1. FIXED NAV BAR */}
//       <nav ref={navRef} className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-[100] border-b border-gray-200/20 shadow-sm">
//         <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
//           <div className="flex justify-between items-center h-20">
//             <Link to="/">
//               <img src={logo} alt="Codestechvista" className="w-20" />
//             </Link>

//             {/* Desktop Links */}
//             <div className="hidden lg:flex items-center space-x-8">
//               <Link to="/" className={`text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors ${underlineStyle}`}>Home</Link>
//               <Link to="/about" className={`text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors ${underlineStyle}`}>About Us</Link>

//               <div className="relative group py-7" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
//                 <Link to="/services" className={`flex items-center gap-1 text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors focus:outline-none ${underlineStyle}`}>
//                   Services
//                   <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
//                 </Link>
//                 {isDropdownOpen && (
//                   <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl border border-gray-100 rounded-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
//                     <div className="py-2">
//                       {serviceLinks.map((service) => (
//                         <Link key={service.name} to={`/services${service.slug}`} className="flex items-center gap-3 px-4 py-3 text-sm text-[#4C4480] hover:bg-gray-50 hover:text-[#AC1B9E] transition-colors" onClick={() => setIsDropdownOpen(false)}>
//                           <span className="text-gray-400 text-xl group-hover:text-[#AC1B9E]">{service.icon}</span>
//                           {service.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <Link to="/portfolio" className={`text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors ${underlineStyle}`}>Portfolio</Link>
//               <Link to="/blog" className={`text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors ${underlineStyle}`}>Blog</Link>
//               <Link to="/contact" className={`text-[#4C4480] font-medium hover:text-[#AC1B9E] transition-colors ${underlineStyle}`}>Contact</Link>
//             </div>

//             <div className="flex items-center gap-4">
//               <Link to="/getquote" className="hidden sm:flex items-center gap-2 bg-[#AC1B9E] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#8e1682] transition-all shadow-md active:scale-95">
//                 <Quote size={18} /> <span>Get Quote</span>
//               </Link>
//               <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-[#4C4480] hover:bg-gray-100/20 rounded-full transition-colors">
//                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Drawer (Aligned to Right) */}
//         {isOpen && (
//           <div className="lg:hidden absolute top-20 right-4 w-72 bg-white/95 backdrop-blur-2xl rounded-2xl border border-gray-100 shadow-2xl p-4 space-y-1 animate-in slide-in-from-right-4 duration-300">
//             <Link to="/" className="flex items-center gap-3 text-[#4C4381] font-medium py-2 hover:bg-gray-50 rounded-lg px-2" onClick={() => setIsOpen(false)}>
//               <Home size={18} className="text-[#AC1B9E]" /> Home
//             </Link>
//             <Link to="/about" className="flex items-center gap-3 text-[#4C4381] font-medium py-2 hover:bg-gray-50 rounded-lg px-2" onClick={() => setIsOpen(false)}>
//               <Info size={18} className="text-[#AC1B9E]" /> About Us
//             </Link>
            
//             <div className="border-b border-gray-100/50">
//               <div className="flex justify-between items-center py-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2" onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}>
//                 <div className="flex items-center gap-3">
//                   <LayoutGrid size={20} className="text-[#AC1B9E]"/><span className="text-[#4C4381] font-medium">Services</span>
//                 </div>
//                 <ChevronDown size={20} className={`text-[#4C4381] transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
//               </div>
//               {isMobileServicesOpen && (
//                 <div className="pl-4 pb-3 space-y-2 mt-1 animate-in zoom-in-95 duration-200">
//                   <Link to="/services" className="flex items-center gap-3 py-2 text-[#AC1B9E] font-semibold text-sm" onClick={() => setIsOpen(false)}>View All Services</Link>
//                   {serviceLinks.map((service) => (
//                     <Link key={service.name} to={`/services${service.slug}`} className="flex items-center gap-3 py-2 text-[#4C4381] hover:text-[#AC1B9E] transition-colors px-2 rounded-md" onClick={() => setIsOpen(false)}>
//                       <span className="text-gray-400">{service.icon}</span> <span className="text-sm">{service.name}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link to="/portfolio" className="flex items-center gap-3 text-[#4C4381] font-medium py-2 hover:bg-gray-50 rounded-lg px-2" onClick={() => setIsOpen(false)}>
//               <Briefcase size={20} className="text-[#AC1B9E]" /> Portfolio
//             </Link>
//             <Link to="/blog" className="flex items-center gap-3 text-[#4C4381] font-medium py-2 hover:bg-gray-50 rounded-lg px-2" onClick={() => setIsOpen(false)}>
//               <FileText size={20} className="text-[#AC1B9E]" /> Blog
//             </Link>
//             <Link to="/contact" className="flex items-center gap-3 text-[#4C4381] font-medium py-2 hover:bg-gray-50 rounded-lg px-2" onClick={() => setIsOpen(false)}>
//               <Mail size={20} className="text-[#AC1B9E]" /> Contact
//             </Link>
//             <div className="pt-4">
//               <Link to="/getquote" className="flex items-center justify-center gap-2 bg-[#AC1B9E] text-white py-3 rounded-xl font-semibold active:scale-95 transition-transform" onClick={() => setIsOpen(false)}>
//                 <Quote size={18} /> <span>Get Free Quote</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* 2. THE GHOST SPACER */}
//       {/* This ensures the content below doesn't start behind the fixed navbar */}
//       <div className="h-20 w-full pointer-events-none"></div>
//     </>
//   );
// }