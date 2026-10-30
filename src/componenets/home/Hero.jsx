"use client";
import React, { useState, useEffect } from 'react';

function Hero() {
  const images = ['/home/1.webp', '/home/2.webp'];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Image Slider with Zoom Effect */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className={`w-full h-full bg-cover bg-center ${
              index === currentIndex ? 'animate-slow-zoom' : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
      ))}

      {/* Centered Staircase Content with Increased Box Size */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center px-4 pt-16">
        <div className="flex flex-col items-start">
          
          {/* Step 1: Steel */}
          <div className="flex">
            <div className="border-2 border-white/80 bg-black/40 backdrop-blur-sm px-8 py-5 md:px-12 md:py-6">
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-wide">
                <span className="text-[#d97736]">S</span>teel
              </h2>
            </div>
          </div>

          {/* Step 2: Wood */}
          <div className="flex w-full">
            <div className="shrink-0 invisible px-8 py-5 md:px-12 md:py-6 border-2 border-transparent">
              <h2 className="text-4xl md:text-7xl font-bold tracking-wide">Steel</h2>
            </div>
            <div className="border-2 border-white/80 bg-black/40 backdrop-blur-sm px-8 py-5 md:px-12 md:py-6 -ml-[2px] -mt-[2px]">
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-wide">
                <span className="text-[#d97736]">W</span>ood
              </h2>
            </div>
          </div>

          {/* Step 3: Aluminum */}
          <div className="flex w-full">
            <div className="shrink-0 invisible px-8 py-5 md:px-12 md:py-6 border-2 border-transparent">
              <h2 className="text-4xl md:text-7xl font-bold tracking-wide">Steel</h2>
            </div>
            <div className="shrink-0 invisible px-8 py-5 md:px-12 md:py-6 border-2 border-transparent -ml-[2px]">
              <h2 className="text-4xl md:text-7xl font-bold tracking-wide">Wood</h2>
            </div>
            <div className="border-2 border-white/80 bg-black/40 backdrop-blur-sm px-8 py-5 md:px-12 md:py-6 -ml-[4px] -mt-[2px]">
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-wide">
                <span className="text-[#d97736]">A</span>luminum
              </h2>
            </div>
          </div>

          {/* Step 4: Pvc */}
          <div className="flex w-full">
            <div className="shrink-0 invisible px-8 py-5 md:px-12 md:py-6 border-2 border-transparent">
              <h2 className="text-4xl md:text-7xl font-bold tracking-wide">Steel</h2>
            </div>
            <div className="shrink-0 invisible px-8 py-5 md:px-12 md:py-6 border-2 border-transparent -ml-[2px]">
              <h2 className="text-4xl md:text-7xl font-bold tracking-wide">Wood</h2>
            </div>
            <div className="shrink-0 invisible px-8 py-5 md:px-12 md:py-6 border-2 border-transparent -ml-[4px]">
              <h2 className="text-4xl md:text-7xl font-bold tracking-wide">Aluminum</h2>
            </div>
            <div className="border-2 border-white/80 bg-black/40 backdrop-blur-sm px-8 py-5 md:px-12 md:py-6 -ml-[6px] -mt-[2px]">
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-wide">
                <span className="text-[#d97736]">P</span>vc
              </h2>
            </div>
          </div>

        </div>
      </div>

      {/* Slider Indicators / Dots */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === currentIndex ? 'w-8 bg-[#d97736]' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;