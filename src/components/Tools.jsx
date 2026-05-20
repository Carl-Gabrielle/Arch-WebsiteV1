"use client";

import { motion, useReducedMotion } from "framer-motion";
import { toolGroups } from "./Tools/toolGroups";

const ease = [0.22, 1, 0.36, 1];

const viewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -10% 0px",
};

export default function Tools() {
  const reduceMotion = useReducedMotion();

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0.03 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const revealUp = {
    hidden: {
      opacity: 0,
      y: 32,
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

  const revealCard = {
    hidden: {
      opacity: 0,
      y: 18,
      scale: 0.98,
      filter: reduceMotion ? "blur(0px)" : "blur(8px)",
    },

    show: {
      opacity: 1,
      y: 0,
      scale: 1,
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
    <section className="relative overflow-hidden bg-[#f4f1ea] py-20 text-stone-900 sm:py-24 lg:py-32">
      {/* GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* FLOATING LIGHTS */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#d9c7a7]/40 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-stone-300/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* HEADER */}
        <motion.header
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          {/* LEFT */}
          <div>
            <motion.p
              variants={revealUp}
              className="text-[11px] uppercase tracking-[0.4em] text-stone-500"
            >
              Design Toolkit
            </motion.p>

            <motion.h2
              variants={revealUp}
              className="mt-6 max-w-4xl text-5xl font-light leading-[1.02] tracking-[-0.04em] sm:text-7xl"
            >
              Software &
              <br />
              Creative Workflow
            </motion.h2>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={revealUp}
            className="max-w-md border-l border-stone-300 pl-6"
          >
            <p className="text-sm leading-relaxed text-stone-600">
              A curated collection of digital tools used
              throughout architectural planning,
              visualization, drafting, and presentation
              development.
            </p>
          </motion.div>
        </motion.header>

        {/* TOOL GROUPS */}
        <div className="mt-24 space-y-20">
          {toolGroups.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={stagger}
              className="grid gap-10 border-t border-stone-300 pt-10 lg:grid-cols-[280px_1fr] lg:items-start"
            >
              {/* LEFT SIDE */}
              <motion.div variants={revealUp}>
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.3em] text-stone-400">
                    {group.id}
                  </span>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={viewport}
                    transition={{
                      duration: 1.2,
                      delay: 0.1,
                      ease,
                    }}
                    className="h-px flex-1 bg-stone-300"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-light tracking-tight">
                  {group.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {group.description}
                </p>
              </motion.div>

              {/* RIGHT SIDE */}
              <motion.div
                variants={stagger}
                className="grid gap-px overflow-hidden rounded-[2rem] border border-stone-300 bg-stone-300 sm:grid-cols-2 xl:grid-cols-3"
              >
                {group.tools.map((tool, index) => {
                  const Icon = tool.icon;

                  return (
                    <motion.div
                      key={tool.name}
                      variants={revealCard}
                      whileHover={{
                        y: -6,
                      }}
                      transition={{
                        duration: 0.45,
                        ease,
                      }}
                      className="group relative flex items-center gap-5 bg-[#f8f6f1] px-5 py-5 will-change-transform transition-all duration-500 hover:bg-white sm:px-6"
                    >
                      {/* hover glow */}
                      <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d9c7a7]/20 to-transparent blur-2xl" />
                      </div>

                      {/* corner detail */}
                      <div className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full border border-stone-400/40 transition duration-500 group-hover:scale-125 group-hover:border-stone-700" />

                      {/* ICON */}
                      <motion.div
                        whileHover={{
                          rotate: -4,
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 0.45,
                          ease,
                        }}
                        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-stone-300 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.03)]"
                      >
                        <Icon className="h-5 w-5 text-stone-700" />
                      </motion.div>

                      {/* TEXT */}
                      <div className="relative z-10 min-w-0">
                        <p className="truncate text-[17px] font-light tracking-tight text-stone-900 transition duration-500 group-hover:translate-x-1">
                          {tool.name}
                        </p>

                        <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-stone-500">
                          Professional Tool
                        </p>
                      </div>

                      {/* animated bottom line */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{
                          duration: 0.7,
                          ease,
                        }}
                        className="absolute bottom-0 left-0 h-[1.5px] bg-stone-900"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}