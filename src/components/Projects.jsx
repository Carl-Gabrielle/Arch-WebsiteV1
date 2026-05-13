"use client";

import { useEffect, useMemo, useState } from "react";

import { projectData } from "./Projects/projectData";

import FeaturedProjectCard from "./Projects/FeaturedProjectCard";
import ProjectModal from "./Projects/ProjectModal";
import ProjectsBackground from "./Projects/ProjectsBackground";
import ProjectsGrid from "./Projects/ProjectsGrid";
import ProjectsHeader from "./Projects/ProjectsHeader";

const DEFAULT_CATEGORY = "All";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(DEFAULT_CATEGORY);

  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === DEFAULT_CATEGORY) return projectData;

    return projectData.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const featuredProject = filteredProjects[0];
  const remainingProjects = filteredProjects.slice(1);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "6px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [selectedProject]);

  return (
    <>
      <section className="relative overflow-hidden rounded-t-[3rem] rounded-b-[3rem] bg-[#0d0d0d] py-24 text-white">
        <ProjectsBackground />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <ProjectsHeader
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <FeaturedProjectCard project={featuredProject} />

          <ProjectsGrid
            projects={remainingProjects}
            onOpenDetails={setSelectedProject}
          />
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}