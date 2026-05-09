import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects, onOpenDetails }) {
  return (
    <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onOpenDetails={onOpenDetails}
        />
      ))}
    </div>
  );
}
