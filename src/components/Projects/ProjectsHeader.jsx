"use client";

import { motion, useReducedMotion } from "framer-motion";
import { categories } from "./categories";

const ease = [0.22, 1, 0.36, 1];

const viewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -10% 0px",
};

export default function ProjectsHeader({
  activeCategory,
  onCategoryChange,
}) {
  const reduceMotion = useReducedMotion();

  const smoothReveal = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: reduceMotion ? "blur(0px)" : "blur(10px)",
    },

    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: reduceMotion
        ? { duration: 0.2 }
        : {
            duration: 1,
            ease,
          },
    },
  };

  const stagger = {
    hidden: {},

    show: {
      transition: {
        staggerChildren: reduceMotion ? 0.03 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
    >
      {/* LEFT CONTENT */}
      <div className="max-w-3xl">
        {/* TOP LABEL */}
        <motion.p
          variants={smoothReveal}
          className="text-[11px] uppercase tracking-[0.35em] text-[#b78b52]"
        >
          Portfolio Collection
        </motion.p>

        {/* TITLE */}
        <motion.h2
          variants={smoothReveal}
          className="relative isolate mt-5 text-5xl font-light leading-[1.05] tracking-tight md:text-6xl"
        >
          {/* BACKDROP OUTLINE */}
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={viewport}
            transition={{
              duration: 1.4,
              ease,
            }}
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-[-60%]
              sm:top-[-40%]
              -translate-y-1/2
              w-full
              px-4
              text-center
              select-none
              whitespace-nowrap
              text-[clamp(3.5rem,11vw,20rem)]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-white/5
              z-0
            "
          >
            {activeCategory === "All"
              ? "PROJECTS"
              : activeCategory}
          </motion.span>

          {/* MAIN TITLE */}
          <span className="relative z-10 block text-white">
            Architectural
          </span>

          <motion.span
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
              duration: 1,
              delay: 0.12,
              ease,
            }}
            className="relative z-10 block italic text-zinc-500"
          >
            Project Experience
          </motion.span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          variants={smoothReveal}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400"
        >
          A curated selection of architectural works focused
          on spatial clarity, environmental response,
          technical detailing, and contemporary visual
          storytelling.
        </motion.p>
      </div>

      {/* CATEGORY FILTERS */}
      <motion.div
        variants={stagger}
        className="flex flex-wrap gap-3"
      >
        {categories.map((category, index) => {
          const active = category === activeCategory;

          return (
            <motion.button
              key={category}
              variants={smoothReveal}
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.45,
                ease,
              }}
              onClick={() => onCategoryChange(category)}
              className={`
                relative
                overflow-hidden
                rounded-full
                border
                px-5
                py-2
                text-[11px]
                uppercase
                tracking-[0.18em]
                transition-all
                duration-500
                cursor-pointer
                backdrop-blur-xl
                ${
                  active
                    ? "border-[#b78b52] bg-[#b78b52] text-black shadow-[0_0_30px_rgba(183,139,82,0.35)]"
                    : "border-zinc-700 bg-white/[0.02] text-zinc-400 hover:border-white hover:text-white"
                }
              `}
            >
              {/* subtle hover glow */}
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" />

              <span className="relative z-10">
                {category}
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.div>
  );
}