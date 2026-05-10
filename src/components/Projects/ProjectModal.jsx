"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import ProjectHero from "./ProjectHero";
import ProjectGallery from "./ProjectGallery";
import ProjectMeta from "./ProjectMeta";
import ProjectImpact from "./ProjectImpact";
import { projectImages } from "./projectImages";

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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
          >
            <div className="flex h-full w-full items-center justify-center">
              <div
                className="
                  relative
                  h-[92vh]
                  w-full
                  max-w-7xl
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#111111]/95
                  shadow-[0_20px_120px_rgba(0,0,0,0.7)]
                "
              >
                {/* BACKGROUND TYPO */}
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

                {/* CLOSE BUTTON */}
                <button
                  onClick={onClose}
                  className="
                  cursor-pointer
                    absolute
                    right-4
                    top-4
                    z-30
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/40
                    text-white
                    backdrop-blur-xl
                    transition
                    duration-300
                    hover:border-white/20
                    hover:bg-black/60
                  "
                >
                  <X size={17} />
                </button>

                {/* GRID */}
                <div
                  className="
                    grid
                    h-full
                    min-h-0
                    grid-rows-[42vh_1fr]
                    lg:grid-cols-[1.15fr_0.85fr]
                    lg:grid-rows-1
                  "
                >
                  {/* LEFT PANEL */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="
                      relative
                      min-h-0
                      overflow-y-auto
                      border-b
                      border-white/10
                      lg:border-b-0
                      lg:border-r
                      dark-scrollbar
                    "
                  >
                    <ProjectHero project={project} />

                    {/* GALLERY WRAPPER */}
                    <div className="relative">
                      {/* subtle cinematic fade */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#111111] to-transparent" />

                      <ProjectGallery images={projectImages} />
                    </div>
                  </motion.div>

                  {/* RIGHT PANEL */}
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
                        p-6
                        pr-4
                        scroll-smooth
                        overscroll-contain
                        dark-scrollbar
                        sm:p-8
                        md:p-10
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

                      {/* DESCRIPTION */}
                      <p className="mt-8 text-[15px] leading-relaxed text-zinc-400">
                        {project.concept}
                      </p>

                      <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      {/* OVERVIEW */}
                      <div>
                        <h3 className="text-sm uppercase tracking-[0.28em] text-zinc-600">
                          Project Overview
                        </h3>

                        <p className="mt-5 text-[15px] leading-relaxed text-zinc-300">
                          This project was designed with a minimalist modern
                          architectural direction focused on spatial balance,
                          premium material finishes, and timeless visual
                          identity.
                        </p>
                      </div>

                      {/* PHILOSOPHY */}
                      <div className="mt-12">
                        <h3 className="text-sm uppercase tracking-[0.28em] text-zinc-600">
                          Design Philosophy
                        </h3>

                        <p className="mt-5 text-[15px] leading-relaxed text-zinc-300">
                          The design language centered around simplicity,
                          contrast, and emotional spatial experience.
                        </p>
                      </div>

                      {/* IMPACT */}
                      <div className="mt-12">
                        <h3 className="text-sm uppercase tracking-[0.28em] text-zinc-600">
                          Project Impact
                        </h3>

                        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5">
                          <ProjectImpact
                            number="+45%"
                            label="Improved spatial efficiency"
                          />

                          <ProjectImpact
                            number="12"
                            label="Weeks of development"
                          />

                          <ProjectImpact
                            number="98%"
                            label="Client satisfaction"
                          />

                          <ProjectImpact number="4K" label="High-end renders" />
                        </div>
                      </div>

                      {/* META */}
                      <div className="mt-12 border-t border-white/10 pt-10">
                        <div className="grid grid-cols-2 gap-6 sm:gap-8">
                          <ProjectMeta
                            label="Project Type"
                            value={project.type}
                          />

                          <ProjectMeta
                            label="Location"
                            value={project.location}
                          />

                          <ProjectMeta label="Role" value={project.role} />

                          <ProjectMeta
                            label="Timeline"
                            value={project.timeline}
                          />

                          <ProjectMeta
                            label="Software"
                            value="AutoCAD / SketchUp"
                          />

                          <ProjectMeta
                            label="Deliverables"
                            value="3D Visuals & Plans"
                          />
                        </div>
                      </div>

                      {/* EXTRA BOTTOM SPACE */}
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
