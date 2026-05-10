"use client";

import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

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
    href: "https://linkedin.com/in/yourprofile",
    icon: FaLinkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Antoninosz",
    icon: FaYoutube,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-[#0a0a0a] text-zinc-300">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-[#b78b52]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-zinc-800 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b78b52]">
              ARCHITECTURE PORTFOLIO
            </p>
            <h3 className="mt-3 text-2xl font-light text-white sm:text-3xl">
              A. STA CRUZ
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
              Architecture student focused on spatial clarity and professional
              presentation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <nav>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm uppercase tracking-[0.12em] text-zinc-300 transition duration-300 hover:text-[#b78b52]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            (c) {year} A. STA CRUZ. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.14em] text-zinc-200 transition duration-300 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
            >
              Start a Project
              <ArrowUpRight size={14} />
            </a>

            <a
              href="#home"
              className="text-xs uppercase tracking-[0.14em] text-zinc-500 transition duration-300 hover:text-zinc-300"
            >
              Back to top
            </a>
          </div>
        </div>
        <div className="pointer-events-none mt-8  pt-4">
          <p className=" text-[10px] tracking-[0.3em] text-zinc-500 text-center sm:text-right uppercase opacity-90">
            CGNO Web & Design
          </p>
        </div>
      </div>
    </footer>
  );
}
