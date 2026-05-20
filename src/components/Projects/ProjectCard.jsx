"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Meta from "./Meta";

const ease = [0.22, 1, 0.36, 1];

const viewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -10% 0px",
};

export default function ProjectCard({ project, onOpenDetails }) {
  const reduceMotion = useReducedMotion();

  const cardReveal = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: reduceMotion ? "blur(0px)" : "blur(10px)",
    },

    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: reduceMotion
        ? { duration: 0.2 }
        : {
            duration: 0.9,
            ease,
          },
    },
  };

  return (
    <motion.article
      variants={cardReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.5,
        ease,
      }}
      className="group flex h-full min-h-[38rem] flex-col overflow-hidden rounded-[30px] border border-zinc-800 bg-[#151515] will-change-transform"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 1.2,
            ease,
          }}
          className="h-64 w-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* ambient glow */}
        <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[#b78b52]/10 blur-2xl" />
        </div>

        {/* category */}
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease,
          }}
          className="absolute bottom-5 left-5"
        >
          <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-xl">
            {project.category}
          </span>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6">
        <div className="min-h-[5.25rem]">
          <div className="flex items-start justify-between gap-4">
            <motion.h3
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={viewport}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease,
              }}
              className="line-clamp-2 text-2xl font-light leading-tight text-white"
            >
              {project.title}
            </motion.h3>

            <span className="shrink-0 text-xs text-zinc-500">
              {project.year}
            </span>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={viewport}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease,
            }}
            className="mt-2 line-clamp-1 text-sm uppercase tracking-[0.15em] text-[#b78b52]"
          >
            {project.type}
          </motion.p>
        </div>

        <motion.p
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.8,
            delay: 0.22,
            ease,
          }}
          className="mt-5 min-h-[4.5rem] line-clamp-3 text-sm leading-relaxed text-zinc-400"
        >
          {project.concept}
        </motion.p>

        {/* META */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.8,
            delay: 0.28,
            ease,
          }}
          className="mt-6 grid grid-cols-2 gap-5 border-t border-zinc-800 pt-6"
        >
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
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease,
          }}
          whileHover={{
            x: 4,
          }}
          onClick={() => onOpenDetails(project)}
          className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:text-[#b78b52]"
        >
          Explore Project

          <ArrowUpRight
            size={16}
            className="transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </motion.button>
      </div>
    </motion.article>
  );
}