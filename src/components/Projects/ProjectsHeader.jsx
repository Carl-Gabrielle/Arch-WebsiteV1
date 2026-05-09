import { categories } from "./categories";

export default function ProjectsHeader({ activeCategory, onCategoryChange }) {
  return (
    <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#b78b52]">
          Portfolio Collection
        </p>

        <h2 className="mt-5 text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl">
          Architectural
          <span className="block italic text-zinc-500">Project Experience</span>
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