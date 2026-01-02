import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Quote, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-white backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="">
            <img src={logo} alt="Codestechvista" className="w-20" />
          </div>

          {/* Desktop Links - Horizontal Alignment */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[#4C4480] font-medium hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 bg-[#AC1B9E] text-[#F1F3F4] px-5 py-2 rounded-full font-semibold hover:bg-[#AC1B9E] transition-all">
              <Quote size={18} />
              <span className="whitespace-nowrap">Get Quote</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#4C4480]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block text-[#4C4381] font-medium py-2 border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full flex items-center justify-center gap-2 bg-[#AC1B9E] text-[#F1F3F4] px-5 py-3 rounded-xl font-semibold">
            <Quote size={18} />
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
}