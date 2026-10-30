import Image from "next/image";
import {
  FiGrid,
  FiHome,
  FiLayers,
  FiMaximize2,
  FiTool,
  FiWind,
} from "react-icons/fi";

const services = [
  {
    title: "Curtain Wall Systems",
    description:
      "High-performance curtain wall solutions that bring light and lasting value to modern buildings.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=600&auto=format&fit=crop",
    icon: FiGrid,
  },
  {
    title: "Structural Glass Walls",
    description:
      "Elegant structural glazing systems designed for clear views and a clean architectural finish.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
    icon: FiMaximize2,
  },
  {
    title: "Skylights & Atriums",
    description:
      "Custom skylights and atriums that bring natural daylight into the heart of your space.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=600&auto=format&fit=crop",
    icon: FiHome,
  },
  {
    title: "Frameless Storefronts",
    description:
      "Refined storefront glazing that creates welcoming entrances and uninterrupted sightlines.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop",
    icon: FiLayers,
  },
  {
    title: "Custom Aluminum Systems",
    description:
      "Precision aluminum profiles tailored to your project's performance and design requirements.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    icon: FiWind,
  },
  {
    title: "Maintenance & Service",
    description:
      "Dependable support to keep your windows, doors, and glazing working as intended.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
    icon: FiTool,
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-slate-50 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[#be8733] font-semibold tracking-widest uppercase text-sm mb-2 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Specialized Capabilities
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, image, icon: Icon }) => (
            <article
              key={title}
              className="relative bg-[#eef2f7] rounded-xl p-8 pt-10 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Floating Top-Right Image Badge */}
              <div className="absolute top-0 right-0 w-32 h-24 rounded-bl-2xl overflow-hidden border-b-2 border-l-2 border-slate-50 shadow-sm">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="128px"
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Icon */}
              <div className="mb-8">
                <div className="w-12 h-12 flex items-center justify-center text-gray-700">
                  <Icon className="w-10 h-10 stroke-[1.5]" aria-hidden="true" />
                </div>
              </div>

              {/* Card Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}