"use client";

import {
  PenTool,
  Box,
  Palette,
  Monitor,
  DraftingCompass,
  Layers,
  FileSpreadsheet,
  FileText,
} from "lucide-react";

/* ---------------- DATA ---------------- */
const toolGroups = [
  {
    id: "01",
    title: "Architectural Design",
    tools: [
      { name: "AutoCAD", icon: PenTool, color: "text-red-500" },
      { name: "SketchUp", icon: Box, color: "text-amber-600" },
      { name: "Procreate", icon: Palette, color: "text-violet-500" },
    ],
  },
  {
    id: "02",
    title: "Visualization & Presentation",
    tools: [
      { name: "D5 Render", icon: Monitor, color: "text-sky-500" },
      { name: "Illustrator", icon: Layers, color: "text-orange-500" },
      { name: "Presentation Boards", icon: Monitor, color: "text-emerald-500" },
    ],
  },
  {
    id: "03",
    title: "Documentation & Workflow",
    tools: [
      { name: "Revit", icon: DraftingCompass, color: "text-blue-500" },
      { name: "Excel", icon: FileSpreadsheet, color: "text-green-500" },
      { name: "Word / Reports", icon: FileText, color: "text-stone-600" },
    ],
  },
];

/* ---------------- UI COMPONENT ---------------- */
export default function Tools() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f3f1ec] py-28 text-stone-900">

      {/* Blueprint Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(68,64,60,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(68,64,60,0.12)_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* Architectural light blobs (soft, professional) */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#d8c8a8] blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#b7b0a4] blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}
        <div className="max-w-3xl">

          <p className="text-[11px] uppercase tracking-[0.3em] text-stone-600">
            Design Stack
          </p>

          <h2 className="mt-5 text-5xl leading-[1.05] sm:text-6xl">
            Tools That Shape
            <br />
            My Design Process
          </h2>

          <p className="mt-6 text-base leading-relaxed text-stone-700">
            A curated architectural toolkit used across concept development,
            modeling, visualization, and technical documentation.
          </p>
        </div>

        {/* TOOL GROUPS */}
        <div className="mt-16 space-y-20">

          {toolGroups.map((group) => (
            <div key={group.id}>

              {/* Section label */}
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-stone-700/40" />
                <h3 className="text-[11px] uppercase tracking-[0.35em] text-stone-600">
                  {group.title}
                </h3>
              </div>

              {/* GRID */}
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {group.tools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <div
                      key={tool.name}
                      className="group relative flex items-center gap-5 rounded-2xl border border-stone-400/30 bg-white/50 px-6 py-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-stone-900 hover:bg-white/80"
                    >

                      {/* ICON BLOCK */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                        <Icon className={`h-5 w-5 ${tool.color}`} />
                      </div>

                      {/* TEXT */}
                      <div>
                        <p className="text-lg text-stone-900">
                          {tool.name}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">
                          Software Tool
                        </p>
                      </div>

                      {/* underline hover (architectural line effect) */}
                      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-stone-900 transition-all duration-500 group-hover:w-full" />
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