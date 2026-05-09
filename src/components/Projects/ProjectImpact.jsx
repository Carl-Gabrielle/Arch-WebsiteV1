export default function ProjectImpact({
  number,
  label,
}) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
      <h4 className="text-4xl font-extralight text-white">
        {number}
      </h4>

      <p className="mt-3 text-sm leading-relaxed text-zinc-500">
        {label}
      </p>
    </div>
  );
}