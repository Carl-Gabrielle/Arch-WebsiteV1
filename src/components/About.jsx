"use client";

import { motion, useReducedMotion } from "framer-motion";
import Pic1 from "../assets/pic1.webp";

const ease = [0.22, 1, 0.36, 1];

const smoothTransition = {
  duration: 0.85,
  ease,
};

// smoother + earlier scroll trigger
const vpEarly = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -12% 0px",
};

const vpContent = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
};

export default function About() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0.03 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const smoothUp = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: reduceMotion ? "blur(0px)" : "blur(8px)",
    },

    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: reduceMotion
        ? { duration: 0.2 }
        : smoothTransition,
    },
  };

  const smoothLeft = {
    hidden: {
      opacity: 0,
      x: 24,
      filter: reduceMotion ? "blur(0px)" : "blur(8px)",
    },

    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",

      transition: reduceMotion
        ? { duration: 0.2 }
        : smoothTransition,
    },
  };

  const smoothImage = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 1.04,
      filter: reduceMotion ? "blur(0px)" : "blur(10px)",
    },

    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",

      transition: reduceMotion
        ? { duration: 0.25 }
        : {
            duration: 0.95,
            ease,
          },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#f3f1ec] text-stone-900">
      {/* FLOATING BLOBS */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[360px] w-[360px] rounded-full bg-[#d8c8a8]/25 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-10 h-[440px] w-[440px] rounded-full bg-[#b7b0a4]/20 blur-3xl"
      />

      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(68,64,60,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(68,64,60,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* IMAGE SIDE */}
          <motion.div
            variants={smoothUp}
            initial="hidden"
            whileInView="show"
            viewport={vpEarly}
            className="lg:col-span-5"
          >
            <div className="group relative">
              {/* glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                viewport={vpEarly}
                transition={{
                  duration: 1,
                  ease,
                }}
                className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#b88a4b]/10 to-transparent blur-2xl"
              />

              {/* border */}
              <div className="absolute -inset-4 rounded-[2rem] border border-stone-500/20" />

              {/* image */}
              <motion.div
                variants={smoothImage}
                initial="hidden"
                whileInView="show"
                viewport={vpEarly}
              >
                <img
                  src={Pic1}
                  alt="Portrait"
                  className="relative h-[580px] w-full rounded-[2rem_0.75rem_2.75rem_0.75rem] object-cover shadow-[0_50px_90px_-40px_rgba(41,37,36,0.55)] transition-all duration-700 ease-out group-hover:scale-[1.015]"
                />
              </motion.div>

              {/* identity card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                  filter: reduceMotion ? "blur(0px)" : "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={vpEarly}
                transition={{
                  duration: 0.85,
                  delay: 0.08,
                  ease,
                }}
                whileHover={{ y: -3 }}
                className="absolute -bottom-10 left-6"
              >
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d]/90 px-5 py-4 backdrop-blur-xl">
                  {/* subtle grid */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
                    <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:88px_88px]" />
                  </div>

                  <p className="font-['Sora'] text-[10px] uppercase tracking-[0.35em] text-white/50">
                    Architecture Student
                  </p>

                  <p className="mt-1 font-['Fraunces'] text-lg text-white">
                    Antonio R. Santa Cruz Jr.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-['Sora'] text-[13px] text-white/60">
                    <span>Alaminos City, Pangasinan</span>
                    <span className="text-white/15">•</span>
                    <span>Philippines</span>
                    <span className="text-white/15">•</span>
                    <span>23 y/o</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={vpContent}
            className="relative lg:col-span-7"
          >
            {/* glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vpEarly}
              transition={{
                duration: 1,
                ease,
              }}
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#c7b08a]/20 blur-3xl"
            />

            <div className="relative lg:-mt-10 lg:pl-10">
              <motion.p
                variants={smoothLeft}
                className="font-['Sora'] text-[11px] uppercase tracking-[0.35em] text-stone-500"
              >
                About / Profile
              </motion.p>

              <motion.h1
                variants={smoothLeft}
                className="mt-4 font-['Fraunces'] text-5xl leading-[0.95] text-stone-950 sm:text-6xl lg:text-7xl"
              >
                Designing spaces
                <br />
                that feel intentional,
                <br />
                not just built.
              </motion.h1>

              <motion.div
                variants={smoothLeft}
                className="mt-8 h-px w-24 bg-gradient-to-r from-[#b88a4b]/70 to-transparent"
              />

              <motion.p
                variants={smoothLeft}
                className="mt-8 max-w-2xl font-['Sora'] text-[15px] leading-relaxed text-stone-600"
              >
                I am an architecture student graduate focused on clean,
                creative, and culturally rooted contemporary design turning
                lived experiences into spatial metaphor. My work blends
                structure, narrative, and environmental awareness to create
                designs that feel functional, intentional, and emotionally
                grounded.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}