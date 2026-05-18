"use client";

import { motion } from "framer-motion";
import Aerial from "../assets/aerialperspective.webp";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const smoothUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease,
    },
  },
};

const smoothReveal = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease,
    },
  },
};

export default function Hero() {
  const focusAreas = [
    "Adaptive Reuse",
    "Neo-Vernacular",
    "Phenomenology",
  ];

  const quickFacts = [
    { value: "25+", label: "Studio Projects" },
    { value: "03", label: "Design Competitions" },
    { value: "2026", label: "Internship Ready" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#f3f1ec] text-stone-900">
      {/* BACKGROUND BLOBS */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-[#d8c8a8]/30 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-10 h-[520px] w-[520px] rounded-full bg-[#b7b0a4]/25 blur-3xl"
      />

      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-5 pb-20 pt-28 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:pt-24">
        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 space-y-8 lg:order-1 lg:col-span-7"
        >
          {/* TAG */}
          <motion.div
            variants={smoothUp}
            className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/40 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-[#b88a4b]" />

            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-700 sm:text-[11px]">
              Architecture Portfolio
            </p>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={smoothReveal}
            className="font-['Fraunces'] text-[3rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.3rem]"
          >
            Concrete dreams,
            <br />
            cultural roots,
            <br />
            boundless imagination.
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={smoothUp}
            className="max-w-2xl font-['Sora'] text-sm leading-relaxed text-stone-700 sm:text-base md:text-[17px]"
          >
            I am an architecture student graduate focused on clean,
            creative, and culturally rooted contemporary design.
            Preparing for internship opportunities this 2026.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={smoothUp}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center rounded-full bg-stone-900 px-7 py-3 text-center text-[11px] uppercase tracking-[0.22em] text-white shadow-lg shadow-stone-900/10"
            >
              View Works
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center rounded-full border border-stone-900/20 bg-white/30 px-7 py-3 text-center text-[11px] uppercase tracking-[0.22em] backdrop-blur-md"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* FOCUS */}
          <motion.div
            variants={smoothUp}
            className="flex flex-wrap gap-3"
          >
            {focusAreas.map((item) => (
              <motion.span
                key={item}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.4 }}
                className="rounded-full border border-white/40 bg-white/40 px-4 py-2 text-[10px] uppercase tracking-[0.16em] shadow-[0_6px_24px_rgba(0,0,0,0.03)] backdrop-blur-xl sm:text-[11px]"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={smoothUp}
            className="grid grid-cols-3 gap-5 border-t border-stone-300/50 pt-8"
          >
            {quickFacts.map((f) => (
              <div key={f.label}>
                <p className="font-['Fraunces'] text-2xl sm:text-3xl">
                  {f.value}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-stone-500 sm:text-[11px]">
                  {f.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <div className="order-1 lg:order-2 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            {/* IMAGE */}
            <motion.img
              src={Aerial}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.8, ease }}
              className="h-[420px] w-full rounded-[2rem_1rem_2.8rem_1rem] object-cover shadow-[0_35px_90px_-30px_rgba(0,0,0,0.45)] sm:h-[520px] lg:h-[620px]"
            />

           {/* GLASS FEATURE CARD */}
<motion.div
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.3, ease }}
  whileHover={{ y: -4 }}
  className="
    absolute
    bottom-4
    left-4
    right-4
    overflow-hidden
    rounded-[2rem]
    border
    border-white/20
    bg-black/35
    p-6
    shadow-[0_30px_80px_-20px_rgba(0,0,0,0.65)]
    backdrop-blur-2xl
    sm:bottom-8
    sm:left-8
    sm:right-auto
    sm:w-[390px]
    sm:p-7
  "
>
  {/* GLASS LIGHT */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent" />

  {/* INNER BORDER */}
  <div className="absolute inset-[1px] rounded-[2rem] border border-white/10" />

  {/* CONTENT */}
  <div className="relative z-10">
    <p className="text-[11px] uppercase tracking-[0.35em] text-white/60">
      Featured Project
    </p>

    <h3 className="mt-4 font-['Fraunces'] text-[2rem] leading-[1.05] text-white">
      Alaminos City Center for Culture and the Arts
    </h3>

    <p className="mt-4 text-[15px] leading-relaxed text-white/75">
      Phenomenological + symbolic cultural expressionism
      exploring the rich history and heritage of Alaminos
      City.
    </p>

    {/* META */}
    <div className="mt-6 flex items-center gap-3">
      <div className="h-2.5 w-2.5 rounded-full bg-[#d4a45f] shadow-[0_0_20px_rgba(212,164,95,0.9)]" />

      <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
        Thesis Project • 2026
      </p>
    </div>
  </div>
</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}