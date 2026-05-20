"use client";

import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";
import { InlineWidget } from "react-calendly";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const calendlyUrl =
  "https://calendly.com/carlgabrielleorfinada1/30min";

const contacts = [
  {
    label: "Email",
    value: "santacruzantonioregines@gmail.com",
    href: "mailto:santacruzantonioregines@gmail.com",
    icon: Mail,
    note: "Best for project inquiries and internship opportunities",
  },
  {
    label: "Phone",
    value: "+63 995 164 7477",
    href: "tel:+639951647477",
    icon: Phone,
    note: "Available Mon–Fri, 9:00 AM – 6:00 PM",
  },
  {
    label: "Location",
    value: "Alaminos City, Pangasinan",
    href: "https://maps.app.goo.gl/8WVKk3LxSv2hHVcBA",
    icon: MapPin,
    note: "Open to remote and on-site collaboration",
  },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/anton.regines.santa.cruz/?_rdc=1&_rdr#",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/santacruz.anton?igsh=bHdlMG9icXBncmdq",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/antonio-jr-santa-cruz-27a576410/",
    icon: FaLinkedinIn,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Antoninosz",
    icon: FaYoutube,
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1];

  const viewport = {
    once: true,
    amount: 0.12,
    margin: "0px 0px -12% 0px",
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0.04 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: reduceMotion ? "blur(0px)" : "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0.2 : 1,
        ease,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0d0d0d] py-16 text-white sm:py-20 lg:py-28"
    >
      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:88px_88px]" />
      </div>

      {/* FLOATING LIGHTS */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-0 h-[440px] w-[440px] rounded-full bg-[#b78b52]/12 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10"
      >
        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            variants={fadeUp}
            className="text-[10px] uppercase tracking-[0.32em] text-[#b78b52]"
          >
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-4xl font-light leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            Let&apos;s Build
            <span className="block italic text-zinc-500">
              Something Meaningful
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base"
          >
            Open for architecture internship opportunities,
            studio collaborations, and freelance design support.
          </motion.p>
        </div>

        {/* CONTACT CARDS */}
        <motion.div
          variants={container}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.45, ease }}
                href={item.href}
                target={
                  item.label === "Location" ? "_blank" : undefined
                }
                rel={
                  item.label === "Location"
                    ? "noreferrer"
                    : undefined
                }
                className="group relative overflow-hidden rounded-[1.8rem] border border-zinc-800 bg-[#151515]/95 p-6"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b78b52]/10 via-transparent to-transparent" />
                </div>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-[#b78b52] group-hover:bg-[#b78b52] group-hover:text-black">
                    <Icon size={18} />
                  </div>

                  <p className="mt-6 text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                    {item.label}
                  </p>

                  <p className="mt-2 break-words text-lg text-white">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.note}
                  </p>

                  <ArrowUpRight
                    size={16}
                    className="mt-6 text-zinc-500 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#b78b52]"
                  />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex items-center justify-center gap-3"
        >
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
              >
                <Icon size={16} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* CALENDLY */}
        <motion.div
          variants={fadeUp}
          className="relative mt-16 overflow-hidden rounded-[2rem] border border-zinc-800 bg-[#151515]/95 p-4 sm:p-6 lg:p-10"
        >
          {/* glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#b78b52]/10 blur-3xl" />

          {/* top */}
          <div className="relative flex flex-col gap-6 border-b border-zinc-800 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                Book a Meeting
              </p>

              <h3 className="mt-3 text-3xl font-light sm:text-4xl">
                Schedule via Calendly
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
                Pick a time that works for you and instantly book
                through Calendly for consultations, internship
                discussions, or design collaborations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white">
                <Clock3 size={12} />
                30 Min Session
              </div>

              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] uppercase tracking-[0.18em] text-white transition-all duration-500 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
              >
                <CalendarDays size={13} />
                Open Calendly
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* embed */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              filter: reduceMotion
                ? "blur(0px)"
                : "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={viewport}
            transition={{
              duration: reduceMotion ? 0.2 : 1.2,
              ease,
              delay: 0.1,
            }}
            className="mt-8 overflow-hidden rounded-[1.6rem] border border-zinc-800 bg-[#0f0f0f]"
          >
            <div className="custom-scroll h-[500px] w-full sm:h-[650px] lg:h-[760px]">
              <InlineWidget
                url={calendlyUrl}
                styles={{ height: "100%" }}
                pageSettings={{
                  backgroundColor: "0f0f0f",
                  primaryColor: "b78b52",
                  textColor: "ffffff",
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: false,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}