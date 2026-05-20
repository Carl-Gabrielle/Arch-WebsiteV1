"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const viewport = {
  once: true,
  amount: 0.1,
};

export default function ProjectsGrid({
  projects,
  onOpenDetails,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onOpenDetails={onOpenDetails}
        />
      ))}
    </motion.div>
  );
}