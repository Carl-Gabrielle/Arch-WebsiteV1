import { ArrowUpRight } from "lucide-react";
import Meta from "./Meta";

export default function FeaturedProjectCard({ project }) {
  if (!project) return null;

  return (
    <article className="group relative overflow-hidden rounded-[40px] border border-zinc-800 bg-[#151515]">
      <div className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105 lg:h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-8 left-8">
            <span className="border border-white/20 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] backdrop-blur-md">
              Featured Project
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between p-8 md:p-12">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.25em] text-[#b78b52]">
                {project.category}
              </span>

              <span className="text-sm text-zinc-500">{project.year}</span>
            </div>

            <h3 className="mt-5 text-4xl font-light leading-tight text-white md:text-5xl">
              {project.title}
            </h3>

            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              {project.concept}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
              <Meta label="Project Type" value={project.type} />
              <Meta label="Location" value={project.location} />
              <Meta label="Role" value={project.role} />
              <Meta label="Timeline" value={project.timeline} />
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/projects"
              className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 px-6 py-4 text-sm uppercase tracking-[0.2em] transition duration-300 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
            >
              View Case Study

              <ArrowUpRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}