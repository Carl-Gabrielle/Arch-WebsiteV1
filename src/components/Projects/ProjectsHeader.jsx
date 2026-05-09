import { categories } from "./categories";

export default function ProjectsHeader({ activeCategory, onCategoryChange }) {
  return (
    <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#b78b52]">
          Portfolio Collection
        </p>

        <h2 className="relative mt-5 text-5xl font-light leading-[1.05] tracking-tight md:text-6xl isolate">
          {/* BACKDROP OUTLINE TEXT */}
          <span
            className="
    pointer-events-none
    absolute
    inset-x-0
    top-[-60%]
    sm:top-[-40%]
    -translate-y-1/2
    w-full
    px-4
    text-center
    select-none
    whitespace-nowrap
    text-[clamp(3.5rem,11vw,20rem)]
    font-semibold
    tracking-[0.12em]
    text-white/5
    uppercase
    z-0
  "
          >
            {activeCategory === "All" ? "PROJECTS" : activeCategory}
          </span>
          {/* MAIN TITLE */}
          <span className="mt-5 text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl">
            Architectural
          </span>

          <span className="relative z-10 block italic text-zinc-500">
            Project Experience
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
          A curated selection of architectural works focused on spatial clarity,
          environmental response, technical detailing, and contemporary visual
          storytelling.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const active = category === activeCategory;

          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`cursor-pointer rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.18em] transition duration-300 ${
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
  );
}
