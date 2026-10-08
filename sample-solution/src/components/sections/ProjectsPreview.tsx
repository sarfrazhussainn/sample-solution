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
    <section className="w-full bg-surface-container-lowest py-24" id="projects">
      <div className="section-container">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
            <SectionHeading
              pill="Proven Track Record"
              title="Featured Landmark Projects in Jubail & Eastern Province"
            />
            <Button href="/projects" variant="outline" icon="open_in_new">
              View All Projects
            </Button>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={100}>
          <div className="flex items-center gap-2 overflow-x-auto pb-6 scrollbar-hide">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {filteredProjects.map((project: typeof projects[0], i: number) => (
            <Reveal key={project.id} delay={i * 100}>
              <div className="group relative rounded-xl overflow-hidden shadow-md bg-primary-container min-h-[380px] flex flex-col justify-end transition-opacity duration-300">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                
                <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-on-tertiary-container text-on-tertiary text-label-caps">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-lowest/20 backdrop-blur-md text-on-primary text-label-code">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-headline-sm text-on-primary">{project.title}</h3>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-body-sm text-primary-fixed">Client: {project.client}</span>
                    <Link
                      href="/projects"
                      className="w-10 h-10 rounded-full bg-surface-container-lowest/15 group-hover:bg-on-tertiary-container flex items-center justify-center text-on-primary transition-colors"
                      aria-label="View project details"
                    >
                      <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
