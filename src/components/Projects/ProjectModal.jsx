"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import ProjectHero from "./ProjectHero";
import ProjectGallery from "./ProjectGallery";
import ProjectMeta from "./ProjectMeta";
import ProjectImpact from "./ProjectImpact";

const ease = [0.22, 1, 0.36, 1];

export default function ProjectModal({ project, open, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-2xl"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.45, ease }}
            className="fixed inset-0 z-[100] p-0 lg:p-4"
          >
            <div className="h-full w-full">
              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  bg-[#111111]/95
                  lg:h-[92vh]
                  lg:rounded-[32px]
                  lg:border
                  lg:border-white/10
                  lg:shadow-[0_20px_120px_rgba(0,0,0,0.7)]
                "
              >
                {/* TYPO */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <h1 className="absolute -bottom-10 -right-20 text-[8rem] font-black uppercase tracking-[-0.08em] text-white/[0.03] sm:text-[11rem] lg:text-[14rem]">
                    ARCH
                  </h1>
                </div>

                {/* NOISE */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:22px_22px]" />
                </div>

                {/* GLOW */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#b78b52]/20 blur-3xl" />

                  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
                </div>

                {/* CLOSE */}
                <button
                  onClick={onClose}
                  className="
                    cursor-pointer
                    fixed
                    right-4
                    top-4
                    z-[120]
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/60
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-white/20
                    hover:bg-black/80
                    active:scale-95
                  "
                >
                  <X size={18} />
                </button>

              

                <div className="h-full overflow-y-auto lg:hidden">
                  {/* HERO */}
                  <ProjectHero project={project} />

                  {/* CONTENT */}
                  <div className="px-5 pb-24 pt-8">
                    {/* HEADER */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.3em] text-[#b78b52]">
                        {project.category}
                      </span>

                      <span className="text-sm text-zinc-500">
                        {project.year}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h2>

                    {/* OVERVIEW */}
                    <div className="mt-12">
                      <h3 className="text-xs uppercase tracking-[0.28em] text-zinc-600">
                        Project Overview
                      </h3>

                      <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
                        {project.overview}
                      </p>
                    </div>

                    {/* PHILOSOPHY */}
                    <div className="mt-12">
                      <h3 className="text-xs uppercase tracking-[0.28em] text-zinc-600">
                        Design Philosophy
                      </h3>

                      <p className="mt-5 text-[15px] leading-relaxed text-zinc-300">
                        {project.philosophy}
                      </p>
                    </div>

                    {/* IMPACT */}
                    <div className="mt-12">
                      <h3 className="text-xs uppercase tracking-[0.28em] text-zinc-600">
                        Project Impact
                      </h3>

                      <div className="mt-6 grid grid-cols-2 gap-4">
                        {project.impact.map((item, index) => (
                          <ProjectImpact
                            key={index}
                            number={item.number}
                            label={item.label}
                          />
                        ))}
                      </div>
                    </div>

                    {/* GALLERY */}
                    <div className="mt-14">
                      <div className="mb-5 flex items-center justify-between">
                        <h3 className="text-xs uppercase tracking-[0.28em] text-zinc-600">
                          Gallery
                        </h3>

                        <span className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                          Swipe →
                        </span>
                      </div>

                      <ProjectGallery
                        images={project.gallery}
                        mobileCarousel
                      />
                    </div>

                    {/* META */}
                    <div className="mt-14 border-t border-white/10 pt-10">
                      <div className="grid grid-cols-2 gap-6">
                        <ProjectMeta
                          label="Project Type"
                          value={project.type}
                        />

                        <ProjectMeta
                          label="Location"
                          value={project.location}
                        />

                        <ProjectMeta
                          label="Role"
                          value={project.role}
                        />

                        <ProjectMeta
                          label="Timeline"
                          value={project.timeline}
                        />

                        <ProjectMeta
                          label="Software"
                          value={project.software}
                        />

                        <ProjectMeta
                          label="Deliverables"
                          value={project.deliverables}
                        />
                      </div>
                    </div>
                  </div>
                </div>

              

                <div className="hidden h-full lg:grid lg:grid-cols-[1.15fr_0.85fr]">
                  {/* LEFT */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="
                      relative
                      min-h-0
                      overflow-y-auto
                      border-r
                      border-white/10
                      dark-scrollbar
                    "
                  >
                    <ProjectHero project={project} />

                    <div className="relative">
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#111111] to-transparent" />

                      <ProjectGallery images={project.gallery} />
                    </div>
                  </motion.div>

                  {/* RIGHT */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative min-h-0 overflow-hidden"
                  >
                    <div
                      className="
                        h-full
                        overflow-y-auto
                        p-10
                        pr-6
                        dark-scrollbar
                      "
                    >
                      {/* HEADER */}
                      <div className="flex items-center justify-between pr-14">
                        <span className="text-xs uppercase tracking-[0.3em] text-[#b78b52]">
                          {project.category}
                        </span>

                        <span className="text-sm text-zinc-500">
                          {project.year}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h2 className="mt-6 text-5xl font-semibold tracking-tight text-white">
                        {project.title}
                      </h2>

                      {/* OVERVIEW */}
                      <div className="mt-14">
                        <h3 className="text-sm uppercase tracking-[0.28em] text-zinc-600">
                          Project Overview
                        </h3>

                        <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
                          {project.overview}
                        </p>
                      </div>

                      {/* PHILOSOPHY */}
                      <div className="mt-12">
                        <h3 className="text-sm uppercase tracking-[0.28em] text-zinc-600">
                          Design Philosophy
                        </h3>

                        <p className="mt-5 text-[15px] leading-relaxed text-zinc-300">
                          {project.philosophy}
                        </p>
                      </div>

                      {/* IMPACT */}
                      <div className="mt-12">
                        <h3 className="text-sm uppercase tracking-[0.28em] text-zinc-600">
                          Project Impact
                        </h3>

                        <div className="mt-6 grid grid-cols-2 gap-5">
                          {project.impact.map((item, index) => (
                            <ProjectImpact
                              key={index}
                              number={item.number}
                              label={item.label}
                            />
                          ))}
                        </div>
                      </div>

                      {/* META */}
                      <div className="mt-12 border-t border-white/10 pt-10">
                        <div className="grid grid-cols-2 gap-8">
                          <ProjectMeta
                            label="Project Type"
                            value={project.type}
                          />

                          <ProjectMeta
                            label="Location"
                            value={project.location}
                          />

                          <ProjectMeta
                            label="Role"
                            value={project.role}
                          />

                          <ProjectMeta
                            label="Timeline"
                            value={project.timeline}
                          />

                          <ProjectMeta
                            label="Software"
                            value={project.software}
                          />

                          <ProjectMeta
                            label="Deliverables"
                            value={project.deliverables}
                          />
                        </div>
                      </div>

                      <div className="h-20" />
                    </div>

                    {/* BOTTOM FADE */}
                    <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#111111] to-transparent" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}