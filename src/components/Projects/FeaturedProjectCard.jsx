"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import ProjectMeta from "./ProjectMeta";
import ProjectModal from "./ProjectModal";

const ease = [0.22, 1, 0.36, 1];

const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
};

export default function FeaturedProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  const reduceMotion = useReducedMotion();

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

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0.03 : 0.09,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const revealUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 26,
      filter: reduceMotion ? "blur(0px)" : "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0.2 : 1,
        ease,
      },
    },
  };

  const revealSoft = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.85,
        ease,
      },
    },
  };

  return (
    <>
      <motion.article
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : 50,
          filter: reduceMotion ? "blur(0px)" : "blur(12px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={viewport}
        transition={{
          duration: reduceMotion ? 0.2 : 1.1,
          ease,
        }}
        whileHover={{
          y: -6,
        }}
        className="group relative overflow-hidden rounded-[40px] border border-zinc-800 bg-[#151515] transition-all duration-700 hover:border-zinc-700 hover:shadow-[0_0_80px_rgba(183,139,82,0.12)]"
      >
        <div className="grid lg:grid-cols-2">
          {/* IMAGE */}
          <div className="relative overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.imageAlt}
              initial={{
                scale: 1.08,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={viewport}
              transition={{
                duration: reduceMotion ? 0.3 : 1.4,
                ease,
              }}
              whileHover={{
                scale: 1.04,
              }}
              className="h-[420px] w-full object-cover lg:h-full"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{
                duration: 1.4,
                ease,
              }}
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                filter: reduceMotion ? "blur(0px)" : "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={viewport}
              transition={{
                duration: reduceMotion ? 0.2 : 1,
                delay: 0.2,
                ease,
              }}
              className="absolute bottom-8 left-8"
            >
              <span className="border border-white/20 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur-md">
                Featured Project
              </span>
            </motion.div>
          </div>

          {/* CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col justify-between p-8 md:p-12"
          >
            <div>
              {/* TOP */}
              <motion.div
                variants={revealSoft}
                className="flex items-center justify-between"
              >
                <span className="text-sm uppercase tracking-[0.25em] text-[#b78b52]">
                  {project.category}
                </span>

                <span className="text-sm text-zinc-500">
                  {project.year}
                </span>
              </motion.div>

              {/* TITLE */}
              <motion.h3
                variants={revealUp}
                className="mt-5 text-4xl font-extralight leading-tight text-white md:text-5xl"
              >
                {project.title}
              </motion.h3>

              {/* DESCRIPTION */}
              <motion.p
                variants={revealUp}
                className="mt-6 text-base leading-relaxed text-zinc-400"
              >
                {project.concept}
              </motion.p>

              {/* META */}
              <motion.div
                variants={revealSoft}
                className="mt-10 grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8"
              >
                <motion.div variants={revealSoft}>
                  <ProjectMeta
                    label="Project Type"
                    value={project.type}
                  />
                </motion.div>

                <motion.div variants={revealSoft}>
                  <ProjectMeta
                    label="Location"
                    value={project.location}
                  />
                </motion.div>

                <motion.div variants={revealSoft}>
                  <ProjectMeta
                    label="Role"
                    value={project.role}
                  />
                </motion.div>

                <motion.div variants={revealSoft}>
                  <ProjectMeta
                    label="Timeline"
                    value={project.timeline}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* BUTTON */}
            <motion.div
              variants={revealSoft}
              className="mt-10"
            >
              <motion.button
                whileHover={{
                  x: 4,
                }}
                whileTap={{
                  scale: 0.985,
                }}
                transition={{
                  duration: 0.35,
                  ease,
                }}
                onClick={() => setOpen(true)}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-xs uppercase tracking-[0.24em] text-white backdrop-blur-xl transition-all duration-500 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
              >
                View Case Study

                <ArrowUpRight
                  size={16}
                  className="transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.article>

      <ProjectModal
        project={project}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}