"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Academic", "Competition", "Freelance"];

function Meta({ label, value }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
        {label}
      </p>
      <p className="text-sm text-zinc-200">{value}</p>
    </div>
  );
}
const projectData = [
  {
    id: "civic-learning-hub",
    title: "Civic Learning Hub",
    category: "Academic",
    type: "Institutional + Public Space",
    year: "2026",
    location: "Quezon City, PH",
    role: "Lead Student Designer",
    timeline: "14 weeks",
    team: "Team of 3",
    size: "4,850 sqm",
    status: "Completed Studio Project",
    tools: ["AutoCAD", "Revit", "SketchUp", "Lumion", "Adobe Photoshop"],
    focus: ["Daylight Strategy", "Public Circulation", "Modular Grid"],
    concept:
      "A community-oriented learning center that merges library, workshop, and civic gathering spaces in one continuous social spine.",
    challenge:
      "Create a flexible public building on a narrow urban lot while keeping natural light quality high across deep floor plates.",
    outcome:
      "Developed a split-courtyard massing and modular facade system that improved light penetration and reduced heat gain in key learning zones.",
    deliverables: [
      "Site and climate analysis diagrams",
      "Design concept boards and zoning strategy",
      "Floor plans, sections, and elevations",
      "Exploded axonometric and material palette",
      "Final perspective renders and walkthrough boards",
    ],
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Architectural model and modern building facade concept",
  },
  {
    id: "adaptive-loft-studio",
    title: "Adaptive Loft Studio",
    category: "Freelance",
    type: "Residential Interior",
    year: "2025",
    location: "Makati, PH",
    role: "Junior Designer",
    timeline: "6 weeks",
    team: "Independent + Client",
    size: "92 sqm",
    status: "Built Concept Package",
    tools: ["SketchUp", "Enscape", "AutoCAD", "Canva"],
    focus: ["Space Optimization", "Material Selection", "Lighting Plan"],
    concept:
      "A compact loft redesign focused on layered storage, clean lines, and natural textures for a calmer daily living experience.",
    challenge:
      "Balance work-from-home function with visual openness in a single-volume loft.",
    outcome:
      "Produced a practical interior package with custom storage strategy and phased implementation recommendations.",
    deliverables: [
      "Measured plan and furniture layout",
      "Ceiling and lighting plan",
      "Joinery detail sketches",
      "FF&E and finishes schedule",
      "Photorealistic interior perspectives",
    ],
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Minimal residential interior with modern architectural styling",
  },
  {
    id: "urban-edge-housing",
    title: "Urban Edge Housing",
    category: "Competition",
    type: "Mid-Rise Housing",
    year: "2025",
    location: "Taguig, PH",
    role: "Design Team Member",
    timeline: "4 weeks",
    team: "Team of 5",
    size: "8,100 sqm",
    status: "Competition Entry",
    tools: ["Rhino", "Grasshopper", "Adobe Illustrator", "Photoshop"],
    focus: ["Passive Cooling", "Community Spaces", "Facade Rhythm"],
    concept:
      "A mid-rise housing proposal organized around shaded communal decks and cross-ventilated residential blocks.",
    challenge:
      "Improve comfort in high-density housing while keeping construction logic practical.",
    outcome:
      "Delivered a design narrative and board set highlighting environmental strategy and modular construction feasibility.",
    deliverables: [
      "Concept narrative and parti diagrams",
      "Program stacking and circulation study",
      "Facade and shading strategy",
      "Exploded construction sequence",
      "Final competition board layout",
    ],
    image:
      "https://res.cloudinary.com/dcpjh6z5h/image/upload/8_ei4mps",
    imageAlt: "Contemporary mid-rise housing exterior",
  },
  {
    id: "coastal-research-pavilion",
    title: "Coastal Research Pavilion",
    category: "Academic",
    type: "Educational Pavilion",
    year: "2024",
    location: "Batangas, PH",
    role: "Concept and Presentation Lead",
    timeline: "10 weeks",
    team: "Team of 4",
    size: "1,200 sqm",
    status: "Completed Studio Project",
    tools: ["Revit", "Twinmotion", "Illustrator", "InDesign"],
    focus: ["Climate Adaptation", "Lightweight Structure", "Site Sensitivity"],
    concept:
      "A lightweight research pavilion elevated for flood resilience and oriented for wind-driven cooling near the coast.",
    challenge:
      "Integrate educational, lab, and public functions in a typhoon-prone setting.",
    outcome:
      "Presented a resilient scheme with clear zoning and environmental response principles for coastal learning spaces.",
    deliverables: [
      "Macro and micro site analysis",
      "Program zoning and access strategy",
      "Structure concept diagrams",
      "Technical drawings and roof detailing",
      "Render set and final oral defense boards",
    ],
    image:
      "https://images.unsplash.com/photo-1465808028273-23916f3f7a4f?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Lightweight pavilion architecture near open landscape",
  },
];
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectData;
    return projectData.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const featuredProject = filteredProjects[0];
  const remainingProjects = filteredProjects.slice(1);

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] py-24 text-white rounded-t-[3rem] rounded-b-[3rem]">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#b78b52]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#ffffff]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}
        <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#b78b52]">
              Portfolio Collection
            </p>

            <h2 className="mt-5 text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl">
              Architectural
              <span className="block italic text-zinc-500">
                Project Experience
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
              A curated selection of architectural works focused on
              spatial clarity, environmental response, technical
              detailing, and contemporary visual storytelling.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const active = category === activeCategory;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={` cursor-pointer rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.18em] transition duration-300 ${
                    active
                      ? "border-[#b78b52] bg-[#b78b52] text-black"
                      : "border-zinc-700 text-zinc-400 hover:border-white hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED PROJECT */}
        {featuredProject && (
          <article className="group relative overflow-hidden rounded-[40px] border border-zinc-800 bg-[#151515]">
            
            <div className="grid lg:grid-cols-2">

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.imageAlt}
                  className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105 lg:h-full"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <span className="border border-white/20 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] backdrop-blur-md">
                    Featured Project
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-between p-8 md:p-12">

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.25em] text-[#b78b52]">
                      {featuredProject.category}
                    </span>

                    <span className="text-sm text-zinc-500">
                      {featuredProject.year}
                    </span>
                  </div>

                  <h3 className="mt-5 text-4xl font-light leading-tight text-white md:text-5xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-6 text-base leading-relaxed text-zinc-400">
                    {featuredProject.concept}
                  </p>

                  {/* META */}
                  <div className="mt-10 grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
                    <Meta
                      label="Project Type"
                      value={featuredProject.type}
                    />

                    <Meta
                      label="Location"
                      value={featuredProject.location}
                    />

                    <Meta
                      label="Role"
                      value={featuredProject.role}
                    />

                    <Meta
                      label="Timeline"
                      value={featuredProject.timeline}
                    />
                  </div>
                </div>

                {/* BUTTON */}
                <div className="mt-10">
                  <a
                    href="/projects"
                    className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 px-6 py-4 text-sm uppercase tracking-[0.2em] transition duration-300 hover:border-[#b78b52] hover:bg-[#b78b52] hover:text-black"
                  >
                    View Case Study

                    <ArrowUpRight
                      size={18}
                      className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* GRID PROJECTS */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {remainingProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[28px] border border-zinc-800 bg-[#151515] transition duration-500 hover:-translate-y-2 hover:border-zinc-600"
            >
              
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-light leading-tight text-white">
                    {project.title}
                  </h3>

                  <span className="text-xs text-zinc-500">
                    {project.year}
                  </span>
                </div>

                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#b78b52]">
                  {project.type}
                </p>

                <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                  {project.concept}
                </p>

                {/* META */}
                <div className="mt-6 grid grid-cols-2 gap-5 border-t border-zinc-800 pt-6">
                  <Meta label="Role" value={project.role} />
                  <Meta label="Location" value={project.location} />
                </div>

                {/* BUTTON */}
                <a
                  href="/projects"
                  className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-white transition duration-300 hover:text-[#b78b52]"
                >
                  Explore Project

                  <ArrowUpRight
                    size={16}
                    className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}