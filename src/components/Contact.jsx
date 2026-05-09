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
      className="relative overflow-hidden bg-[#0d0d0d] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:88px_88px]" />
      </div>

      {/* GLOW */}
      <div className="pointer-events-none absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-[#b78b52]/12 blur-3xl sm:h-[440px] sm:w-[440px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-white/5 blur-3xl sm:h-[440px] sm:w-[440px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* HEADER */}
        <header className="mb-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#b78b52] sm:text-[11px]">
              Contact
            </p>

            <h2 className="mt-5 text-4xl font-light leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s Build
              <span className="block italic text-zinc-500">
                Something Meaningful
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:ml-auto lg:pb-2">
            <p className="text-sm leading-[1.9] text-zinc-400 sm:text-base">
              Open for architecture internship opportunities, studio
              collaborations, and freelance design support. You can schedule
              directly using Calendly below.
            </p>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="grid gap-7 lg:grid-cols-12">
          {/* LEFT */}
          <aside className="space-y-5 lg:col-span-5">
            {contacts.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noreferrer" : undefined}
                  className="group block rounded-[28px] border border-zinc-800 bg-[#151515] p-5 transition duration-300 hover:border-zinc-600"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-zinc-200 transition duration-300 group-hover:border-[#b78b52] group-hover:bg-[#b78b52] group-hover:text-black">
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                          {item.label}
                        </p>

                        <p className="mt-2 text-lg leading-snug text-white">
                          {item.value}
                        </p>

                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                          {item.note}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="mt-1 shrink-0 text-zinc-500 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#b78b52]"
                    />
                  </div>
                </a>
              );
            })}

            {/* SOCIALS */}
            <div className="rounded-[28px] border border-zinc-800 bg-[#151515] p-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                Social Presence
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="rounded-[32px] border border-zinc-800 bg-[#151515] p-5 sm:p-8 lg:p-10">
              {/* TOP */}
              <div className="mb-7 flex flex-col gap-4 border-b border-zinc-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    Book a Meeting
                  </p>

                  <h3 className="mt-2 text-3xl font-light text-white">
                    Schedule via Calendly
                  </h3>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-zinc-300">
                  <Clock3 size={14} />
                  Typical meeting: 30 mins
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
                  Pick a time that works for you and book instantly through
                  Calendly. If the embedded calendar does not load properly, use
                  the button beside this text.
                </p>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
                >
                  <CalendarDays size={14} />
                  Open Calendly
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* CALENDLY */}
              <div className="overflow-hidden rounded-[28px] border border-zinc-800 bg-[#111111]">
                <div className="h-[680px] w-full lg:h-[760px]">
                  <InlineWidget
                    url={calendlyUrl}
                    styles={{ height: "100%" }}
                    pageSettings={{
                      hideEventTypeDetails: true,
                      hideLandingPageDetails: false,
                      primaryColor: "b78b52",
                      textColor: "f3f4f6",
                      backgroundColor: "111111",
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
