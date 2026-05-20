"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Tools", href: "#tools" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/anton.regines.santa.cruz/?_rdc=1&_rdr#",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/santacruz.anton?igsh=bHdlMG9icXBncmdq",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/antonio-jr-santa-cruz-27a576410/",
    icon: FaLinkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Antoninosz",
    icon: FaYoutube,
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Footer() {
  const year = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  const viewport = {
    once: true,
    amount: 0.12,
    margin: "0px 0px -12% 0px",
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0.03 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.04,
      },
    },
  };

  const reveal = {
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
        duration: reduceMotion ? 0.2 : 1.15,
        ease,
      },
    },
  };

  const softReveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.95,
        ease,
      },
    },
  };

  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-[#0a0a0a] text-zinc-300">
      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      {/* GLOW */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-[#b78b52]/10 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white/5 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative mx-auto max-w-7xl px-6 py-12 lg:px-10"
      >
        {/* TOP */}
        <motion.div
          variants={reveal}
          className="flex flex-col gap-10 border-b border-zinc-800 pb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* LEFT */}
          <div className="max-w-xl">
            <motion.p
              variants={softReveal}
              className="text-[11px] uppercase tracking-[0.32em] text-[#b78b52]"
            >
              Architecture Portfolio
            </motion.p>

            <motion.h3
              variants={softReveal}
              className="mt-4 text-3xl font-light tracking-tight text-white sm:text-4xl"
            >
              A. STA CRUZ
            </motion.h3>

            <motion.p
              variants={softReveal}
              className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400"
            >
              Architecture student focused on spatial clarity,
              phenomenological thinking, and refined visual presentation.
            </motion.p>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={softReveal}
            className="flex flex-col items-start gap-8 lg:items-end"
          >
            {/* NAV */}
            <nav>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {quickLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.35 }}
                  >
                    <a
                      href={link.href}
                      className="relative text-sm uppercase tracking-[0.16em] text-zinc-400 transition duration-500 hover:text-white"
                    >
                      {link.name}

                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b78b52] transition-all duration-500 hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.06,
                      ease,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                    }}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 backdrop-blur-xl transition-all duration-500 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
                  >
                    <Icon
                      size={16}
                      className="transition duration-500 group-hover:scale-110"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          variants={reveal}
          className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs tracking-[0.08em] text-zinc-500">
            © {year} A. STA CRUZ. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.35 }}
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] text-zinc-200 backdrop-blur-xl transition-all duration-500 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
            >
              Start a Project

              <ArrowUpRight
                size={14}
                className="transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            <motion.a
              whileHover={{ y: -1 }}
              transition={{ duration: 0.35 }}
              href="#home"
              className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 transition duration-500 hover:text-zinc-300"
            >
              Back to top
            </motion.a>
          </div>
        </motion.div>

        {/* SIGNATURE */}
        <motion.div
          variants={softReveal}
          className="pointer-events-none mt-10 border-t border-zinc-900 pt-5"
        >
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-zinc-600 sm:text-right">
            CGNO Web & Design
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}