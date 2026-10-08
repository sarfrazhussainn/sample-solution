"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";

export default function ProjectsPreview() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p: typeof projects[0]) => p.category === activeCategory);

  return (
    <section className="w-full bg-surface-container-lowest py-16 md:py-24" id="projects">
      <div className="section-container">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 pb-6 md:pb-8">
            <SectionHeading
              pill="Proven Track Record"
              title="Featured Landmark Projects in Jubail & Eastern Province"
            />
            <div className="hidden md:block">
              <Button href="/projects" variant="outline" icon="open_in_new">
                View All Projects
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={100}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
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

        {/* Responsive Grid/Slider: Horizontal Swipe on Mobile, 2-Col Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-8 pt-2 md:pt-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {filteredProjects.map((project: typeof projects[0], i: number) => (
            <div
              key={project.id}
              className="min-w-[84vw] sm:min-w-[340px] md:min-w-0 snap-center shrink-0 md:shrink"
            >
              <Reveal delay={i * 80}>
                <div className="group relative rounded-xl overflow-hidden shadow-md bg-primary-container min-h-[290px] sm:min-h-[320px] md:min-h-[380px] flex flex-col justify-end transition-opacity duration-300">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                  
                  <div className="relative z-10 p-5 sm:p-6 md:p-8 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 sm:py-1 rounded bg-on-tertiary-container text-on-tertiary text-label-caps">
                        {project.category}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-lowest/20 backdrop-blur-md text-on-primary text-[11px] font-semibold">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-title-md sm:text-headline-sm text-on-primary font-bold line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-body-sm text-primary-fixed text-[13px]">Client: {project.client}</span>
                      <Link
                        href="/projects"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-container-lowest/15 group-hover:bg-on-tertiary-container flex items-center justify-center text-on-primary transition-colors shrink-0"
                        aria-label="View project details"
                      >
                        <span className="material-symbols-outlined text-[18px] sm:text-[20px]">arrow_outward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint & View All Button */}
        <div className="flex md:hidden flex-col items-center gap-3 mt-4">
          <div className="flex items-center gap-1.5 text-label-code text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">swipe</span>
            <span>Swipe to explore {filteredProjects.length} projects</span>
          </div>
          <Button href="/projects" variant="outline" icon="open_in_new" className="w-full justify-center">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
