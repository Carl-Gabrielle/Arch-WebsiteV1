import Pic1 from "../assets/pic1.jpg";
export default function About() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f3f1ec] text-stone-900">
      {/* grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(68,64,60,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(68,64,60,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* RIGHT SOFT GLOW */}
      <div className="pointer-events-none absolute right-[-8rem] top-[10%] h-[26rem] w-[26rem] rounded-full bg-[#b88a4b]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-12">
          {/* LEFT IMAGE */}
          <div className="lg:col-span-5">
            <div className="group relative">
              {/* soft glow frame */}
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#b88a4b]/10 to-transparent blur-2xl opacity-60" />

              {/* frame */}
              <div className="absolute -inset-4 rounded-[2rem] border border-stone-500/25" />

              <img
                src={Pic1}
                alt="Portrait"
                className="relative h-[580px] w-full rounded-[2rem_0.75rem_2.75rem_0.75rem] object-cover shadow-[0_50px_90px_-40px_rgba(41,37,36,0.55)] transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* identity tag */}
              <div className="absolute -bottom-10 left-6">
                <div className="relative rounded-xl border border-white/10 bg-[#0d0d0d] px-5 py-4 backdrop-blur-md">
                  {/* subtle ambient accent */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
                    <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:88px_88px]" />
                  </div>

                  {/* role */}
                  <p className="font-['Sora'] text-[10px] uppercase tracking-[0.35em] text-white/50">
                    Architecture Student
                  </p>

                  {/* name */}
                  <p className="mt-1 font-['Fraunces'] text-lg leading-snug text-white">
                    Antonio R. Santa Cruz Jr.
                  </p>

                  {/* meta */}
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-['Sora'] text-[13px] text-white/60">
                    <span>Alaminos City, Pangasinan</span>
                    <span className="text-white/15">•</span>
                    <span>Philippines</span>
                    <span className="text-white/15">•</span>
                    <span>23 y/o</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative lg:col-span-7">
            {/* decorative blur behind text */}
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#c7b08a]/20 blur-3xl" />

            {/* HEADER */}
            <div className="relative lg:-mt-16 lg:pl-10">
              <p className="font-['Sora'] text-[11px] uppercase tracking-[0.35em] text-stone-500">
                About / Profile
              </p>

              <h1 className="font-['Fraunces'] text-5xl leading-[0.95] text-stone-950 sm:text-6xl lg:text-7xl">
                Designing spaces
                <br />
                that feel intentional,
                <br />
                not just built.
              </h1>

              <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#b88a4b]/70 to-transparent" />

              <p className="mt-8 max-w-2xl font-['Sora'] text-[15px] leading-relaxed text-stone-600">
                I am an architecture student graduate focused on clean,
                creative, and culturally rooted contemporary design turning
                lived experiences into spatial metaphor. My work blends
                structure, narrative, and environmental awareness to create
                designs that feel functional, intentional, and emotionally
                grounded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
