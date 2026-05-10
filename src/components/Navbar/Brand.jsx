"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

export default function Brand() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex items-center gap-3"
    >
      {/* LOGO */}
      <motion.img
        variants={fadeUp}
        src="https://res.cloudinary.com/dcpjh6z5h/image/upload/Transparent_Black_Logo-01_b7jdzb"
        alt="A. Santa Cruz Logo"
        className="h-[3.4rem] w-[3.4rem] lg:h-[4.3rem] lg:w-[4.3rem] shrink-0 object-contain"
        whileHover={{
          scale: 1.04,
        }}
        transition={{ duration: 0.4, ease }}
      />

      {/* TEXT BLOCK */}
      <a href="#home" className="leading-none">
        {/* NAME */}
        <motion.h1
          variants={fadeUp}
          className="font-['Cinzel'] text-[0.85rem] lg:text-[1.15rem] font-bold tracking-[0.18em] lg:tracking-[0.28em] text-stone-900 uppercase"
        >
          A. SANTA CRUZ
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          variants={fadeUp}
          className="mt-1 font-['Manrope'] text-[0.5rem] lg:text-[0.62rem] tracking-[0.22em] lg:tracking-[0.36em] text-stone-500 uppercase"
        >
          Architecture + Design
        </motion.p>
      </a>
    </motion.div>
  );
}