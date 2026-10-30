"use client";

import React from "react";
import { FiSend } from "react-icons/fi";

export default function Cta() {
  return (
    <section className="w-full bg-[#be8733] text-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Contact / Inquire Form */}
        <div className="bg-white text-gray-900 rounded-xl p-8 md:p-10 shadow-2xl">
          <span className="text-[#be8733] font-semibold tracking-widest uppercase text-xs mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            Request a Custom Quote
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Partner with us for premium architectural glass & window systems.
            Fill out the form below to discuss your project requirements.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#be8733] transition-colors text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#be8733] transition-colors text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#be8733] transition-colors text-sm text-gray-700">
                  <option value="steel">Steel</option>
                  <option value="wood">Wood</option>
                  <option value="aluminum">Aluminum</option>
                  <option value="pvc">PVC</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                Project Details
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project specifications..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#be8733] transition-colors text-sm resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-black text-white font-semibold text-sm tracking-wide py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
            >
              Send Message <FiSend className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Right Side: 3 Photos Collage Grid */}
        <div className="grid grid-cols-2 gap-4 relative">
          {/* Bottom Left Photo */}
          <div className="h-44 md:h-52 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"
              alt="Glass interior window view"
              className="w-full h-full rounded-t-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Bottom Right Photo */}
          <div className="h-44 md:h-52 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop"
              alt="Modern window profile craftsmanship"
              className="w-full h-full rounded-t-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Main Top Arch Photo */}
          <div className="col-span-2 h-72 md:h-96 overflow-hidden shadow-xl border-2 border-white/20">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
              alt="High-end architectural window installation"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
