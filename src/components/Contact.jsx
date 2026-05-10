"use client";

import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { InlineWidget } from "react-calendly";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const calendlyUrl = "https://calendly.com/carlgabrielleorfinada1/30min";

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
    href: "https://linkedin.com/in/yourprofile",
    icon: FaLinkedinIn,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Antoninosz",
    icon: FaYoutube,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-x-hidden bg-[#0d0d0d] py-16 sm:py-20 lg:py-28 text-white"
    >
      {/* GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:88px_88px]" />
      </div>

      {/* GLOW */}
      <div className="pointer-events-none absolute left-0 top-0 h-[220px] w-[220px] sm:h-[440px] sm:w-[440px] rounded-full bg-[#b78b52]/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[220px] w-[220px] sm:h-[440px] sm:w-[440px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* HEADER */}
        <header className="mb-10 sm:mb-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#b78b52]">
              Contact
            </p>

            <h2 className="mt-4 sm:mt-5 text-3xl sm:text-5xl lg:text-7xl font-light leading-[1.05] tracking-[-0.04em]">
              Let&apos;s Build
              <span className="block italic text-zinc-500">
                Something Meaningful
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:ml-auto">
            <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
              Open for architecture internship opportunities, studio
              collaborations, and freelance design support.
            </p>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* LEFT */}
          <aside className="space-y-4 lg:col-span-5">
            {contacts.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noreferrer" : undefined}
                  className="group block rounded-2xl border border-zinc-800 bg-[#151515] p-4 sm:p-5 transition hover:border-zinc-600"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 group-hover:bg-[#b78b52] group-hover:text-black">
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                        {item.label}
                      </p>

                      <p className="mt-1 text-base sm:text-lg text-white break-words">
                        {item.value}
                      </p>

                      <p className="mt-1 text-sm text-zinc-400">{item.note}</p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="mt-2 text-zinc-500 group-hover:text-[#b78b52]"
                  />
                </a>
              );
            })}

            {/* SOCIALS */}
            <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                Social Presence
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-[#b78b52] hover:text-black transition"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-800 bg-[#151515] p-4 sm:p-6 lg:p-10">
              {/* TOP */}
              <div className="mb-6 border-b border-zinc-800 pb-5 flex flex-col sm:flex-row sm:justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    Book a Meeting
                  </p>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-light">
                    Schedule via Calendly
                  </h3>
                </div>

                <div className="inline-flex items-center justify-center">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white transition duration-300 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black">
                    <Clock3 size={12} />
                    Typical meeting: 30 mins
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
                  {" "}
                  Pick a time that works for you and book instantly through
                  Calendly. If the embedded calendar does not load properly, use
                  the button beside this text.{" "}
                </p>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
                >
                  <CalendarDays size={14} />
                  Open Calendly <ArrowUpRight size={14} />
                </a>{" "}
              </div>

              {/* CALENDLY FIXED RESPONSIVE HEIGHT */}
              <div className="rounded-2xl border border-zinc-800 bg-[#0f0f0f] overflow-hidden">
                <div className="h-[500px] sm:h-[650px] lg:h-[760px] w-full custom-scroll">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
