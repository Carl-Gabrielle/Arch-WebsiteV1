export default function Hero() {
  const focusAreas = [
    "Adaptive Reuse",
    "Climate-Responsive Design",
    "Urban Housing",
  ];
  const quickFacts = [
    { value: "06", label: "Studio Projects" },
    { value: "02", label: "Design Competitions" },
    { value: "2026", label: "Internship Ready" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#f3f1ec] text-stone-900">
      {/* Blueprint-like background */}
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(68,64,60,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(68,64,60,0.14)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#d8c8a8]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-16 h-80 w-80 rounded-full bg-[#b7b0a4]/35 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-28 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pt-36">
        {/* Left */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 border border-stone-400/50 bg-white/60 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#b88a4b] motion-safe:animate-pulse" />
            <p className="font-['Sora'] text-[11px] uppercase tracking-[0.24em] text-stone-700">
              Architecture Portfolio
            </p>
          </div>

          <h1 className="font-['Fraunces'] text-5xl leading-[0.95] text-stone-950 sm:text-6xl lg:text-7xl">
            I Design Spaces
            <br />
            With Structure,
            <br />
            Context, and Story.
          </h1>

          <p className="max-w-2xl font-['Sora'] text-base leading-relaxed text-stone-700 sm:text-lg">
            I’m an architecture student focused on people-first and
            climate-aware design. Currently applying for a 2026 internship to
            contribute in concept development, technical drafting, and visual
            storytelling.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/projects"
              className="inline-flex items-center justify-center border border-stone-900 bg-stone-900 px-7 py-3 font-['Sora'] text-xs uppercase tracking-[0.2em] text-white transition duration-300 hover:translate-y-[-2px] hover:bg-stone-800"
            >
              View Selected Works
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-stone-900 px-7 py-3 font-['Sora'] text-xs uppercase tracking-[0.2em] text-stone-900 transition duration-300 hover:translate-y-[-2px] hover:bg-stone-900 hover:text-white"
            >
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="border border-stone-400/60 bg-white/70 px-3 py-1.5 font-['Sora'] text-[11px] uppercase tracking-[0.14em] text-stone-700"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-stone-400/60 pt-8">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <p className="font-['Fraunces'] text-3xl text-stone-950">
                  {fact.value}
                </p>
                <p className="mt-1 font-['Sora'] text-[11px] uppercase tracking-[0.16em] text-stone-600">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 border border-stone-500/30" />
            <div className="absolute -right-5 -top-5 h-24 w-24 border-r border-t border-[#b88a4b]/80" />

            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1400&auto=format&fit=crop"
              alt="Architecture model and concept visualization"
              className="h-[520px] w-full rounded-[2rem_0.75rem_2.75rem_0.75rem] object-cover shadow-[0_32px_64px_-28px_rgba(41,37,36,0.65)] transition duration-500 hover:scale-[1.01]"
            />

            <div className="absolute -bottom-10 -left-3 w-[280px] border border-stone-300 bg-white/95 p-5 shadow-xl backdrop-blur-sm sm:-left-8">
              <p className="font-['Sora'] text-[10px] uppercase tracking-[0.22em] text-stone-500">
                Featured Academic Project
              </p>
              <h3 className="mt-2 font-['Fraunces'] text-2xl text-stone-900">
                Civic Learning Hub
              </h3>
              <p className="mt-2 font-['Sora'] text-sm leading-relaxed text-stone-600">
                Mixed-use concept balancing public activity, daylight strategy,
                and modular structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
