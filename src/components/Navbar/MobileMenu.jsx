"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "./navItems";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border-t border-stone-300/70 bg-[#f7f4ee] md:hidden"
        >
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="px-6 py-5 font-['Manrope'] text-[0.72rem] tracking-[0.22em] uppercase text-stone-700"
          >
            {navItems.map((itemNav) => (
              <motion.li key={itemNav.href} variants={item}>
                <a
                  href={itemNav.href}
                  onClick={onClose}
                  className="block border-b border-stone-200 py-3 transition-colors hover:text-stone-950"
                >
                  {itemNav.label}
                </a>
              </motion.li>
            ))}

            <motion.li variants={item} className="pt-5">
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex border border-stone-900 px-4 py-2 text-[0.68rem] text-stone-900 transition hover:bg-stone-900 hover:text-white"
              >
                Book Consultation
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}