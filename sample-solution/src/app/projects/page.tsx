"use client";

import { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import QuoteCta from "@/components/sections/QuoteCta";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p: typeof projects[0]) => p.category === activeCategory);

  const activeProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  return (
    <>
      <PageBanner
        title="Projects Gallery"
        subtitle="Explore our portfolio of landmark industrial execution across the Eastern Province."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />
      
      <section className="section-container py-20 min-h-[60vh]">
        
        {/* Filters */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {projectCategories.map((cat: ProjectCategory) => (
              <button
                suppressHydrationWarning
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
              >
                {cat === "All" ? "All Projects" : cat === "Civil" ? "Civil & Construction" : cat === "Industrial" ? "Industrial Services" : cat === "Logistics" ? "Logistics" : "MEP Contracting"}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: typeof projects[0], i: number) => (
            <Reveal key={project.id} delay={(i % 3) * 100}>
              <div 
                className="group cursor-pointer relative rounded-xl overflow-hidden shadow-md bg-primary-container aspect-[4/3] flex flex-col justify-end"
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Overlay reveal on hover */}
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-on-tertiary-container/90 flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[32px]">zoom_in</span>
                  </div>
                </div>

                <div className="relative z-10 p-6 flex flex-col gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-on-tertiary-container text-on-tertiary text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-title-md text-on-primary line-clamp-2">{project.title}</h3>
                  <span className="text-body-sm text-primary-fixed">{project.client}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-on-surface-variant">
            No projects found in this category.
          </div>
        )}

      </section>

      {/* Quote CTA for cohesive bottom transition */}
      <QuoteCta />

      {/* Lightbox */}
      <div 
        className={`lightbox-overlay ${lightboxIndex !== null ? "open" : ""}`}
        onClick={() => setLightboxIndex(null)}
      >
        <button 
          suppressHydrationWarning
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          onClick={() => setLightboxIndex(null)}
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[28px]">close</span>
        </button>

        {activeProject && (
          <div 
            className="w-full max-w-5xl max-h-[90vh] bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col m-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[40vh] sm:h-[60vh] bg-primary">
              <Image
                src={activeProject.image}
                alt={activeProject.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-3 bg-surface">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded bg-primary-container text-on-primary text-label-code">
                  {activeProject.category}
                </span>
                <span className="px-3 py-1 rounded bg-surface-container text-on-surface-variant text-label-code">
                  {activeProject.status}
                </span>
                <span className="text-body-sm text-on-surface-variant ml-auto">Client: <strong>{activeProject.client}</strong></span>
              </div>
              <h2 className="text-headline-sm md:text-headline-md text-primary-container">
                {activeProject.title}
              </h2>
              <p className="text-body-md text-on-surface-variant max-w-4xl">
                {activeProject.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
