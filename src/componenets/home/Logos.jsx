import React from 'react';
import Image from 'next/image';

const partners = [
  { name: "FOREST", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Reynaers", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Aluprof", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Aliplast", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "ASAS", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Guardian", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Saint-Gobain", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "i-ecam", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Schüco", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Pilkington", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
];

export default function Logos() {
  return (
    <section className="w-full bg-white py-16 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
          Trusted by European Fabricators & Global Brands
        </p>
      </div>

      {/* Infinite Scrolling Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        {/* Gradient Fades on Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Track (Duplicated twice for smooth infinite loop) */}
        <div className="flex animate-marquee items-center gap-16 py-4">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <span className="text-2xl font-bold tracking-wider text-gray-800">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}