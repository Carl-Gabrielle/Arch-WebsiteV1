"use client";

import { ArrowUpRight, CalendarDays, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaYoutube } from "react-icons/fa";

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
    value: "+639 95 164 7477",
    href: "tel:+639951647477",
    icon: Phone,
    note: "Available Mon-Fri, 9:00 AM - 6:00 PM",
  },
  {
    label: "Location",
    value: "Brgy. Balangobong, Alaminos City, Pangasinan",
    href: "https://maps.app.goo.gl/8WVKk3LxSv2hHVcBA",
    icon: MapPin,
    note: "Open to remote and on-site collaboration",
  },
];

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/anton.regines.santa.cruz/?_rdc=1&_rdr#", icon: FaFacebookF },
  { name: "Instagram", href: "https://www.instagram.com/santacruz.anton?igsh=bHdlMG9icXBncmdq", icon: FaInstagram },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: FaLinkedinIn },
  { name: "YouTube", href: "https://www.youtube.com/@Antoninosz", icon: FaYoutube },
];



export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0d0d0d] py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:88px_88px]" />
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[#b78b52]/12 blur-3xl sm:h-[420px] sm:w-[420px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl sm:h-[420px] sm:w-[420px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <header className="mb-10 max-w-4xl sm:mb-12 lg:mb-14">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#b78b52] sm:text-[11px]">Contact</p>
          <h2 className="mt-4 text-3xl font-light leading-[1.08] tracking-tight text-white sm:mt-5 sm:text-5xl md:text-6xl">
            Let&apos;s Build
            <span className="block italic text-zinc-500">Something Meaningful</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base">
            Open for architecture internship opportunities, studio collaborations, and freelance
            design support. You can schedule directly using Calendly below.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-7">
          <aside className="space-y-4 sm:space-y-5 lg:col-span-5 lg:space-y-6">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noreferrer" : undefined}
                  className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-[#151515] p-4 transition duration-300 hover:border-zinc-600 sm:rounded-[24px] sm:p-5"
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-zinc-200 transition duration-300 group-hover:border-[#b78b52] group-hover:bg-[#b78b52] group-hover:text-black sm:h-12 sm:w-12 sm:rounded-xl">
                        <Icon size={17} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:tracking-[0.22em]">
                          {item.label}
                        </p>
                        <p className="mt-1.5 break-words text-sm leading-snug text-white sm:mt-2 sm:text-lg">
                          {item.value}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-zinc-400 sm:mt-2 sm:text-sm">
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

            <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-4 sm:rounded-[24px] sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:tracking-[0.22em]">
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
                      aria-label={social.name}
                      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black sm:h-12 sm:w-12"
                      title={social.name}
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-4 sm:rounded-[30px] sm:p-7 md:p-9">
              <div className="mb-6 flex flex-col gap-3 border-b border-zinc-800 pb-5 sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:tracking-[0.22em]">
                    Book a Meeting
                  </p>
                  <h3 className="mt-2 text-2xl font-light text-white sm:text-3xl">
                    Schedule via Calendly
                  </h3>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] text-zinc-300 sm:px-4 sm:py-2 sm:text-xs">
                  <Clock3 size={14} />
                  Typical meeting: 30 mins
                </div>
              </div>

             

              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
               <p className="text-xs leading-relaxed text-zinc-500">
                Pick a time that works for you and book instantly via Calendly. If the calendar does not load here, tap "Open Calendly".
                </p>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                 className="inline-flex w-auto shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.16em] text-white transition duration-300 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black sm:tracking-[0.18em]"
                >
                  <CalendarDays size={14} />
                  Open Calendly
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#111111]">
                <div className="h-[620px] w-full sm:h-[700px] lg:h-[760px]">
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
