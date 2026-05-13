import { ArrowUpRight, Sparkles } from "lucide-react";
import Meta from "./Meta";

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <article className="group flex h-full min-h-[38rem] flex-col overflow-hidden rounded-[28px] border border-zinc-800 bg-[#151515] transition duration-500 hover:-translate-y-2 hover:border-zinc-600">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="min-h-[5.25rem]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="line-clamp-2 text-2xl font-light leading-tight text-white">
              {project.title}
            </h3>

            <span className="shrink-0 text-xs text-zinc-500">
              {project.year}
            </span>
          </div>

          <p className="mt-2 line-clamp-1 text-sm uppercase tracking-[0.15em] text-[#b78b52]">
            {project.type}
          </p>
        </div>

        <p className="mt-5 min-h-[4.5rem] line-clamp-3 text-sm leading-relaxed text-zinc-400">
          {project.concept}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-5 border-t border-zinc-800 pt-6">
          <Meta
            label="Role"
            value={project.role}
            className="min-h-[3.5rem]"
            valueClassName="line-clamp-1"
          />
          <Meta
            label="Location"
            value={project.location}
            className="min-h-[3.5rem]"
            valueClassName="line-clamp-1"
          />
        </div>

        <button
          onClick={() => onOpenDetails(project)}
          className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm uppercase tracking-[0.18em] text-white transition duration-300 hover:text-[#b78b52]"
        >
          Explore Project
          <ArrowUpRight
            size={16}
            className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </article>
  );
}
