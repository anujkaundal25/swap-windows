import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

function About() {
  const categories = ['Steel', 'Wood', 'Aluminum', 'PVC'];

  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col">
          <span className="text-[#be8733] font-semibold tracking-widest uppercase text-sm mb-3">
            About Our Company
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-[#002f5b">
            High-end architectural windows, delivered at scale.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            We partner with premium fabricators in Europe and distribute across the USA, distributing high-branded profiles such as <span className="text-gray-900 font-medium">FOREST, Reynaers, Aluprof, Aliplast, ASAS</span>, along with high-branded glass companies like <span className="text-gray-900 font-medium">Guardian, Saint-Gobain, i ecam</span>, and others.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            We supply frames with glass, frames only, glass only, and related services to general contractors and builders across four primary categories:
          </p>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {categories.map((cat, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-4 rounded-sm shadow-sm">
                <FiCheckCircle className="text-[#be8733] w-5 h-5 shrink-0" />
                <span className="font-semibold tracking-wide text-gray-800">{cat}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div>
            <a
              href="#contact"
              className="inline-block bg-[#be8733] hover:bg-[#a9752b] text-white font-semibold text-sm tracking-wide px-8 py-4 rounded-sm transition-all duration-300 shadow-md"
            >
              Learn More About Us
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div
          className="about-photo mx-auto w-full max-w-[620px]"
          role="img"
          aria-label="Sunlit living room with expansive architectural windows"
        >
          <div className="about-photo-panel about-photo-panel-left" aria-hidden="true" />
          <div className="about-photo-panel about-photo-panel-center" aria-hidden="true" />
          <div className="about-photo-panel about-photo-panel-right" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}

export default About;