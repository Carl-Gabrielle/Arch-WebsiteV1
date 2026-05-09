export default function ProjectsBackground() {
  return (
    <>
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#b78b52]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#ffffff]/5 blur-3xl" />
    </>
  );
}