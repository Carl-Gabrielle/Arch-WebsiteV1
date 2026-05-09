import FloatingStat from "./FloatingStat";

export default function ProjectHero({ project }) {
  return (
    <div className="relative h-[420px] sm:h-[470px] md:h-[520px] overflow-hidden">
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.imageAlt}
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />


      {/* TITLE BLOCK */}
      <div className="
        absolute bottom-6 left-4 right-4 
        sm:bottom-8 sm:left-6 
        md:bottom-10 md:left-10 
        max-w-2xl
      ">
        <span className="
          border border-white/15 bg-white/10 
          px-3 py-2 text-[9px] uppercase 
          tracking-[0.25em] text-white backdrop-blur-md 
          sm:px-4 sm:text-[10px]
        ">
          Premium Case Study
        </span>

        <h2 className="
          mt-4 text-3xl font-extralight leading-tight text-white 
          sm:text-5xl md:text-6xl
        ">
          {project.title}
        </h2>
      </div>
    </div>
  );
}