"use client";

import React from 'react';
import { 
  FaPinterestP, 
  FaXTwitter, 
  FaFacebookF, 
  FaInstagram,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="w-full bg-[#1e1f20] text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#be8733] rounded-xl flex items-center justify-center font-bold text-black text-xl">
                  ∩
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  Framex<span className="text-[#be8733]">.</span>
                </span>
              </div>
              {/* Tagline */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                We specialize in manufacturing installing high-quality windows doors residential commercial projects.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#2a2b2d] hover:bg-[#be8733] flex items-center justify-center text-gray-300 hover:text-black transition-colors duration-200">
                <FaPinterestP className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2a2b2d] hover:bg-[#be8733] flex items-center justify-center text-gray-300 hover:text-black transition-colors duration-200">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2a2b2d] hover:bg-[#be8733] flex items-center justify-center text-gray-300 hover:text-black transition-colors duration-200">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2a2b2d] hover:bg-[#be8733] flex items-center justify-center text-gray-300 hover:text-black transition-colors duration-200">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:border-l lg:border-gray-800 lg:pl-8">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 lg:border-l lg:border-gray-800 lg:pl-8">
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Window Manufacturing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aluminum & uPVC Windows</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sliding & Casement Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Wooden Doors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Repair & Maintenance</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6">Subscribe Newsletters</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-[#2d2e30] text-white px-5 py-3.5 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#be8733]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#be8733] hover:bg-[#a9752b] text-black font-semibold text-sm py-3.5 rounded-full transition-colors duration-200 shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#2a2b2d] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 my-8">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center md:text-left">
            Let’s Build Better Windows Together
          </h3>

          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#be8733] flex items-center justify-center text-black shrink-0">
                <FaPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Phone Number</p>
                <a href="tel:+1123456798" className="text-white font-bold text-sm md:text-base hover:text-[#be8733]">
                  +(123) 456 - 798
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#be8733] flex items-center justify-center text-black shrink-0">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Email Address</p>
                <a href="mailto:info@domainname.com" className="text-white font-bold text-sm md:text-base hover:text-[#be8733]">
                  info@domainname.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-gray-500 border-t border-gray-800">
          Copyright © 2026 Framex. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;