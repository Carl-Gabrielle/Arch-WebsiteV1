"use client";

import { toolGroups } from "./Tools/toolGroups";

export default function Tools() {
  return (
    <section className="relative overflow-hidden bg-[#f4f1ea] py-20 text-stone-900 sm:py-24 lg:py-32">
      {/* GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* SOFT LIGHT */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#d9c7a7]/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-stone-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* HEADER */}
        <header className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-stone-500">
              Design Toolkit
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-light leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              Software &
              <br />
              Creative Workflow
            </h2>
          </div>

          <div className="max-w-md border-l border-stone-300 pl-6">
            <p className="text-sm leading-relaxed text-stone-600">
              A curated collection of digital tools used throughout
              architectural planning, visualization, drafting, and presentation
              development.
            </p>
          </div>
        </header>

        {/* TOOL GROUPS */}
        <div className="mt-24 space-y-20">
          {toolGroups.map((group) => (
            <div
              key={group.id}
              className="grid gap-10 border-t border-stone-300 pt-10 lg:grid-cols-[280px_1fr] lg:items-start"
            >
              {/* LEFT SIDE */}
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.3em] text-stone-400">
                    {group.id}
                  </span>

                  <div className="h-px flex-1 bg-stone-300" />
                </div>

                <h3 className="mt-6 text-2xl font-light tracking-tight">
                  {group.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {group.description}
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="grid gap-px overflow-hidden rounded-[2rem] border border-stone-300 bg-stone-300 sm:grid-cols-2 xl:grid-cols-3">
                {group.tools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <div
                      key={tool.name}
                      className="group relative flex items-center gap-5 bg-[#f8f6f1] px-5 py-5 transition-all duration-500 hover:bg-white sm:px-6"
                    >
                      {/* subtle corner detail */}
                      <div className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full border border-stone-400/40 transition duration-500 group-hover:scale-125 group-hover:border-stone-700" />

                      {/* ICON */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-stone-300 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.03)] transition duration-500 group-hover:-translate-y-0.5">
                        <Icon className="h-5 w-5 text-stone-700" />
                      </div>

                      {/* TEXT */}
                      <div className="min-w-0">
                        <p className="truncate text-[17px] font-light tracking-tight text-stone-900">
                          {tool.name}
                        </p>

                        <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-stone-500">
                          Professional Tool
                        </p>
                      </div>

                      {/* HOVER LINE */}
                      <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-stone-900 transition-all duration-700 group-hover:w-full" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
