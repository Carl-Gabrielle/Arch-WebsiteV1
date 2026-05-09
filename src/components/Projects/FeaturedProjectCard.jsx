import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import ProjectMeta from "./ProjectMeta";
import ProjectModal from "./ProjectModal";

export default function FeaturedProjectCard({ project }) {
  const [open, setOpen] = useState(false);

useEffect(() => {
  if (open) {
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
}, [open]);

  return (
    <>
      {/* your existing card code */}
      <article className="group relative overflow-hidden rounded-[40px] border border-zinc-800 bg-[#151515] transition duration-500 hover:border-zinc-700 hover:shadow-[0_0_80px_rgba(183,139,82,0.12)]">

        <div className="grid lg:grid-cols-2">

          {/* IMAGE */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 lg:h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <span className="border border-white/20 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur-md">
                Featured Project
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-between p-8 md:p-12">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.25em] text-[#b78b52]">
                  {project.category}
                </span>

                <span className="text-sm text-zinc-500">
                  {project.year}
                </span>
              </div>

              <h3 className="mt-5 text-4xl font-extralight leading-tight text-white md:text-5xl">
                {project.title}
              </h3>

              <p className="mt-6 text-base leading-relaxed text-zinc-400">
                {project.concept}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
                <ProjectMeta label="Project Type" value={project.type} />
                <ProjectMeta label="Location" value={project.location} />
                <ProjectMeta label="Role" value={project.role} />
                <ProjectMeta label="Timeline" value={project.timeline} />
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setOpen(true)}
                className="cursor-pointer group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-xs uppercase tracking-[0.24em] text-white transition duration-300 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
              >
                View Case Study
                <ArrowUpRight
                  size={16}
                  className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </article>

      <ProjectModal
        project={project}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}