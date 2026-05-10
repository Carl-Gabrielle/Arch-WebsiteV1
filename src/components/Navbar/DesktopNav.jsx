"use client";

import { motion } from "framer-motion";
import { navItems } from "./navItems";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 8,
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

export default function DesktopNav() {
  return (
    <>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="hidden md:flex items-center gap-6 lg:gap-10 font-['Manrope'] text-[0.7rem] tracking-[0.18em] uppercase text-stone-600"
      >
        {navItems.map((itemNav) => (
          <motion.li key={itemNav.href} variants={item}>
            <motion.a
              href={itemNav.href}
              className="relative inline-block whitespace-nowrap text-stone-600 hover:text-stone-950"
              whileHover="hover"
            >
              {/* TEXT */}
              <motion.span
                className="inline-block"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.25, ease }}
              >
                {itemNav.label}
              </motion.span>

              {/* UNDERLINE (smooth scale, no layout shift) */}
              <motion.span
                className="absolute left-0 -bottom-1 h-[1px] w-full bg-[#b08a54] origin-left"
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.45, ease }}
              />
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>

      {/* CTA */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease }}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="hidden md:inline-flex items-center border border-stone-900 bg-stone-900 px-4 lg:px-5 py-2 text-[0.65rem] tracking-[0.18em] text-white uppercase"
      >
        Book Consultation
      </motion.a>
    </>
  );
}