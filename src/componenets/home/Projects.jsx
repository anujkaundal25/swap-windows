import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    name: "Contemporary timber residence",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    gridClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    objectPosition: "center",
  },
  {
    name: "Bright modern living room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    gridClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    objectPosition: "center",
  },
  {
    name: "Architectural glass entrance",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    gridClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    objectPosition: "center",
  },
  {
    name: "Modern window installation",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
    gridClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    objectPosition: "left",
  },
  {
    name: "Sunlit home with expansive windows",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=800&auto=format&fit=crop",
    gridClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    objectPosition: "right",
  },
];

export default function Projects() {
  return (
    <section
      id="project"
      aria-label="Featured window and door projects"
      className="w-full bg-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-[#be8733] font-semibold tracking-widest uppercase text-sm mb-2 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Gallery Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className={`relative group overflow-hidden rounded-sm shadow-md bg-gray-100 ${project.gridClass}`}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: project.objectPosition }}
                unoptimized
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />

              <a
                href="#contact"
                aria-label={`Learn more about ${project.name}`}
                className="project-hover-card pointer-events-none absolute inset-x-5 bottom-5 z-10 flex translate-y-3 items-center justify-between gap-4 rounded-sm border border-white/30 bg-white/95 p-4 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:inset-x-5 sm:bottom-5 sm:p-5"
              >
                <span className="flex min-w-0 flex-col">
                  <span className="mb-1 text-xs font-bold tracking-wider text-[#be8733] uppercase">
                    Featured Project
                  </span>
                  <span className="truncate text-base font-semibold text-gray-900 sm:text-lg">
                    {project.name}
                  </span>
                </span>
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#be8733] text-white transition-colors duration-300 group-hover:bg-[#a9752b]"
                  aria-hidden="true"
                >
                  <FiArrowRight className="h-5 w-5" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}