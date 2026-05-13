"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1]; // softer than before (very important)

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
    "Neo-Vernacular ",
    "Phenomenology",
  ];

  const quickFacts = [
    { value: "25+", label: "Studio Projects" },
    { value: "03", label: "Design Competitions" },
    { value: "2026", label: "Internship Ready" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#f3f1ec] text-stone-900">

      {/* SOFT BACKGROUND MOTION (slower + calmer) */}
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

      {/* GRID (kept static = more premium feel) */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-32 lg:grid-cols-12">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 space-y-8"
        >
          {/* TAG */}
          <motion.div
            variants={smoothUp}
            className="inline-flex items-center gap-3 border border-stone-400/40 bg-white/50 px-4 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#b88a4b]" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone-600">
              Architecture Portfolio
            </p>
          </motion.div>

          {/* TITLE (less aggressive motion = more luxury) */}
          <motion.h1
            variants={smoothReveal}
            className="font-['Fraunces'] text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Concrete dreams,
            <br />
            cultural roots,
            <br />
            boundless Imagination.
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={smoothUp}
            className="max-w-2xl font-['Sora'] text-base leading-relaxed text-stone-700"
          >
            I am an architecture student graduate focused on clean, creative, and culturally rooted contemporary design. Preparing for internship opportunities this 2026.
          </motion.p>

          {/* CTA */}
          <motion.div variants={smoothUp} className="flex gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="bg-stone-900 px-7 py-3 text-xs uppercase tracking-[0.2em] text-white"
            >
              View Works
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.4 }}
              className="border border-stone-900 px-7 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* FOCUS */}
          <motion.div variants={smoothUp} className="flex flex-wrap gap-3">
            {focusAreas.map((item) => (
              <motion.span
                key={item}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.4 }}
                className="border border-stone-400/40 bg-white/50 px-3 py-1 text-[11px] uppercase tracking-[0.15em]"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={smoothUp}
            className="grid grid-cols-3 border-t border-stone-400/40 pt-8"
          >
            {quickFacts.map((f) => (
              <div key={f.label}>
                <p className="font-['Fraunces'] text-3xl">{f.value}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
                  {f.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE (very subtle motion only) */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease }}
            className="relative"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1400&auto=format&fit=crop"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.8, ease }}
              className="h-[540px] w-full rounded-[2rem_0.75rem_2.75rem_0.75rem] object-cover shadow-[0_40px_80px_-35px_rgba(0,0,0,0.55)]"
            />

            {/* FLOAT CARD (minimal motion only) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease }}
              whileHover={{ y: -3 }}
              className="absolute -bottom-12 -left-6 w-[300px] border border-stone-300 bg-white/90 p-5 backdrop-blur-md"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
                Featured Project
              </p>
              <h3 className="mt-2 font-['Fraunces'] text-2xl">
               Alaminos City Center for Culture and the Arts
              </h3>
              <p className="mt-2 text-sm text-stone-600">
               Phenomenological + Symbolic cultural expressionism exploring rich history and heritage of Alaminos City
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}