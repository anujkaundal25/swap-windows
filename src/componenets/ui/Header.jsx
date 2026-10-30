"use client"
import React, { useState, useEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ['HOME', 'PAGES', 'SERVICES', 'PROJECT', 'NEWS'];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle background style when scrolled past 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled
          ? 'bg-white shadow-md text-gray-900 border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-md text-black border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src="/logo.webp" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`font-medium text-sm tracking-wider uppercase transition-colors duration-200 ${
                isScrolled
                  ? 'text-black hover:text-[#d97736]'
                  : 'text-black hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Call To Action Button */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="group flex items-center bg-[#a2582e] hover:bg-[#b86333] transition-all duration-300 rounded-sm overflow-hidden shadow-sm"
          >
            {/* White/Dark Icon Box depending on contrast */}
            <span
              className={`p-3 flex items-center justify-center group-hover:scale-105 transition-transform ${
                isScrolled ? 'bg-gray-900 text-white' : 'bg-white text-black'
              }`}
            >
              <FiArrowUpRight className="w-5 h-5" />
            </span>
            {/* Button Text */}
            <span className="px-5 py-3 text-white font-semibold text-sm tracking-wide">
              Contact With Us
            </span>
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;